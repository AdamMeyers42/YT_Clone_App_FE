import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderlist = videos.map((video) => {
    return (
      <VideoItem video={video} 
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}/>
    );
  });
  return <div>{renderlist}</div>;
};

export default VideoList;