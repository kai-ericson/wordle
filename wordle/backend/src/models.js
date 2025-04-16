import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    name: String,
    duration: Number,
    guesses: String,
    nbrLetters: Number,
    repeatLetters: Boolean
});

const Score = mongoose.model("Score", scoreSchema);

export {
    Score
}