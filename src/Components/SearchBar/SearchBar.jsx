import React, { useState } from 'react'

export const SearchBar = ( { onSearch } ) => {

    const [inputValue, setInputValue] = useState("")

    const handleSearchValue = ({ target }) => {
        setInputValue(target.value)
        onSearch(target.value)
    }



  return (

    <div className="search-bar-container">
        <input 
        className="search-bar-input"
        type="text"
        name="searchbar"
        placeholder="Ingresa tu búsqueda"
        onChange = { handleSearchValue }
        value={ inputValue }/>
    </div>
  )
}
