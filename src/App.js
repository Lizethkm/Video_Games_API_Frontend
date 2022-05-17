import React, { useEffect, useState } from 'react';
import axios from "axios";
import DisplayPlatformStats from './Components/DisplayVideoGames/DisplayVideoGames';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import BestPlatformChart from './Components/BestConsoleStats/BestConsoleChart';
import BestPublisher from './Components/BestPublisher/BestPublisher';
import Navbar from './Components/Navbar/Navbar'
import "./App.css"

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
      <div>
        <Navbar className="navbar-brand" games = {games} setGames = {setGames} getAllVideoGames = {getAllVideoGames} />
      </div>
      <div>
        <DisplayPlatformStats games={games} />
        <BestPlatformChart games = {games}/>
        <BestPublisher games = {games} />
        <DisplayGames games={games} setGames = {setGames}/>
      </div>
    </div>
  );
}

export default App; 
