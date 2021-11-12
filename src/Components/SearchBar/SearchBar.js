import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { key } from '../../APIkey';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';


function SearchBar() {
    const searchQ = []
    const [q, setQ] = useState('Test');

    useEffect(() => {
        console.log("useEffect is running")
        searchVideos();
    })

    const handleSubmit = async (e) => {
        console.log('TEST')
        console.log(e)
        e.preventDefault();
        setQ(e.target[0].value)
    } 


    const searchVideos = async () => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${q}&type=video&key=${key}&part=snippet`)
        console.log(response);
        // return searchQ = response.data.videoId
    }

    return (
        <div className="search">
            <div className="searchInputs">
            <form onSubmit={handleSubmit} >                                            
            <input type="text" />
            <button type="submit" >Submit</button>
            </form>
                <div className="searchIcon">
                    <SearchIcon /> 
                </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar;