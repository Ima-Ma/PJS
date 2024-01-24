let elem = document.getElementById('second');

elem.textContent= "An Apple A Day";
elem.style.backgroundColor = "pink";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add("two");
elem.classList.add("three");
elem.id = "hello";
elem.classList.remove("two");

let one = document.getElementsByClassName('container');
one[0].textContent= "Hello World";
one[0].style.color = "white";
one[0].style.backgroundColor = "purple";
one[0].style.fontSize = "40px";
one[0].style.backgroundColor = "purple";
one[0].classList.add("new");
one[0].id = "pencil";

let newElem = document.createElement('p');
one[0].appendChild(newElem);


let para = document.getElementsByTagName('p');
para[0].textContent= "imama mushtaq";
   

let image = document.createElement('img');
para[0].appendChild(image);

image.src = "https://images.pexels.com/photos/19850845/pexels-photo-19850845/free-photo-of-a-city-street-with-cars-and-buildings-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";



