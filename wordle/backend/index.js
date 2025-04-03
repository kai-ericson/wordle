import fs from "fs/promises";
import express from 'express';

const app = express();

//app.use(express.json());

app.get("/", async (req, res) =>{
    const htmlText = await fs.readFile("./dist/index.html");
    res.send(htmlText.toString());
});
app.use("/assets", express.static("./dist/assets"));
app.listen(5080);

//api call for a randomized word within the parameters (nbr words, and double letters or no)