const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Inicio do Jogo
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Jogador joga
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Opções do computador
    const computerOptions = ["pedra", "papel", "tesoura"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computador escolhe
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Aqui é onde é comparada as mãos
          compareHands(this.textContent, computerChoice);
          //Atualiza as mãos
          playerHand.src = `img/${this.textContent}.png`;
          computerHand.src = `img/${computerChoice}.png`;
        }, 2000);
        //Animação das mãos balançando
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Atualiza o texto
    const winner = document.querySelector(".winner");
    //Check o empate
    if (playerChoice === computerChoice) {
      winner.textContent = "Empate";
      return;
    }
    //Check se for pedra
    if (playerChoice === "pedra") {
      if (computerChoice === "tesoura") {
        winner.textContent = "Jogador Ganhou";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computador Ganhou";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check se for papel
    if (playerChoice === "papel") {
      if (computerChoice === "tesoura") {
        winner.textContent = "Computador Ganhou";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Jogador Ganhou";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check se for tesoura
    if (playerChoice === "tesoura") {
      if (computerChoice === "pedra") {
        winner.textContent = "Computador Ganhou";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Jogador Ganhou";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  
  startGame();
  playMatch();
};

//função que chama o jogo
game();
