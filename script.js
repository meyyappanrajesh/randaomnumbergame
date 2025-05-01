var inputBox= document.getElementById("inputBox")
var result= document.getElementById("result")
var Availableguess=document.getElementById("Availableguess")
noofguess=3

// generate random number between 1 and 5
var randomNumber= Math.floor(Math.random()*10)+1
if(randomNumber>5){
    randomNumber=randomNumber-5
}

// Event Handler Functions

function check() {
if (inputBox.value == randomNumber){
    
alert("You guessed it right! The number was " + randomNumber)
result.textContent="You are Right!"
}

else{
  noofguess=noofguess-1
  if(noofguess==0){
    
    alert("You have no guesses left! The number was " + randomNumber)
  
}

  Availableguess.textContent="Available guesses: " + noofguess
 result.textContent ="You are Wrong!"
}

}