
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
 checkGuess("cykel","cykel");

 export default function checkGuess(guessWord, correctWord){
    const guessLetters = guessWord.split("");
    const correctLetters = correctWord.split("");
    const result = [];
    for(let i = 0; i < guessLetters.length; i++){
        if(guessLetters[i] == correctLetters[i]){
            result.push({letter: guessLetters[i], result: "correct"})
        }
    }
    return result;
}