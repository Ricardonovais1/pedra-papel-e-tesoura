let playerSelection = '';
const displayResult_button = document.querySelector('.display-result');
let computerScore = 0;
let playerScore = 0;

//Selecionar a opção do comuputador de forma randômica:

function computerPlay() {
    let randomOption = Math.floor(Math.random() * 3)
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
    }   
}

//Jogar uma única partida de Pedra papel e tesoura
//Aumentar em 1 ponto para quem ganhar

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'pedra' && computerSelection === 'pedra') {
        return 'Empate! Você e o computador escolheram PEDRA!';
    } else if (playerSelection === 'papel' && computerSelection === 'papel') {
        return 'Empate! Você e o computador escolheram PAPEL!';
    } else if (playerSelection === 'tesoura' && computerSelection === 'tesoura') {
        return 'Empate! Você e o computador escolheram TESOURA!' ;
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        playerScore++
        return 'Você venceu! Pedra vence tesoura!'; 
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        computerScore++ 
        return 'Você perdeu! Pedra perde do papel...';
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        playerScore++
        return 'Você venceu! Papel vence pedra!'; 
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
  };

  //Fazer com que sejam jogadas 5 partidas

const game = () => {
    for(let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Pedra, papel ou tesoura?').toLocaleLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Pontos robô: ${computerScore}`);
        console.log(`Pontos você: ${playerScore}`);
    }
    if (computerScore > playerScore) {
        console.log(`R. FINAL: Você perdeu para o computador por ${computerScore} a ${playerScore}`);
    } else if (computerScore < playerScore) {
        console.log(`R. FINAL: Parabéns! Você ganhou do computador por ${playerScore} a ${computerScore}`)
    } else {
        console.log(`R. FINAL: Você e o computador empataram em ${computerScore} a ${playerScore}`)
    }

}

game()
    

   



