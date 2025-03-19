import { describe, expect, it } from "@jest/globals";
import checkGuess from "./guess";
/*
Funktionen tar in 2 inputs, en gissning och det korrekta ordet.
Orden jämförs, och alla bokstäver i gissningen får ett resultat: correct, misplaced eller incorrect
Output är en array med objekt, ett objekt för varje bokstav med dess resultat. 
Bokstäverna är i samma ordning i outputen som i inputen

Test cases:
    No letters match
    At least one letter is in the right place
    At least one letter is misplaced

*/ 

describe("checkGuess()", () =>{
    it("returns all letters as incorrect if no letters match", ()=>{
        
    })
})