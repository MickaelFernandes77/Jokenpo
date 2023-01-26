// variaveis de numeracao das opcoes do jogador
let rock = 2;
let paper = 2;
let scissors = 2;
// selecao do carta do oponente
let optionRandom;
// cards do openente
let optionRandomElements = document.getElementsByClassName("optionRandom");
// resultado
let result = document.getElementById("result");
// cards do jogador
let playerRock = document.getElementById("playerRock");
let playerPaper = document.getElementById("playerPaper");
let playerScissors = document.getElementById("playerScissors");
// reiniciar
let restartContainer = document.getElementById("btnContainer");
let restart = document.getElementById("restart");

function selectOption(option) {
  if (option == "rock") {
    optionRandom = 1 + Math.floor(Math.random() * 3);
    if (rock > optionRandom) {
      for (let i = 0; i < optionRandomElements.length; i++) {
        optionRandomElements[i].style.display = "block";
        // cards do oponente
        optionRandomElements[1].classList.add("resultOptionRandom");
        optionRandomElements[0].style.display = "none";
        optionRandomElements[2].style.display = "none";
        // cards jogador
        playerPaper.style.display = "none";
        playerScissors.style.display = "none";
      }
      // resultado
      result.style.display = "block";
      result.innerHTML = "Você Venceu!!!";
      restartContainer.style.display = "block";
      restart.style.display = "block";
    } else if (rock == optionRandom) {
      for (let i = 0; i < optionRandomElements.length; i++) {
        // cards do oponente
        optionRandomElements[i].style.display = "block";
        optionRandomElements[0].classList.add("resultOptionRandom");
        optionRandomElements[1].style.display = "none";
        optionRandomElements[2].style.display = "none";
        // cards jogador
        playerPaper.style.display = "none";
        playerScissors.style.display = "none";
      }
      // resultado
      result.style.display = "block";
      result.innerHTML = "Empate!";
      restartContainer.style.display = "block";
      restart.style.display = "block";
    } else if (rock < optionRandom) {
      for (let i = 0; i < optionRandomElements.length; i++) {
        optionRandomElements[i].style.display = "block";
        // cards do oponente
        optionRandomElements[2].classList.add("resultOptionRandom");
        optionRandomElements[0].style.display = "none";
        optionRandomElements[1].style.display = "none";
        // cards jogador
        playerPaper.style.display = "none";
        playerScissors.style.display = "none";
      }
      // resultado
      result.style.display = "block";
      result.innerHTML = "Você perdeu :(";
      restartContainer.style.display = "block";
      restart.style.display = "block";
    }
  }

  if (option == "scissors") {
    optionRandom = 1 + Math.floor(Math.random() * 3);
    if (scissors > optionRandom) {
      for (let i = 0; i < optionRandomElements.length; i++) {
        optionRandomElements[i].style.display = "block";
        optionRandomElements[2].classList.add("resultOptionRandom");
        optionRandomElements[0].classList.remove("resultOptionRandom");
        optionRandomElements[1].classList.remove("resultOptionRandom");
      }
      // resultado
      result.style.display = "block";
      result.innerHTML = "Você Venceu!!!";
    } else if (scissors == optionRandom) {
      for (let i = 0; i < optionRandomElements.length; i++) {
        optionRandomElements[i].style.display = "block";
        optionRandomElements[1].classList.add("resultOptionRandom");
        optionRandomElements[0].classList.remove("resultOptionRandom");
        optionRandomElements[2].classList.remove("resultOptionRandom");
      }
      // resultado
      result.style.display = "block";
      result.innerHTML = "Empate!";
    } else if (scissors < optionRandom) {
      for (let i = 0; i < optionRandomElements.length; i++) {
        optionRandomElements[i].style.display = "block";
        optionRandomElements[0].classList.add("resultOptionRandom");
        optionRandomElements[1].classList.remove("resultOptionRandom");
        optionRandomElements[2].classList.remove("resultOptionRandom");
      }
      // resultado
      result.style.display = "block";
      result.innerHTML = "Você perdeu :(";
    }
  }
}
