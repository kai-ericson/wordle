import fs from "fs/promises";
import express from 'express';
import { randomizeWord } from "./randomizeWord.js";

const app = express();

//app.use(express.json());

app.get("/", async (req, res) =>{
    const htmlText = await fs.readFile("./dist/index.html");
    res.send(htmlText.toString());
});
app.use("/assets", express.static("./dist/assets"));
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
        guesses: data[5]
    }
    console.log(result.name+" "+result.duration+" "+result.guesses);
    //const result = { data };
    //console.log(result);
     
})
//api call for a randomized word within the parameters (nbr words, and double letters or no)

//api call sending the guessed word 