export default function makeGuess(guess, correct) {
    let correctWord = correct.toUpperCase();
    let guessWord = guess.toUpperCase();

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
    return {results: resultsArray};
}