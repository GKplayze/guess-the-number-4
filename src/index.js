import "./styles.css";

let check = document.querySelector(".check");
let tryAgain = document.querySelector(".retry");
let guessNum = document.querySelector(".guess");
let randNum = Math.floor(Math.random() * 30);

check.addEventListener("click", function () {
  let inputNum = Number(document.querySelector(".guess-number").value);

  console.log(randNum);

  if (randNum === inputNum) {
    console.log("correct!");
  } else {
    console.log("wrong!");
  }
});
