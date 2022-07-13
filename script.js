function computerPlay(computerChoice) {
    let randomOption = Math.floor(Math.random() * 3)
    if (randomOption === 0)
    {
        console.log('computerChoice é Pedra');
    } 
    else if (randomOption === 1)
    {
        console.log('computerChoice é Papel');
    }   else 
    {
        console.log('computerChoice é tesoura');
    }
    }
computerPlay()

