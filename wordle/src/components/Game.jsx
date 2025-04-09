import { useState } from "react";
export default function Game({ correctWord }) {
    const [guess, setGuess] = useState("");
    console.log("Correct word: "+correctWord);
    return(
        <form onSubmit={(ev) =>{
            ev.preventDefault();
            console.log("Guess: "+guess);
            const guessLetters = guessWord.split("");
            const correctLetters = correctWord.split("");
            const resultsArray = [];
            for(let i = 0; i<guessLetters.length; i++){
                if(guessLetters[i] == correctLetters[i]){
                    resultsArray.push({letter: guessLetters[i], result: "correct"});
                    correctLetters[i] = "";
                }else{
                    resultsArray.push({letter: guessLetters[i], result: "incorrect"});
                }
            }
            for(let i = 0; i<guessLetters.length; i++){
                if(resultsArray[i].result === "incorrect"){
                    correctLetters.forEach(letter => {
                        if(guessLetters[i] == letter){
                            resultsArray[i].result = "misplaced";
                            const index = correctLetters.indexOf(letter)
                            correctLetters[index] = "";
                        }
                    });
                }
            }
             
        }}>
            <input className="guessInput" onChange={(ev) => {
                ev.preventDefault();
                setGuess(ev.target.value);
            }} ></input>
            <button className="guessBtn">Gissa</button>
        </form>
      
    );
}