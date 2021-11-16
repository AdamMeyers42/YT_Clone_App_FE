import React, { useState, useEffect } from 'react';
import './App.css';
import { key } from './APIkey';
import VideoDetail from './Components/VideoDetail/VideoDetails';
import VideoList from './Components/VideoList/VideoList';
import SearchBar from './Components/SearchBar/SearchBar';
import youtube from './API/youtube';
import axios from 'axios';


function App() {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState()
    // const [comments, setComments] = useState()

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
        // setComments();
    }, [videos]);

    const onSubmit = (e) => {
        e.preventDefault()
        const response = axios.post(
            'http://localhost:8000/comments/',
            {
                video_id: e.target[0].value,
                comment: e.target[1].value
            }
        )
           const comments=getComments(e.target[0].value)
           console.log('here are my new comments')
           console.log(comments)

      }
    
    const getComments = (videoId) => {
        const response = axios.get('http://localhost:8000/comments/'+videoId)
        console.log('here are my comments')
        console.log(response)
        return response.data
        // return setComments(response.data)
    }

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} /> <br /> <br /><br /><br /><br /><br />
            <VideoDetail video={selectedVideo}/> <br /> <br />
            <br /> <br /><br /><br /><br /><br />
            <form onSubmit={onSubmit}>
                <input type="hidden" id="video_id" name="video_id" value={selectedVideo != null ? selectedVideo.id.videoId : ''} />
                <input type="text" name="comment" placeholder="Add Comment Here" />
                <button type="submit" value="new" id='submit'>Add Comment</button>
            </form>
            <ul>        
                <li>Comment One</li>
                <li>Comment Two</li>
                <li>Comment Three</li>
            </ul>
            <VideoList videos={videos} setSelectedVideo={setSelectedVideo} onVideoSelect={onVideoSelect} />
        </div>
    )
}

export default App;