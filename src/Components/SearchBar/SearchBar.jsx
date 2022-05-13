import React, { useState } from 'react';

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let filteredGames = props.games.filter((game) => {
            if (game.name.includes(userInput)) { return true };
        })
    props.setGames(filteredGames)
    }
    return (
        <form onSubmit={handleSubmit}>

            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button type="submit" className="btn btn-primary">Search</button>

        </form>
    );
}

export default SearchBar;