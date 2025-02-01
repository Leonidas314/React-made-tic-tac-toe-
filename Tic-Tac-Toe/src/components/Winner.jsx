import {Square} from "./Square"
export function Winner({winner, resetGame}){

        if(winner === null) return null;
        else{
          console.log("winner", winner);
        }
        const winnerText = winner === false ? 'Empate' : 'Ganó el jugador: ';
        return (

          <section className="winner">
            <div className ="text">
              <h2> 
                {winnerText}
              </h2>
              <header className="win">{winner && <Square >{winner}</Square>}</header>
              <footer><button onClick={resetGame}>Restart Game</button></footer>
            </div>
          </section>
        )
}

