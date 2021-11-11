import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {googleAPIKey} from './APIkey'
import VideoDetail from './VideoDetails'
import SearchBar from './SearchBar';
import Search from './Search';

function App() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        console.log("useEffect is running")
        searchVideos();
    }, [])

    async function searchVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=top react videos&type=video&key=AIzaSyDmJgZx84PoQlXfu2PjnARjqU2U_XVDQbw&part=snippet`)
        console.log(response);
    }


    return (
        <div className="App">
            <h1><SearchBar placeholder="Enter search parameter..." data={''}/></h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/y-pM7EPQl1s?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe>
        </div>
    );
}

export default App;
               
           
