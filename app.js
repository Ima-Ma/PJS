console.log("welcom to PJS");
console.log("Hello World");


//Data Types
myName = "Mike";  //string
num = 7854956;  //number
x = undefined;  //undefined
y = null; //null
boolean = true; //true & false

//we have two nkind of data types
//1) primitive    STRING NUM BOOLEAN INT etc
//2) non-primitive  ARRAYS OBJ  FUNCTIONS etc

console.table(myName , num , x , y , boolean);


let obj = {
    name : "Imama",
    age : 18,
    grade : "A",
    phone : 764558,
    city : "karachi"

}
//First Method
console.log(obj["name"]);
console.log(obj["phone"]);
//Second Method
console.log(obj.city);


//for in loop

for(let i in obj){
    console.log(i ,obj[i])
}