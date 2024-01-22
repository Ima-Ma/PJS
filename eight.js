let gameNum = 20;
let userNum = prompt("Enter Your Number");
while(userNum != gameNum){
    userNum = prompt("You Guess The Wrong Number")
}
swal({
    title: "Gamer Alert!",
    text: "You Win The Game 😊",
    timer: 2000
  });