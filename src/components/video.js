import React from "react"

const Video = ({ videoSrcURL }) => (
  <div className="video">
    <video muted autoplay={true} style={{ width: `100%` }}>
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  </div>
)
export default Video
