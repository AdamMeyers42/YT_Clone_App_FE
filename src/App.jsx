import React, { useState, useEffect } from 'react';
import './App.css';
import {key} from './APIkey'
import VideoDetail from './Components/VideoDetail/VideoDetails';
import axios from 'axios'
import APIkey from './APIkey'
import SearchBar from './Components/SearchBar/SearchBar'
import youtube from './API/youtube'

function App() {
    const [q, setQ] = useState()
    const [isloading, setLoading] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();
    
    useEffect(() => {
        onTermSubmit("Dev Code Camp ");
      });

      
    const onTermSubmit = async (q) => {
        setLoading(true);
        const response = await youtube.get("/search", {
            params: {
                q: q,
                key: 'key',
                maxResults: 5,
                part: "snippet",
                type: "video",
            }
        })
        console.log(response.data.items);
        setQ(response.data.items);
        setSelectedVideo(response.data.items[0]);
        setLoading(false);
    }
    const searchVideos = async (searchTerm) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=${key}&part=snippet`)
        console.log(response);
        setQ(response.data)
        // return searchQ = response.data.videoId
    }
 
    return (
        <div className="ui container">
            <SearchBar searchTerm={onTermSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          {/* <div className="five wide column">
            {isloading ? (
              <h1>Loading...</h1>
            ) : (
              <VideoList videos={result} onVideoSelect={onVideoSelect} />
            )}
          </div> */}
        </div>
      </div>
    </div>
    )
}

export default App;