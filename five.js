// ARRAYS
let fruits =["apple" , "mango" , "pine apple" , "banana"]
console.log(fruits);
console.log(fruits.length);

// methods of an array

// 1)PUSH (add in last index)
console.log(fruits.push("orange"));
console.log(fruits);
// 2)POP (remove last index)
console.log(fruits.pop());
console.log(fruits);
// 3)SHIFT (first element remove)
console.log(fruits.shift());
console.log(fruits);
// 4)UNSHIFT (add first element)
console.log(fruits.unshift("kiwi"));
console.log(fruits);
// 5)SLICE (particular portion)
// ["apple" , "mango" , "pine apple" , "banana"]
console.log(fruits.slice(1 , 3));
console.log(fruits);