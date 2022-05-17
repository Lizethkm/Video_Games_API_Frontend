
import {Chart} from "react-google-charts";




const BestPublisher = (props) => {
    
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
            let northAmericaSales = allGames.map((game) => {
                return game.northAmericaSales
            })
            
        let globalSum = parseFloat(globalSales.reduce(
            (total, currentValue) => total + currentValue, 0).toFixed(2));

        let northAmericaSum = parseFloat(northAmericaSales.reduce(
            (total, currentValue) => total + currentValue, 0).toFixed(2))
        
        return [publisher, northAmericaSum, globalSum ]
        }); 

        



        const data = [
            ["Platform", "North America Sales", "Global Sales"],
            ...publishersArray
        ];
        return data

    }



    const options = {
        title: "Best Publisher Per Global Sales Within 5 Yrs",
        vAxis: { title: "Accumulated Sales(Per Millions)" },
        isStacked: true,
      };
    
    
    return ( 

        <Chart chartType="SteppedAreaChart" width="100%" height="400px" data={generateDataForPlatform()} options = {options} legendToggle />

     );
}
 
export default BestPublisher;