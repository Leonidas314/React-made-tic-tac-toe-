import {TURNS,WINNER_COMBOS} from "./const.jsx"
export const checkWinner = ([...boardToCheck]) => {
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
export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
  }
