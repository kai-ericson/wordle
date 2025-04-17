export async function randomizeWord(settings){
    let word = "";
    const nbrLetters = settings[0];
    const repeatLetters = settings[1];
    if(repeatLetters == "t"){
        const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
        let response = await fetch(api);
        word = await response.json();
        word = word.toString();
    }else{
        let repeat = true;
        while(repeat){
            const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
            let response = await fetch(api);
            word = await response.json();
            word = word.toString();
            let letters = word.split("");
            let set = new Set();
            repeat = false;
            
            for(let i = 0; i<letters.length; i++){
                if(set.has(letters[i])){
                    repeat = true;
                    break;
                 }
                set.add(letters[i]);
            }
        }
        
    }
    return word;
}