import React, { useState} from 'react';
import { Chart } from "react-google-charts";
const BestPlatformChart = (props) => {
  const [title, setTitle] = useState({
    title: "Best Selling Console since 2013",
    vAxis: {minValue: 0},
    colors: ['green']

  })
  let filteredPlatform = props.games.filter((game) => {
    if (game.year >= 2013)
      return true
  }) 
  let platform = filteredPlatform.map((element) => {
    return [element.platform,element.globalSales,0]
  })




  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={[["Console", "Sales(per millions)", { role: "style" }], ...platform]}
      options = {title} />

  )
}


export default BestPlatformChart;