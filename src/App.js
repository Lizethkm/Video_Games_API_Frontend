import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayVideoGames from './Components/DisplayVideoGames';






function App() {

    const [games, setGames] = useState([])

    const getGames = async () => {
        let response = await axios.get("https://localhost:7260/api/games");
        console.log(response.data)
        setGames(response.data)
    };


    useEffect(() => {
        getGames()
    }, [])


    return (
        <div>
            < DisplayVideoGames games = {games} />
        </div>
    )


}

export default App;