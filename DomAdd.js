let newBtn=document.createElement("Button");
newBtn.innerHTML="Clic Me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);

let para=document.querySelector("p");
para.classList.add("newClass");