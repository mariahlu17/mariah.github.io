const questionFirst =document.querySelector(".questionFirst")
const answerFirst = document.querySelector(".answerFirst")
const questionSecond =document.querySelector(".questionSecond")
const questionThird =document.querySelector(".questionThird")
const questionFourth =document.querySelector(".questionFourth")
const questionFifth =document.querySelector(".questionFifth")
const answerSecond = document.querySelector(".answerSecond")
const answerThird = document.querySelector(".answerThird")
const answerFourth = document.querySelector(".answerFourth")
const answerFifth = document.querySelector(".answerFifth")
const animation = document.querySelector(".animation")

let w = window.outerWidth;

if(w < 1450){
    animation.style.backgroundImage ="url('./animationTextSmall.png')";
    animation.style.height = '65px';
}
else{
    animation.style.backgroundImage ="url('./animationText.png')";
    animation.style.height = '95px';
}



function questionFirstShow(){
    questionFirst.classList.toggle('active')
    answerFirst.classList.toggle('active')
    answerFirst.style.color='#ffffff'
}

function questionSecondShow(){
    questionSecond.classList.toggle('active')
    answerSecond.classList.toggle('active')
    answerSecond.style.color='#ffffff'
}

function questionThirdShow(){
    questionThird.classList.toggle('active')
    answerThird.classList.toggle('active')
    answerThird.style.color='#ffffff'
}

function questionFourthShow(){
    questionFourth.classList.toggle('active')
    answerFourth.classList.toggle('active')
    answerFourth.style.color='#ffffff'
}

function questionFifthShow(){
    questionFifth.classList.toggle('active')
    answerFifth.classList.toggle('active')
    answerFifth.style.color='#ffffff'
}


questionFirst.addEventListener('click',questionFirstShow)
questionSecond.addEventListener('click',questionSecondShow)
questionThird.addEventListener('click',questionThirdShow)
questionFourth.addEventListener('click',questionFourthShow)
questionFifth.addEventListener('click',questionFifthShow)
