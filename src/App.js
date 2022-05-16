import React, { useEffect, useState } from 'react';
import axios from "axios";
import DisplayPlatformStats from './Components/DisplayVideoGames/DisplayVideoGames';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import BestPlatformChart from './Components/BestConsoleStats/BestConsoleChart';
import BestPlatform from './Components/BestPlatform/BestPlatform';


function App() {
  
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, []);

  async function getAllVideoGames() {
    let response = await axios.get("https://localhost:7260/api/games/");
    setGames(response.data);
  }



  return (
    <div>
      <h3> Video Games  </h3>
      <SearchBar games = {games} setGames = {setGames} getAllVideoGames = {getAllVideoGames}/>
      <DisplayPlatformStats games={games} />
      <BestPlatformChart games = {games}/>
      <BestPlatform games = {games} />
      <DisplayGames games={games} setGames = {setGames}/>
      
      
    </div>
  );
}

export default App;