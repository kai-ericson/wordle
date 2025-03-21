import { describe, expect, it } from "@jest/globals";
import checkGuess from "./guess.js";
/*
Test cases:
    No letters match
    All letters are in the correct place
    One letter is in the right place, one is misplaced and the rest are incorrect
    The same letter appears twice in the guess but only once in the correct word

    The first two test cases tests the basic logic of marking letters as correct and incorrect.
    The third one tests that the function can find misplaced letters, and handle different cases for 
    each letter.
    The fourth test case tests that only the correctly placed letter is marked as correct in the case of 
    the same letter appearing twice in the guess. The other is marked as incorrect.
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
    const output = checkGuess("rätta", "robot");
    expect(output).toEqual([{letter: "r", result: "correct"}, {letter: "ä", result: "incorrect"},{letter: "t", result: "misplaced"},{letter: "t", result: "incorrect"},{letter: "a", result: "incorrect"}])
   })
   it("returns a misplaced letter as incorrect if the same letter appears twice in the guess but once in the correct word", ()=>{
    const output = checkGuess("hallå", "cykla");
    expect(output).toEqual([{letter: "h", result: "incorrect"}, {letter: "a", result: "misplaced"},{letter: "l", result: "incorrect"},{letter: "l", result: "correct"},{letter: "å", result: "incorrect"}])
   })
})