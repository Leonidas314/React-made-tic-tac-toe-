import React,{ useState } from "react"
import { Square } from "./components/Square";
import confetti from "canvas-confetti"
import {TURNS} from "./components/const.jsx"
import {checkWinner,checkEndGame} from "./components/logic.jsx"
import {Winner} from "./components/Winner.jsx"
function App(){
  const [board,setBoard] = useState(() => {
  const boardFromStorage=window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage) 
    return Array(9).fill(null)
  })
  const [turn,setTurn] = useState(()=>{
  const turnFromStorage=window.localStorage.getItem('turn')
      return turnFromStorage ?? TURNS.X
     })
  const [winner,setWinner] = useState(null);
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null) 

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const updateBoard = (index) => {
    if(board[index] || winner) return 
    setBoard((board) => {
      const newBoard = [...board]
      newBoard[index] = turn
    //Guardamos el estado de la partida
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',(newTurn))
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
      <Winner winner={winner} resetGame={resetGame}/>
    </main>
  )

}

export default App
