import React,{ useState } from "react"
import { Square } from "./components/Square";
import confetti from "canvas-confetti"
const TURNS = {
  X:'X',
  O:'O'
}
const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App(){
  const [board,setBoard] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState(TURNS.X);
  const [winner,setWinner] = useState(null)
  const checkWinner = ([...boardToCheck]) => {
    for(const combo of WINNER_COMBOS){
      const  [a,b,c] = combo
      console.log(boardToCheck
      )
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
       ){
        return boardToCheck[a]
       }
    }
  }
  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
  }
  const updateBoard = (index) => {
    if(board[index] || winner) return 
    setBoard((board) => {
      const newBoard = [...board]
      newBoard[index] = turn
    const newWinner = checkWinner([...newBoard])
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }else if(checkEndGame([...newBoard]))
      setWinner(false);
      return newBoard
    });
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null) 
  }
  return (
    <main className = 'board'>
      <h1>Tic - Tac - Toe</h1>
      <header><button onClick={resetGame}>Clear Game</button></header>
      <section className="game">
        {
        board.map((square,index) => {
          return (
           <Square 
           key={index} 
           index={index}  
           updateBoard={updateBoard}
           >
              {square}
          </Square>
          )
        })
      }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        
      </section>
      {
        winner !== null && (
          <section className="winner">
            <div className ="text">
              <h2> {
                winner ===false ? 'Draw' : `${winner} wins!`
                }
              </h2>
              <header className="win">{winner && <Square >{winner}</Square>}</header>
              <footer><button onClick={resetGame}>Restart Game</button></footer>
            </div>
          </section>
        )
      }
    </main>
  )

}

export default App
