

//Cash the DOM:
const title_h1 = document.querySelector('title');
const botaoIniciar_div = document.querySelector('botao-iniciar');
const choice_div = document.querySelector('choice');
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const playerScore_span = document.querySelector('.player-score');
const computerScore_span = document.querySelector('.computer-score');
const roundResult_div = document.querySelector('.round-result');
const finalResult_div = document.querySelector('.final-result');

var playerScore = 0;
var computerScore = 0;

let playerSelection = '';
const displayResult_button = document.querySelector('.display-result');


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


//Selecionar a opção do comuputador de forma randômica:

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

//Jogar uma única partida de Pedra papel e tesoura
//Aumentar em 1 ponto para quem ganhar

/* function playRound(playerSelection, computerSelection) {

    userScore = 0;
    computerScore = 0;

    if (playerSelection === 'pedra' && computerSelection === 'pedra') {
        return 'Empate! Você e o computador escolheram PEDRA!';
        draw();
    } else if (playerSelection === 'papel' && computerSelection === 'papel') {
        return 'Empate! Você e o computador escolheram PAPEL!';
        draw();
    } else if (playerSelection === 'tesoura' && computerSelection === 'tesoura') {
        return 'Empate! Você e o computador escolheram TESOURA!' ;
        draw();
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        playerScore++
        return 'Você venceu! Pedra vence tesoura!'; 
        win();
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        computerScore++ 
        return 'Você perdeu! Pedra perde do papel...';
        win();
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        playerScore++
        return 'Você venceu! Papel vence pedra!'; 
        win();
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        computerScore++ 
        return 'Você perdeu! Papel perde da tesoura...';
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        playerScore++
        return 'Você venceu! Tesoura vence papel!'; 
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        computerScore++ 
        return 'Você perdeu! Tesoura perde da pedra...'; 

    } 
    playRound(playerSelection, computerSelection);
  }; */

  //Fazer com que sejam jogadas 5 partidas

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


    }
    else if (computerScore === 5 && playerScore < 5) 
    {
        finalResult_div.textContent = `Você perdeu para o computador por ${computerScore} a ${playerScore}`;
        roundResult_div.classList.add('hide');
        pedra.classList.add('hide');
        papel.classList.add('hide');
        tesoura.classList.add('hide');


    }
  };
   /*  const game = () => {
    for(let i = 0; i < 5; i++) {


        
    };
    if (computerScore > playerScore) {
        finalResult_div.textContent = `R. FINAL: Você perdeu para o computador por ${computerScore} a ${playerScore}`;
    } else if (computerScore < playerScore) {
        finalResult_div.textContent = `R. FINAL: Parabéns! Você ganhou do computador por ${playerScore} a ${computerScore}`;
    } else {
        finalResult_div.textContent = `R. FINAL: Você e o computador empataram em ${computerScore} a ${playerScore}`;
    };

};

game()   */

//---------------------------------------------------------------
    
/* console.log(playRound(playerSelection, computerSelection));
        console.log(`Pontos robô: ${computerScore}`);
        console.log(`Pontos você: ${playerScore}`); */
   



