const h1 = document.querySelector('h1 span.first');

const skills = ['Developer', "designer", "Manager"];
let letterCount = 0;
let words = 0;
let word = "";
let work = false;

let a = 500;

setInterval(() =>{

    if(word.length === 0 ){
work = false;
    }else if(word.length === skills[words].length){
        if(work === false){
            if(words == skills.length-1){
                words = 0;
            }else{
                words++;
            }
        }
      work = true;  

    }

if(!work){
    word += skills[words][letterCount];
letterCount++;

}else{
        letterCount--;
            word = word.slice(0, letterCount);



}
h1.innerHTML = word;



},a)