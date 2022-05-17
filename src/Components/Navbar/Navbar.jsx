import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h3> Video Games Data  </h3>
      <SearchBar games = {props.games} setGames = {props.setGames} getAllVideoGames = {props.getAllVideoGames}/>
    </div>
  );
};

export default Navbar;