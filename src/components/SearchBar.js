import React from 'react'

function SearchBar({getWeather,search,setSearch}) {
    return (
        <form className="Search-Comp">
           <input value={search} className="Search-Bar" type="text" placeholder="Enter your city.." onChange={(e)=>setSearch(e.target.value)} />
           <button onClick={getWeather} className="Search-Btn">Search</button> 
        </form>
    )
}

export default SearchBar
