import React from "react";


const DisplayGames = (props) => {
  function findGames(name) {
    let singleGame = props.games.filter((game) => {
        if (game.name === name) { return true }
    })
    props.setGames(singleGame)
  }
  return (
    <div>
      <table className= 'table'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {props.games.filter((game)=>{if(game.year >= 2013)return true}).map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.platform}</td>
                <td>{element.year}</td>
                <td>{element.genre}</td>
                <td>{element.publisher}</td>
                <td><button onClick={(e) => {findGames(element.name)}}>View Status</button></td>
              </tr>
            );

          })
          }
        </tbody>
      </table>
    </div>
  )
}
export default DisplayGames;