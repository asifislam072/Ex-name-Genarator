// function play(){
//     const homeSection = document.getElementById('home-screen');
//     ground()
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);
// }

// function handelkeyupButton(){
//     console.log('button push')
// }
function handlekeydakupevent(event){
    const playerPress = event.key;
    // console.log('parfat number', playerPress)

    // gat the expected to press
    const curretAlphabet = document.getElementById('curret-alphabet')
    const curretAlphabeText = curretAlphabet.innerText;
    const expetedAlphabet = curretAlphabeText.toLocaleLowerCase();


    if(playerPress === expetedAlphabet){
        // console.log('it is right');
        removeBackgroundColor(expetedAlphabet);
        // update score
        // 1.gat the current score
        const setIncresScore = document.getElementById('curret-score');
        const scoreNumber = setIncresScore.innerText;
        const currentscore=parseInt(scoreNumber);
        console.log(scoreNumber)
        // 2.increse the score by 1
        const scoreIncres = currentscore + 1;
        // 3.show the updated score
        setIncresScore.innerText = scoreIncres;


        // continew game----------------------------------
        contineGame();
    }
    else{
        // console.log('wrong site')

        const lifeCutElement = document.getElementById('curret-life');
        const lifeParset = lifeCutElement.innerText;
        const lifeinner = parseInt(lifeParset)
        const cutlife = lifeinner - 1;
        lifeCutElement.innerText=cutlife;

        if(cutlife === 0){
            gameOver()
        }
    }

}
document.addEventListener('keyup', handlekeydakupevent)




function contineGame(){
    const alphabet=getArandomAlphabet()
    // console.log('your random alphabet', alphabet)

    // set a randomley generated alphabet to screen

    const curretAlphabet=document.getElementById('curret-alphabet');
    curretAlphabet.innerText= alphabet.toUpperCase();

    // set background color
    setBackgroundColor(alphabet)
   
}

function play(){

    // onlay show play ground
    hideElementById('home-screen')
    hideElementById('final-score')

    // reset playground 
    setTextElementById('curret-life',5);
    setTextElementById('curret-score',0)
    showElementById('play-ground')
    contineGame()
}



function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // update final score
    // 1.get the final score
    const lastSore = document.getElementById('curret-score');
    const lastScoreInnerText = lastSore.innerText
    setTextElementById('game-over',lastScoreInnerText)

    // remove wrong button color bg
    const currterAlphabet = getElementByText('curret-alphabet')
    console.log(currterAlphabet);
    removeBackgroundColor(currterAlphabet);

}





