import { Chart } from "react-google-charts";
import React, {useState} from 'react';


const DisplayPlatformStats = (props) => {
//   const [title, setTitle] = useState({
//     title:"Sales Per Platform",
//     vAxis: {title: "Sales"},
//     hAxis: {title: "Platform"}
//   })
  function generateDataForChart() {
    let filteredGames = props.games.filter(game => game.year >= 2013)
    let platforms = filteredGames.map(game => {
      return game.platform
    });
    let distinctPlatforms = [...new Set(platforms)]
    let platformArrays = distinctPlatforms.map(platform => {
      let allGames = filteredGames.filter(game => game.platform === platform);
      let globalSales = allGames.map(game => {
        return game.globalSales
      });

      let sum = globalSales.reduce(
        (total, currentValue) => total + currentValue, 0).toFixed(2);
      return [platform, parseFloat(sum), "black"]
    });
    
    const data = [
      ["Platform", "Sales (Per millions)", { role: "style" }],
      ...platformArrays
    ];
    return data
  }

  const options = {
    title: "Global Sales Per Platform",
    hAxis: { title: "Platform", minValue: 0, maxValue: 15 },
    vAxis: { title: "Sales Per Millions", minValue: 0, maxValue: 15 },
    legend: "none",
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    enableInteractivity: false,
  };

  return (
    
    <Chart  chartType="ScatterChart" width="100%" height="400px" data={generateDataForChart()} options= {options}/>
  );

}

export default DisplayPlatformStats;