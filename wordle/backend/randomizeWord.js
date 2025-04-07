export async function randomizeWords(settings){
    const nbrLetters = settings[0];
    const repeatLetters = settings[1];
    console.log(nbrLetters+" "+repeatLetters);
    if(repeatLetters == "t"){
        const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
        let response = await fetch(api);
        let word = await response.json();
        word = word.toString();
        console.log(word);
    }else{
        let repeat = true;
        while(repeat){
            const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
            let response = await fetch(api);
            let word = await response.json();
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
   /* const api = `https://random-word.ryanrk.com/api/en/word/random/?length=${nbrLetters}`;
    let response = await fetch(api);
    let word = await response.json();
    word = word.toString();
    let letters = word.split("");
    console.log(word);
    

   let set = new Set();
   let repeat = false;
   console.log(letters.length);
   for(let i = 0; i<letters.length; i++){
    if(set.has(letters[i])){
        repeat = true;
        break;
    }
    set.add(letters[i]);
   }
   while(repeat){
    repeat = false;
    response = await fetch(api);
    word = await response.json();
    word = word.toString();
    letters = word.split("");
    console.log(word)
    for(let i = 0; i<letters.length; i++){
        if(set.has(letters[i])){
            repeat = true;
            break;
        }
        set.add(letters[i]);
       }
   }
   console.log(repeat);*/
}