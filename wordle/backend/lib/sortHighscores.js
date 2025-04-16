export default function sortHighscore(scores){
    scores.sort((a,b) =>a.guesses - b.guesses);
    return scores;
}