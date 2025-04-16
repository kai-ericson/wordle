import fs from "fs/promises";

export default async function renderPage(response, page, scores){
    const contentBuf = await fs.readFile(`./backend/content/${page}.html`);
    const contentText = contentBuf.toString();

    const templateBuf = await fs.readFile("./backend/templates/main.html");
    const templateText = templateBuf.toString();

    const scoreItems = scores.map((item)=>{
        return `<li><a>${item.name}<a> <a>${item.duration}s<a> <a>${item.guesses}<a> <a>${item.nbrLetters}<a> <a>${item.repeatLetters}<a><li>`
    })
    const outputHtml = templateText.replace("=#content#=", scoreItems).replace("=#title#=", contentText);
    response.send(outputHtml);

}