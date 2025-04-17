import fs from "fs/promises";
import express from 'express';
import mongoose from "mongoose"
import { randomizeWord } from "./lib/randomizeWord.js";
import { renderHighscorePage, renderPage } from "./lib/renderPage.js";
import { Score } from "./src/models.js";
import sortHighscore from "./lib/sortHighscores.js";
const app = express();

app.get("/", async (req, res) =>{
    const htmlText = await fs.readFile("./dist/index.html");
    res.send(htmlText.toString());
});
app.get("/highscore", async (req, res) =>{
    await mongoose.connect("mongodb://localhost:27017/highscore"); 
    const scores = await Score.find();
    const sortedScores = sortHighscore(scores);
    renderHighscorePage(res, "highscore", sortedScores);
});
app.get("/info", (req, res) =>{
    renderPage(res, "info");
})
app.use("/assets", express.static("./dist/assets"));
//app.use("/static", express.static("./static"));

app.listen(5080);

app.get('/style.css', async (request, response) => {
    const buf = await fs.readFile('./backend/style.css');
    const css = buf.toString();
  
    response.setHeader('Content-Type', 'text/css');
    response.send(css);
  });

app.get("/api/words/:settings", async(req, res) =>{
    const data = [req.params.settings[1], req.params.settings[3]];
    const word = await randomizeWord(data);
    res.json({
        data: word
    });
});
app.get("/api/highscore/:score", async(req,res) =>{
    const result =req.params.score;
    const data = result.split(",");
    await mongoose.connect("mongodb://localhost:27017/highscore"); 
    const newScore = new Score({
        name: data[0],
        duration: data[1],
        guesses: data[2],
        nbrLetters: data[3],
        repeatLetters: data[4]
    });
    await newScore.save();

     
})
//api call for a randomized word within the parameters (nbr words, and double letters or no)

//api call sending the guessed word 