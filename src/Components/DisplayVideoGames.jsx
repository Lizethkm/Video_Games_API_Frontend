import React, { useState } from 'react';




const DisplayVideoGames = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Platform</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Publisher</th>
                    <th>North America Sales</th>
                    <th>Europe Sales</th>
                    <th>Japan Sales</th>
                    <th>Other Sales</th>
                    <th>Global Sales</th>

                </tr>
              
            </thead>
            <tbody>
                {props.games.map((el) => {
                    return (
                        <tr>
                            <td>{el.rank}</td>
                            <td>{el.game}</td>
                            <td>{el.platform}</td>
                            <td>{el.year}</td>
                            <td>{el.genre}</td>
                            <td>{el.publisher}</td>
                            <td>{el.NorthAmericaSales}</td>
                            <td>{el.EuropeSales}</td>
                            <td>{el.JapanSales}</td>
                            <td>{el.OtherSales}</td>
                            <td>{el.GlobalSales}</td> 
                        </tr>
                    
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayVideoGames;