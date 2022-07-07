function computerPlay() {
    const array = ['Pedra', 'Papel', 'Tesoura'];
    let randomItem = array[Math.floor(Math.random()*array.length)];
    console.log(randomItem);

}
computerPlay()

