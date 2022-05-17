import React from 'react';
import { Chart } from "react-google-charts";
const BestPlatformChart = (props) => {

  function DisplayPlatform(){

    let filteredPlatform = props.games.filter(game => game.year >= 2013)
    let platforms = filteredPlatform.map(element => {
      return element.platform
    });
  
    let distinctPlatforms = [...new Set(platforms)]
          
    let platformArrays = distinctPlatforms.map(platform=> {
      let allPlatforms = filteredPlatform.filter(game => game.platform === platform);
      let globalSales = allPlatforms.map((el) => {
        return el.globalSales
      });
      
      let sum = parseFloat(globalSales.reduce(
        (total, currentValue) => total + currentValue, 0).toFixed(2));
      return [platform, sum, "green"]
      }); 

    const data = [
      ["Platform", "Sales(Per Millions", {role: "style"}],
      ...platformArrays
    ];
    return data
  }

   const options = {
    title: "Best Selling Console since 2013",
    chartArea: { width: "80%" },
    hAxis: {
      title: "Total Sales (Per Millions)",
      minValue: 0,
    },
    vAxis: {
      title: "Platforms",
    },
    colors: ["green"],
  };
  
  
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={DisplayPlatform()}
      options = {options} />

  )
}


export default BestPlatformChart;