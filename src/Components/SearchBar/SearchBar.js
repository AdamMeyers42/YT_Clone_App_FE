import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { key } from '../../APIkey';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';


function SearchBar(props) {
    const [q, setQ] = useState('');

  

    const handleSubmit = async (e) => {
        console.log('TEST')
        console.log(e)
        e.preventDefault();
        props.search(q)
    } 
    const handleChange = (e) => {
        setQ(e.target.value)
    }

    



  

    return (
        <div className="search">
            <div className="searchInputs">
            <form onSubmit={handleSubmit} >                                            
                <input type="text" name="searchTerm" onChange={handleChange}/>
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