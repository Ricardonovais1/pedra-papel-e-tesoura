//Cash the DOM:
const title_h1 = document.querySelector('title-h1');
const botaoIniciar_div = document.querySelector('botao-iniciar');
const choice_div = document.querySelector('choice');
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const playerScore_span = document.querySelector('.player-score');
const computerScore_span = document.querySelector('.computer-score');
const roundResult_div = document.querySelector('.round-result');
const finalResult_div = document.querySelector('.final-result');
const scoreBoard_div = document.querySelector('.score-board');


var playerScore = 0;
var computerScore = 0;

let playerSelection = '';
const displayResult_button = document.querySelector('.display-result');


// Início do jogo 
const main = () => {
    pedra.addEventListener('click', () => {
        playRound('pedra');
        game();
    });

    papel.addEventListener('click', () => {
        playRound('papel');
        game();
    });

    tesoura.addEventListener('click', () => {
        playRound('tesoura');
        game();
    });
}; 

main();

//Selecionar a opção do computador de forma randômica:

function computerPlay() {
    let randomOption = Math.floor(Math.random() * 3);
    switch (randomOption) {
    case 0:
        return 'pedra';
        break;
    case 1:
        return 'papel'
        break;
    case 2:
        return 'tesoura'
        break;
    };   
};


const win = (playerSelection, computerSelection) => {
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore; 
    roundResult_div.textContent = `Você ganhou, ${playerSelection} vence ${computerSelection}`;
};

const lose = (playerSelection, computerSelection) => {
    playerScore_span.textContent = playerScore; 
    computerScore_span.textContent = computerScore; 
    roundResult_div.textContent = `Você perdeu, ${playerSelection} vence ${computerSelection}`;
};

const draw = (playerSelection, computerSelection) => {
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    roundResult_div.textContent = `Empate, ${playerSelection} vs. ${computerSelection}`;
};

  //Fazer com que seja jogada 1 única partida:

  const playRound = (playerSelection) => {

    computerSelection = computerPlay();

    switch(playerSelection + computerSelection) {
        case 'pedratesoura':
        case 'papelpedra':
        case 'tesourapapel':
            playerScore++;
            win(playerSelection, computerSelection);
            break;
        case 'pedrapapel':
        case 'papeltesoura':
        case 'tesourapedra':
            computerScore++;
            lose(playerSelection, computerSelection);
            break;
        case 'pedrapedra':
        case 'papelpapel':
        case 'tesouratesoura':
            draw(playerSelection, computerSelection);
            break;
           
    };
    endGame(playerScore, computerScore);
  };



  // Permitir que o jogador que alcançar 5 pontos vença o jogo:



  const endGame = (playerScore, computerScore) => {
    if (playerScore < 5 && computerScore < 5) 
    {
        playRound(playerSelection);
    } 
    else if (playerScore === 5 && computerScore < 5) 
    {
        finalResult_div.textContent = `Parabéns! Você ganhou do computador por ${playerScore} a ${computerScore}`;
        roundResult_div.classList.add('hide');
        pedra.classList.add('hide');
        papel.classList.add('hide');
        tesoura.classList.add('hide');
        const scoreBoard_div = document.querySelector('score-board');
        scoreBoard_div.classList.add('pulse');
        const titleWhenResult = document.getElementById('title').textContent = `RESULTADO FINAL:`;  
    }
    else if (computerScore === 5 && playerScore < 5) 
    {
        finalResult_div.textContent = `Você perdeu para o computador por ${computerScore} a ${playerScore}`;
        roundResult_div.classList.add('hide');
        pedra.classList.add('hide');
        papel.classList.add('hide');
        tesoura.classList.add('hide');
        scoreBoard_div.classList.add('pulse');
        const titleWhenResult = document.getElementById('title').textContent = `RESULTADO FINAL:`;  
    }
  };

  function titleResult() { 
     
  };

