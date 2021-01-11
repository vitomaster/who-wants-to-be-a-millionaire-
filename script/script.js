console.log("online");
// привет
const btnA = document.querySelector(".btnA");
const btnC = document.querySelector(".btnC");
const btnB = document.querySelector(".btnB");
const btnD = document.querySelector(".btnD");
const contentContainer = document.querySelector('.contentContainer');
let questionTextBox = document.querySelector('.questionTextBox');
const btn = document.querySelectorAll('.btn');
const introBox = document.querySelector('.introBox');
const introTop = document.querySelector('.introTop');
const introBot = document.querySelector('.introBot');
const introIcon = document.querySelector('.introIcon');
const introMusic = document.querySelector('.introMusic');
const yesIcon = document.querySelector('.checkbtn');
const letsPlay = document.querySelector('.letsPlay');
const ambiant = document.querySelector('.ambiant')



introIcon.addEventListener('click', () =>{
    introTop.style.animationName = 'introAnimeTop';
    introTop.style.backgroundColor = 'inherit';
    introTop.style.animationDuration = '4s';
    introBot.style.backgroundColor = 'inherit';
    introBot.style.animationName = 'introAnimeBot';
    introIcon.style.animationName = 'introIconAnime';
    introMusic.play();

    setTimeout(function () {
        introIcon.classList.add('hide');
    },2000);
    
    setTimeout(function () {
        introBox.style.display = 'none';
    },4000);
})
    
const btns = {
    a:btnA,
    b:btnB,
    c:btnC,
    d:btnD
}

const questions = {
    questionWrong:'Вы ответили не верно! Играть ещё раз',
    questionText1:"Скока будет 2+2?",
    questionText2:'Кто был 44-ым президентом США?',
    questionText3:'Где, если верить пословице, любопытной Варваре нос оторвали?',
    questionText4:'Сколько на Земле континентов?',
    questionText5:'Что такое Тигр и Евфрат?',
    questionText6:'Кто размещает в интернете грубые или провокационные сообщения?',
    questionText7:"На территории какого современного государства находится легендарная Троя?",
    questionText8:'Кpyпнoe быcтpoxoднoe паccажиpcкoe cyднo',
    questionText9:'Чем заряжали пушки для уничтожения пехоты?',
    questionText10:'Из чего не состоит атом?',
};

const anwsersList1 = {
    a:"3",
    b:"5",
    c:"4", //true
    d:"0"
};

console.log(btn);

const anwsersList2 = {
    a:'Барак Обама', //true
    b:"Билл Клинтон",
    c:"Ричард Никсон",
    d:"Владимир Путин"
}

const anwsersList3 = {
    a:'В магазине',
    b:'На базаре',//true
    c:'На работе', 
    d:'На море'
}

const anwsersList4 = {
    a:'7',
    c:'6', //true
    b:'8',
    d:'1'
}

const anwsersList5 = {
    a:"Моря",
    b:"Озёра",
    c:"Животные", 
    d:"Реки",//true
}

const anwsersList6 = {
    a:'Тролли',//true
    b:'Хакеры',
    c:'Грубые провокаторы',
    d:'Маркетологи'
}

const anwsersList7 = {
    a:"Египет",
    b:"Ливия",
    c:"Греция",
    d:"Турция", //true
}

const anwsersList8 = {
    a:"Круизное судно",
    c:"Нэрроубот",
    b:"Лайнер",//true
    d:"Турбоход",
}
const anwsersList9 = {
    a:"Картечь",//true
    b:"Шрапнель",
    c:"Сняряд",
    d:"Ядро",
}

const anwsersList10 = {
    a:"Фотон",//true
    b:"Протон",
    c:"Нейтрон",
    d:"Электрон",
}

contentContainer.addEventListener('click', startGame);

function placeText(event){
    let anwsers = Object.values(event);
    for(let i = 0; i < btn.length; i++){
        btn[i].textContent = anwsers[i];
    }
}

function clearText(){
    for(let i = 0; i < btn.length; i++){
        btn[i].textContent = " ";
    }
}



function startGame(){

    letsPlay.play();

    setTimeout(function letsPlayF() {
        letsPlay.pause();
    },6000);

    ambiant.play();

    contentContainer.removeEventListener('click', startGame);
    questionN1();
}



