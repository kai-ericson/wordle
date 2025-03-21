import { describe, expect, it } from "@jest/globals";
import checkGuess from "./guess.js";
/*
Funktionen tar in 2 inputs, en gissning och det korrekta ordet.
Orden jämförs, och alla bokstäver i gissningen får ett resultat: correct, misplaced eller incorrect
Output är en array med objekt, ett objekt för varje bokstav med dess resultat. 
Bokstäverna är i samma ordning i outputen som i inputen

Test cases:
    No letters match
    All letters are in the correct place
    One letter is in the right place, one is misplaced and the rest are incorrect
    The same letter appears twice in the guess but only once in the correct word
*/ 

describe("checkGuess()", () =>{
    it("returns all letters as incorrect if no letters match", ()=>{
        const output = checkGuess("pasta", "cykel");
        expect(output).toEqual([{letter: "p", result: "incorrect"},{letter: "a", result: "incorrect"},{letter: "s", result: "incorrect"},{letter: "t", result: "incorrect"},{letter: "a", result: "incorrect"},]);
    });
   it("returns all letters as correct if the two words match", ()=>{
    const output = checkGuess("cykel", "cykel");
    expect(output).toEqual([{letter: "c", result: "correct"}, {letter: "y", result: "correct"},{letter: "k", result: "correct"},{letter: "e", result: "correct"},{letter: "l", result: "correct"}]);
   });
   it("returns the misplaced letters as misplaced", ()=>{
    const output = checkGuess("plast", "cykel");
    expect(output).toEqual([{letter: "p", result: "incorrect"}, {letter: "l", result: "misplaced"},{letter: "a", result: "incorrect"},{letter: "s", result: "incorrect"},{letter: "t", result: "incorrect"}])
   })
   it("returns a misplaced letter as incorrect if the same letter appears twice in the guess but once in the correct word", ()=>{
    const output = checkGuess("hallå", "cykla");
    expect(output).toEqual([{letter: "h", result: "incorrect"}, {letter: "a", result: "misplaced"},{letter: "l", result: "incorrect"},{letter: "l", result: "correct"},{letter: "å", result: "incorrect"}])
   })
})