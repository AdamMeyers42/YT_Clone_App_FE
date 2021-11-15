import React from "react";

const VideoDetail = ({ video }) => {
  
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log('video detail')
  return (
    <container>
    <div>
      <div>
        <iframe src={videoSrc} title="video player" />
      </div>
      <div >
        <h4> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
    </container>
  );
};

export default VideoDetail;