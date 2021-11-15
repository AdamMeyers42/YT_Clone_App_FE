import React, { useState, useEffect } from 'react';
import './App.css';
import { key } from './APIkey';
import VideoDetail from './Components/VideoDetail/VideoDetails';
// import VideoList from './Components/VideoList/VideoList';
import SearchBar from './Components/SearchBar/SearchBar';
import youtube from './API/youtube'

function App() {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState()
    // const [q, setQ] = useState()



    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: key,
                q: searchTerm
            }
        })
        const videos = response.data.items;
        const firstVideo = {video: videos[0].id.kind !== 'youtube#channel' ? videos[0] : videos[1]}

        setVideos(videos)
        setSelectedVideo(firstVideo)
    }

    // const onVideoSelect = (video) => {
        // setSelectedVideo(video)
    // }

    useEffect(() => {
        handleSubmit()
    }
    )

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} /> <br /> <br /><br /><br /><br /><br />
            <VideoDetail />
            {/* <VideoList videos={videos} setSelectedVideo={setSelectedVideo} /> */}
        </div>
    )
}

export default App;