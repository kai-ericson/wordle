import GameSettings from "./components/GameSettings";
import Game from "./components/Game";
import { useState } from "react";

function App() {
 const [correctWord, setCorrectWord] = useState("");
 

 
  return (
    <main className="game">
     
      <h1 className="header">WORDLE</h1>
      <GameSettings onGetWord={(word) =>{
        setCorrectWord(word);
      }}/>
      
      <Game correctWord={correctWord}/>
      
        
      
    </main>
  )
}

export default App
