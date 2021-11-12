import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { key } from '../../APIkey';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';


function SearchBar() {
    const searchQ = []
    const [q, setQ] = useState();

    useEffect(() => {
        console.log("useEffect is running")
        searchVideos();
    }, [setQ])

    const handleSubmit = async (e) =>  setQ(e.target.value)

    const searchVideos = async (e) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q= ${q} &type=video&key=${key}&part=snippet`)
        console.log(response);
        return searchQ = response.data.videoId
    }

    return (
        <div className="search">
            <div className="searchInputs">
            <form onSubmit={handleSubmit} >                                            
            <input type="text" onChange={(e) => setQ(e.target.value)} />
            <button type="submit">Submit</button>
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