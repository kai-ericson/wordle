import { useState } from "react";
import makeGuess from "./guess";
//import EndGame from "./EndGame";
export default function Game({ correctWord }) {
    //console.log("Settings: "+settings);
    const [startTime] = useState(new Date());
    const [gameState, setGameState] = useState("playing");
    const [endTime, setEndTime] = useState(null);
    const [name, setName] = useState("");
    const [guess, setGuess] = useState("");
    const [items, setItems] = useState([ 
        {results:
          [{letter: "R", result: "misplaced"},
           {letter: "O", result: "correct"},
           {letter: "B", result: "misplaced"},
           {letter: "O", result: "incorrect"},
           {letter: "T", result: "misplaced"}
          ]
       }
       ]);
       if(gameState === "playing"){
        return(
            <div className="game">
                <form className="guessForm" onSubmit={(ev) =>{
                    ev.preventDefault();
                    console.log("Guess: "+guess);
                    const results = makeGuess(guess, correctWord);
                    console.log(results);
                    setItems([...items, results]);
                    if(guess.toLowerCase === correctWord.toLowerCase){
                        console.log("You won!");
                        setGameState("won");
                        setEndTime(new Date());
                    }
                }}>
                    <input className="guessInput" onChange={(ev) => {
                        ev.preventDefault();
                        setGuess(ev.target.value);
                    }} ></input>
                    <button className="guessBtn">Make guess</button>
                </form>
                <h2>Guesses</h2>
                <ul className="guessList">
                    {items.map((item) =>{
                        console.log(item.results);
                        return(
                        <li className="guessItem">{item.results.map((element) =>{
                            return(
                            <span className={element.result}>{element.letter}</span>
                            )
                        })}</li>
                    )}
                )}
            </ul>
            </div>
        );
       }
       if(gameState === "won"){
        const duration = Math.round((endTime - startTime)/1000);
        return(
            <div className="game">
            <h1>You won!</h1>
            <p>Correct word: {correctWord}</p>
            <p>Guesses: {items.length} </p>
            <p>Duration: {duration} s</p>
            <p>Add to highscore list: </p>
            <form onSubmit={async(ev)=>{
                ev.preventDefault();
                console.log(name);
                const highScore = [name, duration, items.length];
                console.log(highScore);
                const url = "api/highscore/:"+highScore;
                const response = await fetch(url);
            }}>
                <input placeholder="Your name" onChange={(ev) =>{setName(ev.target.value)}}></input>
                <button className="check">Done</button>
            </form>
        </div>
        );
        
       }
    
}