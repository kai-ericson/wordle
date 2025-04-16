import GameSettings from "./components/GameSettings";
import Game from "./components/Game";

import { useState } from "react";

function App() {
 const [correctWord, setCorrectWord] = useState("");
 const [gameSettings, setSettings] = useState([]);
 const props = {
  word: correctWord,
  settings: gameSettings
 };
 
  return (
    <main>
      <h1 className="header">WORDLE</h1>
      <div className="app">
      <GameSettings onGetWord={(word, settings) =>{
        console.log("Settings: "+settings[0]+settings[1]);
        setCorrectWord(word);
        setSettings(settings);
      }}/>
      
      <Game correctWord={correctWord} settings={gameSettings}/>
      
      </div>
    </main>
  )
}

export default App
