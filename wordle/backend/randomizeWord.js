export async function randomizeWord(settings){
    let word = "";
    const nbrLetters = settings[0];
    const repeatLetters = settings[1];
    console.log(nbrLetters+" "+repeatLetters);
    if(repeatLetters == "t"){
        const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
        let response = await fetch(api);
        word = await response.json();
        word = word.toString();
        console.log(word);
    }else{
        let repeat = true;
        while(repeat){
            const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
            let response = await fetch(api);
            word = await response.json();
            word = word.toString();
            let letters = word.split("");
            console.log(word);
            let set = new Set();
            repeat = false;
            
            for(let i = 0; i<letters.length; i++){
                if(set.has(letters[i])){
                    repeat = true;
                    break;
                 }
                set.add(letters[i]);
            }
            console.log(repeat);
        }
        
    }
    return word;
}