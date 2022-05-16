
import {Chart} from "react-google-charts";




const BestPlatform = (props) => {
    
    function generateDataForPlatform(){
        
        let filterPlatforms = props.games.filter((game) => {
            if (game.year >= 2010 && game.year <= 2015)
                return true
            })
        
        let platforms = filterPlatforms.map((platform) => {
            return platform.platform
        });
        let distinctPlatforms = [...new Set(platforms)]
        console.log("distinct;", distinctPlatforms)
        let platformArrays = distinctPlatforms.map(platform => {
            let allGames = filterPlatforms.filter(game => game.platform === platform);
            let globalSales = allGames.map((game) => {
                return game.globalSales
            });
            
        let platformSum = parseFloat(globalSales.reduce(
            (total, currentValue) => total + currentValue, 0).toFixed(2));
        return [platform , platformSum, "#b0120a"]
        }); 



        const data = [
            ["Platform", "Sales", {role: "style"}],
            ...platformArrays
        ];
        return data

    }

    const options = {
        title: "Best Selling Platform Within 5 Yrs",
        chartArea: { width: "80%" },
        colors: ["#b0120a", "#ffab91"],
        hAxis: {
          title: "Total Sales",
          minValue: 0,
        },
        vAxis: {
          title: "Platforms",
        },
      };


    
    
    return ( 

        <Chart chartType="BarChart" width="100%" height="400px" data={generateDataForPlatform()} options = {options} />

     );
}
 
export default BestPlatform;