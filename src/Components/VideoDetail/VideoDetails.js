import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div>
        <iframe src={videoSrc} title="video player" />
      </div>
      <div >
        <h4> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;