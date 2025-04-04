import fs from "fs/promises";
import express from 'express';
import { randomizeWords } from "./randomizeWord.js";

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
    randomizeWords(data);
})
//api call for a randomized word within the parameters (nbr words, and double letters or no)

//api call sending the guessed word 