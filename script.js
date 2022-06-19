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





function questionFirstShow(){
    questionFirst.classList.toggle('active')
    answerFirst.classList.toggle('active')
}

function questionSecondShow(){
    questionSecond.classList.toggle('active')
    answerSecond.classList.toggle('active')
}

function questionThirdShow(){
    questionThird.classList.toggle('active')
    answerThird.classList.toggle('active')
}

function questionFourthShow(){
    questionFourth.classList.toggle('active')
    answerFourth.classList.toggle('active')
}

function questionFifthShow(){
    questionFifth.classList.toggle('active')
    answerFifth.classList.toggle('active')
}


questionFirst.addEventListener('click',questionFirstShow)
questionSecond.addEventListener('click',questionSecondShow)
questionThird.addEventListener('click',questionThirdShow)
questionFourth.addEventListener('click',questionFourthShow)
questionFifth.addEventListener('click',questionFifthShow)