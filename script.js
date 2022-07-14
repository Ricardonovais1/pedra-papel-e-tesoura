let playerSelection = '' 
const displayResult_button = document.querySelector('.display-result');
let computerScore = 0;
let playerScore = 0;

/* displayResult_button.addEventListener('click', function() {
    playRound(playerSelection.toLocaleLowerCase(), computerSelection);
}); */



document.body.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') playRound(playerSelection.toLocaleLowerCase(), computerSelection);
    
});


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

/* console.log(`O computador escolheu ${computerPlay()}`)
console.log(`Você escolheu ${playerSelection}`) */


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'pedra' && computerSelection === 'pedra') {
        return 'Empate! Você e o computador escolheram PEDRA!'
    } else if (playerSelection === 'papel' && computerSelection === 'papel') {
        return 'Empate! Você e o computador escolheram PAPEL!'
    } else if (playerSelection === 'tesoura' && computerSelection === 'tesoura') {
        return 'Empate! Você e o computador escolheram TESOURA!' 
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        playerScore++
        return 'Você venceu! Pedra vence tesoura!' 
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        computerScore++ 
        return 'Você perdeu! Pedra perde do papel...'
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        playerScore++
        return 'Você venceu! Papel vence pedra!' 
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        computerScore++ 
        return 'Você perdeu! Papel perde da tesoura...' 
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        playerScore++
        return 'Você venceu! Tesoura vence papel!' 
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        computerScore++ 
        return 'Você perdeu! Tesoura perde da pedra...' 

    } 
    playerRound(playerSelection, computerSelection)
   /*  switch(playerSelection + computerSelection) {
        case 'pedratesoura':
        case 'papelpedra':
        case 'tesourapapel':
            console.log('Você venceu')
            playerScore++
            break
        case 'pedrapapel':
        case 'papeltesoura':
        case 'tesourapedra':
            console.log('Computador Venceu')
            computerScore++
            break
        case 'pedrapedra':
        case 'papelpapel':
        case 'tesouratesoura':
            console.log('Empate')
            break
    } */
}

const game = () => {
    for(let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Pedra, papel ou tesoura?').toLocaleLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Pontos robô: ${computerScore}`);
        console.log(`Pontos você: ${playerScore}`)
        
    }
}

game()
    

   



