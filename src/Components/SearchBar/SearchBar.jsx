import React, { useState } from 'react';

const SearchBar = (props) => {
    // After Search Happens, Get Error Code Because now Games List is that filter List from search
    // const [userInput, setUserInput] = useState("");

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     let filteredGames = props.games.filter((game) => {
    //         if (game.name.includes(userInput)) { return true };
    //     })
    // props.setGames(filteredGames)
    // }


    const [searchGames, setSearchGames] = useState('')

    let handleSearch = (event) => {
        let searchedGame = event.target.value
        setSearchGames(searchedGame)
        props.searchVideoGames(searchedGame)
    }




    return (
        <form onSubmit= {handleSearch}>

            <input value={searchGames} onChange={handleSearch} />
            <button type="submit" className="btn btn-primary">Search</button>

        </form>
    );
}

export default SearchBar;