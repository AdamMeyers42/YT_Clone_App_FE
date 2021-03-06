import React, {  useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';


function SearchBar({ handleSubmit }) {
    const [q, setQ] = useState({
      searchTerm: ''
    })
    const handleChange = (e) => setQ({ searchTerm: e.target.value })
    const onSubmit = (e) => {
      const { searchTerm } = q
      handleSubmit(searchTerm)
      e.preventDefault()
    }
  
    return (
        <div className="search-bar ui segment">
            <div className="searchInputs">
            <form className="form-wrapper" onSubmit={onSubmit} >                                            
                <input type="text" name="searchTerm" placeholder="search for..." onChange={handleChange}/>
                <button type="submit" value="go" id='submit'>Submit</button>
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
