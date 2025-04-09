import GameSettings from "./components/GameSettings";
import Game from "./components/Game";
import { useState } from "react";

function App() {
 const [correctWord, setCorrectWord] = useState("");
 const items = [ 
  {
  label: "ROBOT" ,
  status:
    [{letter: "R", result: "misplaced"},
     {letter: "O", result: "misplaced"},
     {letter: "B", result: "misplaced"},
     {letter: "O", result: "misplaced"},
     {letter: "T", result: "misplaced"}
    ]
 },
 {
  label: "ROBOT" ,
  status:
    [{letter: "R", result: "misplaced"},
     {letter: "O", result: "misplaced"},
     {letter: "B", result: "misplaced"},
     {letter: "O", result: "misplaced"},
     {letter: "T", result: "misplaced"}
    ]
 }
 ];

 
  return (
    <main className="app">
      <div className="game">
        <h1 className="header">WORDLE</h1>
        <GameSettings onGetWord={(word) =>{
          setCorrectWord(word);
        }}/>
        <Game correctWord={correctWord}/>
        <h2>Gissningar</h2>
        <ul className="guessList">
          {items.map((item) =>{
           return(
            <li className="guessItem">
              {item.status.map((element) =>{
                <p >{element.letter}</p>
              })}
            </li>
           )
          }
          )}

        </ul>
      </div>
    </main>
  )
}

export default App
