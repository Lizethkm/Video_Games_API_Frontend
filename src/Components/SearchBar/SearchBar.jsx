import React, { useState } from 'react';

const SearchBar = (props) => {
    // After Search Happens, Get Error Code Because now Games List is that filter List from search
    const [userInput, setUserInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let filteredGames = props.games.filter((game) => {
            if (game.name.toLowerCase().includes(userInput.toLowerCase())) { 
                return true; 
        }})
        props.setGames(filteredGames)
        setUserInput("")
    }

    function clearSearch(event){
        event.preventDefault();
        props.getAllVideoGames();
    }
    return (
        <form onSubmit={handleSubmit}>

            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button type="submit" className="btn btn-primary">Search</button>
            <button type="button" onClick = {clearSearch}>Clear</button>
        </form>
    );
}

export default SearchBar;