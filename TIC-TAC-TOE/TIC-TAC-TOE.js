let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset-btn");
let turno = true;
let click_count = 0;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turno = true;
  enableboxes();
  msgContainer.classList.add("hide");
  click_count = 0; 
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      box.style.color = "green";
      turno = false;
    } else {
      box.innerText = "X";
      box.style.color = "red"
      turno = true;
    }
    box.disabled = true;
    click_count++;
    checkwinner();
  })
});
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disabledboxes();
}
const checkwinner = () =>{
  let winnerFound = false;
  for(let pattern of winpatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val!=""&&pos2Val != ""&&pos3Val!=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
        winnerFound = true;
        break;
      }
    }
  }
  if (!winnerFound && click_count === 9) {
    msg.innerText = "😐 Match Draw!";
    msgContainer.classList.remove("hide");
  }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
