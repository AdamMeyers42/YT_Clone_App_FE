import React, { useState, useEffect } from 'react';
import './App.css';
import { key } from './APIkey';
import VideoDetail from './Components/VideoDetail/VideoDetails';
import VideoList from './Components/VideoList/VideoList';
import SearchBar from './Components/SearchBar/SearchBar';
import youtube from './API/youtube'
import Comments from './Components/Comments/Comments';
import { Grid } from '@material-ui/core'

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
        <Grid justify="center" container spacing={10}>
                <Grid item xs={10}>
                    <Grid container spacing={10}>
                      <Grid item xs={12}>
                       <SearchBar onFormSubmit={handleSubmit}/> <br/><br/><br/>
                      </Grid>
                      <Grid item xs={8}>
                         <VideoDetail video={selectedVideo} />
                         <Comments comments={initialComments} />
                      </Grid>
                      <Grid item xs={4}>
                          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default App;