import React, { useState, useEffect } from 'react';
import './App.css';
import {key} from './APIkey'
import VideoDetail from './Components/VideoDetail/VideoDetails';
import VideoList from './Components/VideoList/VideoList';
import SearchBar from './Components/SearchBar/SearchBar'
import youtube from './API/youtube'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async(searchTerm) => { 
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: key,
        q: searchTerm
      }
    })
    const responsedArr = response.data.items;
    const firstVideo = responsedArr[0].id.kind !== 'youtube#channel' ? responsedArr[0] : responsedArr[1]

    setVideos(responsedArr)
    setSelectedVideo(firstVideo)
  }
  
  const onVideoSelect = ( video ) => {
    setSelectedVideo(video)
  }

  useEffect(()=> {
    handleSubmit('DevCode Camp')
  })

    
 
    return (
        <div className="ui container">
            <SearchBar handleSubmit={handleSubmit} /> <br/> <br/><br/><br/><br/><br/>

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            
              <VideoList onVideoSelect={onVideoSelect} videos={videos} setSelectedVideo={setSelectedVideo}/>
            )
          </div>
        </div>
      </div>
    </div>
    )
}

export default App;