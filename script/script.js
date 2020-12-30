console.log("online");
const btnA = document.querySelector(".btnA");
const btnC = document.querySelector(".btnC");
const btnB = document.querySelector(".btnB");
const btnD = document.querySelector(".btnD");
const contentContainer = document.querySelector('.contentContainer');
let questionTextBox = document.querySelector('.questionTextBox');
const btn = document.querySelectorAll('.btn');

const questions = {
    questionText1:"Скока будет 2+2?",
    questionText2:'Кто был 44-ым президентом США?',
    questionText3:'Один в поле не воин, a...'
};

class x {
    constructor(question,anwsers){
        this.question = question;
        this.awnsers = anwsers;
    }
    questionCreator(){
        questionTextBox.textContent = this.question;
        
        const anwsersShow = this.anwsers;
        for(let i = 0; i < btn.length; i++){
            btn[i].textContent = anwsersShow;
        }
    }
}

const anwsersList = {
    a:"3",
    b:"5",
    c:"4",
    d:"0",
    readAnwsers:() => {
        for (let key in anwsersList){
            console.log(anwsersList[key]);
        }
    }
};

const anwsersList2 = {
    a:'Барак Обама',
    b:"Билл Клинтон",
    c:"Ричард Никсон",
    d:"Владимир Путин"
}



contentContainer.addEventListener('click', startGame);

function startGame(){
    contentContainer.removeEventListener('click', startGame);
    let showMeQuestion = new x(questions.questionText1 ,anwsersList.readAnwsers);
    showMeQuestion.questionCreator();
    btnB.addEventListener('click', questionN2);
}

// function questionN1(){
//     questionTextBox.textContent = questions.questionText1;
//     const anwsers = Object.values(anwsersList1);
//         for(let i = 0; i < btn.length; i++){
//             btn[i].textContent = anwsers[i];
//         }
// }

function questionN2(){
    questionTextBox.textContent = questions.questionText2;
    const anwsers = Object.values(anwsersList2);
        for(let i = 0; i < btn.length; i++){
            btn[i].textContent = anwsers[i];
        }
}



// function questionN(){
//     questionTextBox.textContent = x.questionText;
//     const anwsers = Object.values(y);
//         for(let i = 0; i < btn.length; i++){
//             btn[i].textContent = anwsers[i];
//         }
// }

//  btn.forEach(item =>{
//         item.addEventListener('click',()=>{
//             console.log('true');
//         })
//     })