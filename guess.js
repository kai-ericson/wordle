
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
        if(guessLetters[i]){
            
        }
    }
    
    return resultsArray;
    /*for(let i = 0; i < guessLetters.length; i++){
        if(guessLetters[i] == correctLetters[i]){
            result.push({letter: guessLetters[i], result: "correct"});
            console.log(guessLetters[i]+" correct");
        }else{
            for(let j = 0; j < guessLetters.length; j++){
                if(guessLetters[i] == correctLetters[j]){
                    console.log(guessLetters[i]+" misplaced");
                    result.push({letter: guessLetters[i], result: "misplaced"});
                    break;
                }
            }
        }
        if(!!result.includes({letter: guessLetters[i], result: "correct"}) || !!result.includes({letter: guessLetters[i], result: "misplaced"})){
            console.log(guessLetters[i]+" incorrect");
            result.push({letter: guessLetters[i], result: "incorrect"});
        }
    }
    return result;*/
}