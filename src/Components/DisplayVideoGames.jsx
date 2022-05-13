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

        let distinctPlatform = [...new Set(platforms)]
        console.log("Distinct Platform:", distinctPlatform)

        let platformArrays = distinctPlatform.map(platform => {
            // Loop through all games to get sales for platform + Add Sum of Global Sales
            let allGamesForPlatform = filterGames.filter(game => game.platform == platform)
            
            return  [platform, 10, "silver"]

        });

        console.log("Platform Arrays:", platformArrays)

        const data = [
            ["Platform", "Sales", { role:  "style" }],
            ...platformArrays
            

          ];
          console.log("Data:", data)
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