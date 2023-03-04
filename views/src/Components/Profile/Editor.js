import { createReactEditorJS } from "react-editor-js";
import { useRef, useCallback } from "react";
import { EDITOR_JS_TOOLS } from "./constants";
import { asynccreateblog, asyncloadblogs } from "../../store/userActions";
import { useDispatch } from "react-redux";

const ReactEditorJS = createReactEditorJS();

function App() {
  const dispatch = useDispatch();

  const editorJS = useRef(null);
  const handleInitialize = (instance) => {
    editorJS.current = instance;
  };

  const handleSave = async () => {
    const savedData = await editorJS.current.save();

    let blog = "";
    savedData.blocks.forEach((element) => {
      // console.log(element);

      if (element.type === "paragraph") {
        blog += "<p>" + element.data.text + "</p>";
      }
      if (element.type === "header") {
        blog +=
          "<h" +
          element.data.level +
          ">" +
          element.data.text +
          "</h" +
          element.data.level +
          ">";
      }
      if (element.type === "list") {
        blog +=
          "<" +
          element.data.style[0] +
          element.type[0] +
          "/>" +
          element.data.items.map((i) => "<li>" + i + "</li>").join("") +
          "<" +
          element.data.style[0] +
          element.type[0] +
          "/>";
      }
      if (element.type === "code") {
        blog +=
          "<" +
          element.type +
          ">" +
          element.data.code +
          "</" +
          element.type +
          ">";
      }
      if (element.type === "quote") {
        blog +=
          "<" +
          element.type[0] +
          ">" +
          element.data.text +
          "</" +
          element.type[0] +
          ">";
      }
      if (element.type === "image") {
        blog +=
          "<img src=" +
          element.data.file.url +
          " /><figcaption>" +
          element.data.caption +
          "</figcaption>";
      }
    });

    await dispatch(asynccreateblog({ data: blog }));
    await dispatch(asyncloadblogs());
    await editorJS.current.clear();

  };

  const handleClear = useCallback(async () => {
    await editorJS.current.clear();
  }, []);
  return (
    <div className="editor-section">
      <h5 id="create-h5">Create your Blog</h5>
      <div className="editor-div">
        <ReactEditorJS
          tools={EDITOR_JS_TOOLS}
          onInitialize={handleInitialize}
        />
      </div>
      <div id="editorbtns">
        <button className="profile-btn save-clear" onClick={handleSave}>
          Save
        </button>
        <button className="profile-btn save-clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
