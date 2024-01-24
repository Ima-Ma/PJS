let elem = document.getElementsByClassName("container");
// elem[0].innerHTML = "EVENTS";
let newBtn = document.createElement("button");


elem[0].appendChild(newBtn);
newBtn.innerHTML = "Click Here!";
newBtn.className = "btn btn-dark px-5 fw-bold";
newBtn.style.letterSpacing = "10px";

// Events

newBtn.addEventListener('click' , hello);
function hello(){
    console.log("You Clicked On Me!");
    newBtn.innerHTML= "Wow";
}

let text = document.createElement("input");
elem[0].appendChild(text);

text.className = "form-control";
text.style.marginTop = "100px";

text.addEventListener('keyup' , wow);

function wow(){
    console.log("keyUp")
}