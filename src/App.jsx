import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {googleAPIKey} from './APIkey'
import VideoDetail from './VideoDetails'
import SearchBar from './SearchBar';

function App() {
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
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe>
        </div>
    );
}

export default App;
               
           
