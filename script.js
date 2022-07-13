let computerSelection = computerPlay();
let playerSelection = window.prompt('Pedra, papel ou tesoura?');
const displayResult_button = document.querySelector('.display-result');


displayResult_button.addEventListener('click', function() {
    singleRound(playerSelection.toLocaleLowerCase(), computerSelection);
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

console.log(`O computador escolheu ${computerPlay()}`)
console.log(`Você escolheu ${playerSelection}`)


function singleRound(playerSelection, computerSelection) {
/*     let optionsMatch = playerSelection + computerSelection;
        
 */    

    switch(playerSelection + computerSelection) {
        case 'pedratesoura':
        case 'papelpedra':
        case 'tesourapapel':
            console.log('Você venceu')
            break
        case 'pedrapapel':
        case 'papeltesoura':
        case 'tesourapedra':
            console.log('Computador Venceu')
            break
        case 'pedrapedra':
        case 'papelpapel':
        case 'tesouratesoura':
            console.log('Empate')
            break
    }
}

 
    

   