function questionN1(){

    questionTextBox.textContent = questions.questionText1;

    placeText(anwsersList1);

    for (let key in btns){
        btns[key].addEventListener('click', function (){
            if(key == 'a' || key == 'd' || key == 'c'){
                questionTextBox.textContent = questions.questionWrong;
                clearText();
                contentContainer.addEventListener('click', startGame);
            }
            if(key == 'b'){
                questionN2();
            }
        });
    }
}

function questionN2(){
    questionTextBox.textContent = questions.questionText2;

    placeText(anwsersList2);

    for (let key in btns){
        btns[key].addEventListener('click', function(){
            if(key == 'b' || key == 'd' || key == 'c'){
                questionTextBox.textContent = questions.questionWrong;
                clearText()
                contentContainer.addEventListener('click', startGame);
            }
            if(key == 'a'){
                questionN3();
            }
        })
    }
}

function questionN3 (){

    questionTextBox.textContent = questions.questionText3;

    placeText(anwsersList3);

    for (let key in btns){
        btns[key].addEventListener('click', function(){
            if(key == 'b' || key == 'd' || key == 'a'){
                questionTextBox.textContent = questions.questionWrong;
                clearText()
                contentContainer.addEventListener('click', startGame);
            }
            if(key == 'c'){
                questionN4();
            }
        })
    }
}

function questionN4(){
    
    questionTextBox.textContent = questions.questionText4;

    placeText(anwsersList4);

    for (let key in btns){
        btns[key].addEventListener('click', function(){
            if(key == 'b' || key == 'd' || key == 'a'){
                questionTextBox.textContent = questions.questionWrong;
                clearText();
                contentContainer.addEventListener('click', startGame);
            }
            if(key == 'c'){
                questionN5();
            }
        })
    }
}

function questionN5(){

    questionTextBox.textContent = questions.questionText5;

    placeText(anwsersList5);

        for (let key in btns){
            btns[key].addEventListener('click', function(){
                if(key == 'b' || key == 'c' || key == 'a'){
                    questionTextBox.textContent = questions.questionWrong;
                    clearText();
                    contentContainer.addEventListener('click', startGame);
                }
                if(key == 'd'){
                    questionN6();
                }
            })
        }
}

function questionN6(){

    questionTextBox.textContent = questions.questionText6;

    placeText(anwsersList6);

        
        for (let key in btns){
            btns[key].addEventListener('click', function(){
                if(key == 'b' || key == 'c' || key == 'd'){
                    questionTextBox.textContent = questions.questionWrong;
                    clearText();
                    contentContainer.addEventListener('click', startGame);
                }
                if(key == 'a'){
                    questionN7();
                }
            })
        }
}

function questionN7(){

    questionTextBox.textContent = questions.questionText7;

    placeText(anwsersList7);

        for (let key in btns){
            btns[key].addEventListener('click', function(){
                if(key == 'b' || key == 'c' || key == 'a'){
                    questionTextBox.textContent = questions.questionWrong;
                    clearText();
                    contentContainer.addEventListener('click', startGame);
                }
                if(key == 'd'){
                    questionN8();
                }
            })
        }
}

function questionN8(){

    questionTextBox.textContent = questions.questionText8;

    placeText(anwsersList8);

        for (let key in btns){
            btns[key].addEventListener('click', function(){
                if(key == 'd' || key == 'c' || key == 'a'){
                    questionTextBox.textContent = questions.questionWrong;
                    clearText();
                    contentContainer.addEventListener('click', startGame);
                }
                if(key == 'b'){
                    questionN9();
                }
            })
        }
}

function questionN9(){

    questionTextBox.textContent = questions.questionText9;

    placeText(anwsersList9);
        
    for (let key in btns){
        btns[key].addEventListener('click', function(){
            if(key == 'b' || key == 'c' || key == 'd'){
                questionTextBox.textContent = questions.questionWrong;
                clearText();
                contentContainer.addEventListener('click', startGame);
            }
            if(key == 'a'){
                questionN10();
            }
        })
    }
}

function questionN10(){

    questionTextBox.textContent = questions.questionText10;
    
    placeText(anwsersList10);
      
        for (let key in btns){
            btns[key].addEventListener('click', function(){
                if(key == 'b' || key == 'c' || key == 'd'){
                    questionTextBox.textContent = questions.questionWrong;
                    clearText();
                    contentContainer.addEventListener('click', startGame);
                }
                if(key == 'a'){
                    questionTextBox.textContent = "Победа! С играть ещё раз";
                    clearText();
                    contentContainer.addEventListener('click', startGame);
                }
            })
        }
}
