let btn = document.getElementById('toggle-btn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

btn.addEventListener('click' , toggleBtn);

function toggleBtn(){
    if(btn.textContent.includes('On')){
        bulb.src = "on.png";
        btn.textContent = "Turn Off";
        mq.textContent = "Turn Off";
        mq.style.boxShadow = "3px 3px 4px 4px green";
        mq.style.color = "green";
        btn.className = "btn btn-outline-success";
        bulb.style.boxShadow = "px 3px 4px 4px green";
        btn.style.boxShadow = "px 3px 4px 4px green";

    }
    else{
        bulb.src = "off.png";
        btn.textContent = "Turn On";
        mq.textContent = "Turn On";
        mq.style.boxShadow = "3px 3px 4px 4px red";
        mq.style.color = "red";
        btn.className = "btn btn-outline-danger";
        bulb.style.boxShadow = "px 3px 4px 4px red";
        btn.style.boxShadow = "px 3px 4px 4px red";
    }
}