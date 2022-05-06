
var number1 = Math.random();
number1 = Math.floor((number1*6)+1);
var randomimg1 = "dice" + number1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1);

var number2 = Math.random();
number2 = Math.floor((number2*6)+1);
var randomimg2 ="dice"+number2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2);
if(number1>number2){
  document.querySelector("h1").textContent = "🏆player1 wins";
}else if(number1<number2){
  document.querySelector("h1").textContent = "player2 wins🏆";
}else{
  document.querySelector("h1").textContent = "tie";
}
