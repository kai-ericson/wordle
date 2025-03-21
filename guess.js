
/*
Input: guess and correct word
For each letter in the guess, check if it is in the correct word and its position
Create an object with the letter and a result
Add object to return-array

[
{Letter: A
 Result: correct},
{Letter: B
 Result: misplaced}
]
*/

 export default function checkGuess(guessWord, correctWord){
    const guessLetters = guessWord.split("");
    const correctLetters = correctWord.split("");
    const resultsArray = [];
    for(let i = 0; i<guessLetters.length; i++){
        if(guessLetters[i] == correctLetters[i]){
            resultsArray.push({letter: guessLetters[i], result: "correct"});
            console.log(resultsArray[i]);
        }else{
            resultsArray.push({letter: guessLetters[i], result: "incorrect"});
            console.log(resultsArray[i]);
        }
    }
    for(let i = 0; i<guessLetters.length; i++){
        if(resultsArray[i].result === "incorrect"){
            correctLetters.forEach(letter => {
                if(guessLetters[i] == letter){
                    resultsArray[i].result = "misplaced";
                }
            });
        }
       
    }
    
    return resultsArray;
}