//let h2=document.querySelector("h2");

//console.dir(h2.innerText);
//h2.innerText+= "From apna college student";

let divs= document.querySelectorAll(".box");

let i=1;
for(let div of divs){
    div.innerText = `new unidue value ${i}`;
    i++;
}
//divs[0].innerText="new";