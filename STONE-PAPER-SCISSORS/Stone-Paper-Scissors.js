let userScore = 0;
let compScore =0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector("#reset");


const resetGame = ()=>{
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
}
reset.addEventListener("click" , () =>{
  console.log("button was clicked");
  resetGame();
});


const genComputerChoice = () =>{
  const options = ["rock" , "paper" , "scissors"];
 const randIdx =  Math.floor(Math.random() * 3);
 return options[randIdx];
}
const showWinner = (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `🎉You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

  }else{
    compScore++;
    compScorePara.innerText =compScore;
    msg.innerText = `🙁You Lose.${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}
const DrawGame = ()=>{
  msg.innerText = "😐Game Was Draw. Play Again.";
  msg.style.backgroundColor = "#B13BFF";

}
const playGame = (userChoice) =>{
  const compChoice = genComputerChoice();
  if(userChoice===compChoice){
    DrawGame();
  }
  else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice==="paper" ? false : true; 
    }
    else if(userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
});
