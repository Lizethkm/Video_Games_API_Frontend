import { Chart } from "react-google-charts";
import React, {useState} from 'react';


const DisplayPlatformStats = (props) => {
  const [title, setTitle] = useState({
    title:"Sales Per Platform",
    vAxis: {title: "Sales"},
    hAxis: {title: "Platform"}
  })
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
      return [platform, parseFloat(sum), "blue"]
    });
    
    const data = [
      ["Platform", "Sales (Per millions)", { role: "style" }],
      ...platformArrays
    ];
    return data
  }


  return (
    
    <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} options= {title}/>
  );

}

export default DisplayPlatformStats;