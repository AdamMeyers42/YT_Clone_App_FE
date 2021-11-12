import React from 'react';
import './App.css';
import KEY from './APIkey'
import VideoDetail from './Components/VideoDetail/VideoDetails'
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
 
    return (
        <div className="App">
            <h1><SearchBar/></h1>
            <br />
            <br />
            <br />
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