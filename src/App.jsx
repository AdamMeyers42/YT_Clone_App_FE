import React, { useState } from 'react';
import './App.css';
import {key} from './APIkey'
import VideoDetail from './Components/VideoDetail/VideoDetails'
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios'


function App() {
    const [q, setQ] = useState([])
    const searchVideos = async (searchTerm) => {
        console.log(key)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=${key}&part=snippet`)
        console.log(response);
        setQ(response.data)
        // return searchQ = response.data.videoId
    }
 
    return (
        <div className="App">
            <h1><SearchBar search={searchVideos}/></h1>
            <br />
            <br />
            <br />
            <VideoDetail video={q}/>
            <br />
            <br />
            <br />
            <br />
            {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/y-pM7EPQl1s?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe> */}
        </div>
    )
}

export default App;