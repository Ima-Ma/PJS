//conditional statements

let age = 21;
// IF STATEMENT
if(age>=20){
    console.log("You Can Caste Your Vote");
}

if(age<=20){
    console.log("You Can Not Caste Your Vote");
}

// IF ELSE STATEMENT
if(age>20){
    console.log("You Can Caste Your Vote");
}
else{
    console.log("You Can Not Caste Your Vote");
}

//PROMPT
let userName = prompt("Enter Your Name");
console.log(userName);


let mode = prompt(`Select Your Mode
1)DARK
2)LIGHT
`)
let color ;
 if(mode === DARK){
    color = "black";
 }
 if(mode === LIGHT){
    color = "white";
 }

 console.log(color);