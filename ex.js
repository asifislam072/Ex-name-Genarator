// function play(){
//     const homeSection = document.getElementById('home-screen');
//     ground()
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);
// }

function contineGame(){
    const alphabet=getArandomAlphabet()
    console.log('your random alphabet', alphabet)

    // set a randomley generated alphabet to screen

    const curretAlphabet=document.getElementById('curret-alphabet');
    curretAlphabet.innerText= alphabet.toUpperCase();

    // set background color
    setBackgroundColor(alphabet)
   
}



function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    contineGame()

}




