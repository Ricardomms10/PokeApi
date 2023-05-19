import React, { useState } from "react";

const FilePokemon = (props) => {
    const [search, setSearch] = useState('dito')
    const { onSearch } = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch (undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch (search)
    }

    return (
        <div className="search-container">
            <div className="search" >
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchPoke-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>

        </div>
    )
}

export default FilePokemon;