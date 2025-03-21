import { describe, expect, it } from "@jest/globals";
import checkGuess from "./guess.js";
/*
Funktionen tar in 2 inputs, en gissning och det korrekta ordet.
Orden jämförs, och alla bokstäver i gissningen får ett resultat: correct, misplaced eller incorrect
Output är en array med objekt, ett objekt för varje bokstav med dess resultat. 
Bokstäverna är i samma ordning i outputen som i inputen

Test cases:
    No letters match
    At least one letter is in the right place
    At least one letter is misplaced
    All letters are in the right place
    One letter is in the right place, one is misplaced and the rest are incorrect

*/ 

describe("checkGuess()", () =>{
    /*it("returns all letters as incorrect if no letters match", ()=>{
        const output = checkGuess("plast", "cykel")
    })*/
   it("returns all letters as correct if the two words match", ()=>{
    const output = checkGuess("cykel", "cykel");
    expect(output).toEqual([{letter: "c", result: "correct"}, {letter: "y", result: "correct"},{letter: "k", result: "correct"},{letter: "e", result: "correct"},{letter: "l", result: "correct"}]);
   });
})