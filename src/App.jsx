import React, { useState, useEffect } from 'react';
import './App.css';
import { key } from './APIkey';
import VideoDetail from './Components/VideoDetail/VideoDetails';
import VideoList from './Components/VideoList/VideoList';
import SearchBar from './Components/SearchBar/SearchBar';
import youtube from './API/youtube'
import Comments from './Components/Comments/Comments';

function App() {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState()
    const initialComments = [{ id: 1, text: "This is the first comment" }, { id: 2, text: "This is the second comment" }]

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: key,
                q: searchTerm
            }
        })
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} /> <br /> <br /><br /><br /><br /><br />
            <VideoDetail video={selectedVideo}/> <br /> <br />
            <Comments comments={initialComments} />
            <br /> <br /><br /><br /><br /><br />
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} onVideoSelect={onVideoSelect} />
        </div>
    )
}

export default App;