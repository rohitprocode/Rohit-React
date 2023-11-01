import React from 'react'
import video from './Practice01'

function Video() {
  return (
    <div>
      {/* <Thumbnail video={video}/> */}
      <a href={video.url}></a>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      k
    </div>
  )
}

export default Video
