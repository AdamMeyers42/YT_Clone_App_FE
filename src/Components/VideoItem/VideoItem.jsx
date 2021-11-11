import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    const onVideoClick = () => {
        onVideoSelect(video);
    }
    return (
        <div onClick={onVideoClick} >
            <img src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title} />
                <div>
                    <div>{video.snippet.title}</div> 
                </div>

        </div>
    )
}

export default VideoItem 
