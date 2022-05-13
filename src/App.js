import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayVideoGames from './Components/DisplayVideoGames';






function App() {

    const [games, setGames] = useState([])

    useEffect(() => {
        getGames()
    }, [])

    const getGames = async () => {
        try{
            let response = await axios.get("https://localhost:7260/api/games/");
            setGames(response.data)
        }catch(ex){
          console.log(`ERROR in getGames EXCEPTION: ${ex}`)
        }
    }

    return ( 
        <div>
            < DisplayVideoGames games = {games} />
        </div>
    )


}

export default App;