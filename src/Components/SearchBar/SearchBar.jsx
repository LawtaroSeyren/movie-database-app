import React, { useState } from 'react'

export const SearchBar = ( { onSearch, media } ) => {

    const [inputValue, setInputValue] = useState("")

    const handleSearchValue = ({ target }) => {
        setInputValue(target.value)
        onSearch(target.value)
    }

    let toSearch = ""
    media === "movie" ? toSearch = "películas" : toSearch = "series"

  return (

    <div className="search-bar-container">
        <input 
        className="search-bar-input"
        type="text"
        name="searchbar"
        placeholder={`Ingresa tu búsqueda de ${toSearch}`}
        onChange = { handleSearchValue }
        value={ inputValue }/>
    </div>
  )
}
