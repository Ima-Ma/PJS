//arithmetic operators

let a = 45;
let b = 20;

console.log("the sum of a+b is " , a+b);
console.log("the sub of a-b is " , a-b);
console.log("the mul of a*b is " , a*b);
console.log("the div of a/b is " , a/b);
console.log("the mod of a%b is " , a%b);

// INCREMENT
let z = 50;
// post increment

console.log(z++); // z = z+1 =51
console.log(z); //z-51

//pre increment
console.log(++z); // z + z+1 =52

z+=20;
console.log(z); // 72

// DECREMENT
let i =50;
//post decrement

console.log(i--); // i = z-1 =49
console.log(i); // 49


//pre decrement
console.log(--i); // i - i-1 =48

i-=20;
console.log(i); // i = 28


//LOGICAL OPERATOR

// or ||
console.log(true || true);  //true
console.log(false || true);  //true
console.log(false || false); //false
console.log(true || false);  //true


//and &&

console.log(true && true);  //true
console.log(false && true);  //false
console.log(false && false); //false
console.log(true && false);  //false

//not ! 
console.log(!false && false); //false
console.log(!true || false);  //false


// >  greater than
// < less than 
// == equal 
// === equal with type check