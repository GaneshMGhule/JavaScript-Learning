/*
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" ||char==="u"){
            count++;
        }
    }
    console.log(count);
    
}
countVowels("Ganesh");
*/

//Arrow Function

const countVow=(str)=>{
     let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" ||char==="u"){
            count++;
        }
    }
    console.log(count);
}
countVow("Ganesh")