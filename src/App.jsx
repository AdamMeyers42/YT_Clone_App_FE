import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {googleAPIKey} from './APIkey'
import VideoDetail from './VideoDetails'
import SearchBar from './SearchBar';

function App() {
    return (
        <div className="App">
            <SearchBar placeholder="Enter search parameter..." data={''}/>
        </div>
    );
}

export default App;
               
           
