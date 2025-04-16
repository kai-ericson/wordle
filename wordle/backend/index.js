import fs from "fs/promises";
import express from 'express';
import mongoose from "mongoose"
import { randomizeWord } from "./lib/randomizeWord.js";
import renderPage from "./lib/renderPage.js";
import { Score } from "./src/models.js";

const app = express();
app.get("/", async (req, res) =>{
    const htmlText = await fs.readFile("./dist/index.html");
    res.send(htmlText.toString());
});
app.get("/highscore", async (req, res) =>{
    await mongoose.connect("mongodb://localhost:27017/highscore"); 
    const scores = await Score.find();
    console.log(scores);
    renderPage(res, "highscore", scores);
})
app.use("/assets", express.static("./dist/assets"));
app.use("/static", express.static("static"))
app.listen(5080);

app.get("/api/words/:settings", async(req, res) =>{
    const data = [req.params.settings[1], req.params.settings[3]];
    const word = await randomizeWord(data);
    console.log("Word in index.js: "+word);
    res.json({
        data: word
    });
});
app.get("/api/highscore/:score", async(req,res) =>{
    const data =req.params.score;
    console.log(data);
    const result = {
        name: data[1],
        duration: data[3],
        guesses: data[5],
        nbrLetters: data[7],
        repeatLetters: [9]
    }
    console.log(result.name+" "+result.duration+" "+result.guesses);
    await mongoose.connect("mongodb://localhost:27017/highscore"); 
    const newScore = new Score({
        name: data[1],
        duration: data[3],
        guesses: data[5],
        nbrLetters: 2,
        repeatLetters: true
    });
    await newScore.save();
    //const result = { data };
    //console.log(result);
     
})
//api call for a randomized word within the parameters (nbr words, and double letters or no)

//api call sending the guessed word 