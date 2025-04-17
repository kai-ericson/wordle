import fs from "fs/promises";
export async function renderPage(response, page){
    const contentBuf = await fs.readFile(`./backend/content/${page}.html`);
    const contentText = contentBuf.toString();

    const templateBuf = await fs.readFile("./backend/templates/main.html");
    const templateText = templateBuf.toString();

    const outputHtml = templateText.replace("=#content#=", contentText).replace("=#title#=", "Info");
    response.send(outputHtml);
}
export async function renderHighscorePage(response, page, scores){
    const contentBuf = await fs.readFile(`./backend/content/${page}.html`);
    const contentText = contentBuf.toString();

    const templateBuf = await fs.readFile("./backend/templates/main.html");
    const templateText = templateBuf.toString();

  
    const scoreItems = scores.map((item)=>{
        return `<li class="scoreItem">
         <a class="nameList">${item.name}<a>
         <a class="timeList">${item.duration}s<a>
         <a class="guessesList">${item.guesses}<a>
         <a class="nbrLettersList">${item.nbrLetters}<a>
         <a class="repeatLettersList">${item.repeatLetters}<a>
         <li>`
    })
    const scoreText = scoreItems.join("\n");
    const outputHtml = templateText.replace("=#content#=", scoreText).replace("=#title#=", contentText);
    response.send(outputHtml);

}
