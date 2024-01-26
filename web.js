let btn =document.getElementById('btn-main');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let head = document.getElementById('heading');
let para = document.getElementById('para')
let card =document.getElementById('body-card');
 btn.addEventListener('click' , color);
 function color(){
    if(btn.textContent.includes('Dark')){
        btn.textContent = "Light Mode";
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";

        btn.className = "btn btn-outline-success";
        body.style.backgroundColor = "white";
        head.style.color = "black";
        para.style.color = "black";
        card.style.backgroundColor = "white";
        card.style.color = "black";

    }
    else{
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";

        btn.textContent = "Dark Mode";
        btn.className = "btn btn-outline-dark";
        body.style.backgroundColor = "black";
        head.style.color = "white";
        para.style.color = "white";
        card.style.backgroundColor = "black";
        card.style.color = "white";




    }
 }