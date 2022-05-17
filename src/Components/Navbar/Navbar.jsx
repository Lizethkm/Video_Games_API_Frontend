import React from "react";
import "./Navbar.css";
import YarnPikachu from "./YarnPikachu.png";
import KirbyYarn from "./KirbyYarn.png";
import YoshiYarn from "./YoshiYarn.png";
import MarioBrosYarn from "./MarioBrosYarn.png"
import SearchBar from "../SearchBar/SearchBar";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h3> Video Games Data  </h3>
      <img src={YarnPikachu} alt='Yarn Pikachu' />
      <img src={KirbyYarn} alt='Yarn Kirby' />
      <img src={YoshiYarn} alt='Yarn Yoshi' />
      <img src={MarioBrosYarn} alt='Yarn Mario bros' />
      <SearchBar games = {props.games} setGames = {props.setGames} getAllVideoGames = {props.getAllVideoGames}/>
    </div>
  );
};

export default Navbar;