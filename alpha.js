function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}


function getArandomAlphabet(){

    // get or create an alphabet arry
    const alphabetSting = "zaqwsxedcrfvtgbyhnujmkilop";
    const alphabets = alphabetSting.split('');
    // console.log(alphabets)

    // get a rendom alphabet 0 - 25
    const randomNumber =Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index)

    // buji nai---------------------------------------
    const alphabet = alphabets[index]
    // console.log(index,alphabet);
    return alphabet;
}