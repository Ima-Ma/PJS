//for loop
for(let i=0; i<=10; i++){
    console.log("This Is For Loop" , i)
}

//while loop
let a = 50;
while(a <=65){
    console.log("This Is While Loop" , a);
    a++;
}

//do while loop
let z = 15;
do {
    console.log("This Is Do While Loop" , z)
    z++;
} while (z<=20);

//for in loop
let p = {
    name : "imama",
    grade : "A",
    age : 18,
    city : "karachi"
}

for(let o in p){
    console.log("This Is For In Loop" , o , p[o])
}