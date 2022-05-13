import React from 'react';
import {Chart} from "react-google-charts";




const DisplayVideoGames = ({games}) => {

    function generateDataForChart (){
        console.log(games)

        let filterGames = games.filter(game => game.year >= 2013);
        console.log(filterGames)

        let platforms = filterGames.map(game => {
            return game.platform
        })
        console.log(platforms)

        const data = [
            ["Platform", "Sales", { role: "style" }],
            ["PS3", 8.94, "#b87333"], // RGB value
            ["Silver", 10.49, "silver"], // English color name
            ["Gold", 19.3, "gold"],
            ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
          ];
          return data;
    }



    return ( 
        <div>
            <h1>Video Game Graph</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
        </div>

     );
}
 
export default DisplayVideoGames;