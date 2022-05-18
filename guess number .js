let randomNumber = Math.floor(Math.random()*100)
console.log(randomNumber)
document.querySelector("#submitGuess").addEventListener('click',userGuessTxt);
document.querySelector("#submitGuess").addEventListener('click',count);
document.querySelector("#submitGuess").addEventListener('click',chance);
let showResult = document.querySelector("#feedback");
let numCount = 0

function count(){
  x = numCount +=1;
  console.log(x)
  if (numCount == 10){
    document.querySelector("#guess").disabled = true;
    alert("شما یک بازنده هستید ");
    showResult.innerHTML = "فرصت شما تمام شد  ";
    
  }
}
function userGuessTxt(){
  let userGuess = Number(document.querySelector("#guess").value);
  if (userGuess && userGuess >= 1){
    if (userGuess > randomNumber){
      showResult.innerHTML = "عدد سیستم کوچکتر است ";
    }else if (userGuess < randomNumber){
      showResult.innerHTML = "عدد سیستم بزرگتر است ";
    }else{
      showResult.style.color = "green"
      showResult.innerHTML = "تبریک !!! شما برنده شدید ";
      alert("تبریک ! شما برنده شدید ")
    
    }
  }

}
function chance(){
  let userGuess = Number(document.querySelector("#guess").value);
  if (numCount == 1 && userGuess == randomNumber){
    document.querySelector("#chance").innerHTML = "10"
    
    
  }else{
    document.querySelector("#chance").innerHTML = 10 - numCount
  }
}