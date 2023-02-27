import React from 'react'

const Hero = () => {
  return (
    <div id="hero">
          <div id="heroleft">
            <div id="heroleft-texts">
              <h1>Stay curious.</h1>
              <h6>
                Discover stories, thinking, and expertise from writers on any
                topic.
              </h6>
              <button> Start Reading</button>
            </div>
          </div>
          <div id="heroright">
            <lottie-player
              id="lottie"
              src="./jsondata.json"
              background="transparent"
              speed="2"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
  )
}

export default Hero