import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    name: String,
    duration: Number,
    guesses: Number,
    nbrLetters: Number,
    repearLetters: Boolean
});

const Score = mongoose.model("Score", scoreSchema);

export {
    Score
}