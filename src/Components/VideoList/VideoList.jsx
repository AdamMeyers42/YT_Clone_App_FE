import React from 'react'
import VideoItem from '../VideoItem/VideoItem'

import { Grid } from '@material-ui/core'

function VideoList( {videos, onVideoSelect} ) {
  const listOfVideos = videos.map((video, id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return (
    <Grid container spacing={10}>
      { listOfVideos }
    </Grid>
  )
}

export default VideoList