import React, {  useState } from 'react';


const VideoDetail = () => {
  const [selectedVideo, setSelectedVideo] = useState()
  if (!selectedVideo) {
    return (
      <div>
        <p>Enter a Search Term to Search for Videos</p>
      </div>
    );
  }
  

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.video.id.videoId}`;
  console.log('video detail')
  
  return (
    <container>
    <div>
      <div>
        <iframe src={videoSrc} title="video player" />
      </div>
      <div >
        <h4> {selectedVideo.video.snippet.title}</h4>
        <p>{selectedVideo.video.snippet.description}</p>
      </div>
    </div>
    </container>
  );
};

export default VideoDetail;