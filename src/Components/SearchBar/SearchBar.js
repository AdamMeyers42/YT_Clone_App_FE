import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { key } from '../../APIkey';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';


function SearchBar() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState();

    useEffect(() => {
        console.log("useEffect is running")
        searchVideos();
    }, [q])

    async function searchVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${q}&type=video&key=${key}&part=snippet`)
        console.log(response);
    }

    return (
        <div className="search">
            <div className="searchInputs">
            <form>                                            
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} class="st-search-input search-field" />
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