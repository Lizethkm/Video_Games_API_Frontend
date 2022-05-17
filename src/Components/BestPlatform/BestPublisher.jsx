
import {Chart} from "react-google-charts";




const BestPlatform = (props) => {
    
    function generateDataForPlatform(){
        
        let filterPublishers = props.games.filter((game) => {
            if (game.year >= 2010 && game.year <= 2015)
                return true
            })
        
        let publishers = filterPublishers.map((el) => {
            return el.publisher
        });
        let distinctPublishers = [...new Set(publishers)]
        
        let publishersArray = distinctPublishers.map(publisher=> {
            let allGames = filterPublishers.filter(game => game.publisher === publisher);
            let globalSales = allGames.map((game) => {
                return game.globalSales
            });
            
        let sum = parseFloat(globalSales.reduce(
            (total, currentValue) => total + currentValue, 0).toFixed(2));
        return [publisher, sum, "#b0120a"]
        }); 



        const data = [
            ["Platform", "Sales (Per Millions) ", {role: "style"}],
            ...publishersArray
        ];
        return data

    }

    const options = {
        title: "Best Publisher Per Global Sales Within 5 Yrs",
        chartArea: { width: "80%" },
        colors: ["#b0120a", "#ffab91"],
        hAxis: {
          title: "Total Sales (Per Millions)",
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