import { useState } from "react";
import makeGuess from "./guess";
export default function Game({ correctWord }) {
    const [guess, setGuess] = useState("");
    console.log("Correct word: "+correctWord);
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
    return(
        <div>
            <form onSubmit={(ev) =>{
                ev.preventDefault();
                console.log("Guess: "+guess);
                const results = makeGuess(guess, correctWord);
                console.log(results);
                setItems([...items, results])
            }}>
                <input className="guessInput" onChange={(ev) => {
                    ev.preventDefault();
                    setGuess(ev.target.value);
                }} ></input>
                <button className="guessBtn">Gissa</button>
            </form>
            <h2>Gissningar</h2>
            <ul className="guessList">
                {items.map((item) =>{
                    console.log(item.results);
                    return(
                    <li className="guessItem">{item.results.map((element) =>{
                        return(
                        <span className={element.result}>{element.letter}</span>
                        )
                    })}</li>
                /*<li className="guessItem">
                    {item.status.map((element) =>{
                    <p >{element.letter}</p>
                    })}
                </li>*/
                )}
            )}

        </ul>
        </div>
    );
}