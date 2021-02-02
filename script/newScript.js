window.addEventListener('DOMContentLoaded',() =>{
    'use strict';
    let btns = document.querySelectorAll('button');
    let questionTextBox = document.querySelector('.questionTextBox');
    let btnBox = document.querySelectorAll('.btnBox');

    const qObj = {
        question: 
        [
            ["Скока будет 2+2?"],
            ['Кто был 44-ым президентом США?'],
            ['Где, если верить пословице, любопытной Варваре нос оторвали?'],
            ['Сколько на Земле континентов?'],
            ['Что такое Тигр и Евфрат?'],
            ['Кто размещает в интернете грубые или провокационные сообщения?'],
            ["На территории какого современного государства находится легендарная Троя?"],
            ['Кpyпнoe быcтpoxoднoe паccажиpcкoe cyднo'],
            ['Чем заряжали пушки для уничтожения пехоты?'],
            ['Из чего не состоит атом?'],
        ],
        anwsers:
        [
            ["4","3","5","0"],
            ["Барак Обама","Билл Клинтон","Ричард Никсон","Владимир Путин"],
            ['На базаре','В магазине','На работе','На море'],
            ['6','7','8','1'],
            ["Реки","Моря","Озёра","Животные"],
            ['Тролли','Хакеры','Грубые провокаторы','Маркетологи'],
            ["Турция","Египет","Ливия","Греция",],
            ["Круизное судно","Нэрроубот","Лайнер","Турбоход",],
            ["Картечь","Шрапнель","Сняряд","Ядро",],
            ["Фотон","Протон","Нейтрон","Электрон",],
        ],
        alpha: ['A','B','C','D'],
        endGame:'Вы Проиграли :D'
    };
    let counter;
    counter = 0;


    class QuestionGenerator {
        constructor(btns, question, anwser, alpha){
            this.question = question;
            this.anwser = anwser;
            this.btns = btns;
            this.alpha = alpha;
        }

        startGame(counter){
            new QuestionGenerator(btns, qObj.question[counter], qObj.anwsers[counter],qObj.alpha).createA_Q(counter,qObj.alpha);
            
        }
        endGame(counter){
            questionTextBox.textContent = qObj.endGame;
            
            for (let i = 0; i < 4; i++){
                btnBox[i].innerHTML = `
                <button class="btnA">
                <span class="btnCategore">${this.alpha[i]}</span>
                </button>
                `;
            }
            
            return counter;
        }

        victory(){
            questionTextBox.textContent = "Победа";
            for (let i = 0; i < 4; i++){
                btnBox[i].innerHTML = `
                <button class="btnA">
                <span class="btnCategore">${this.alpha[i]}</span>
                </button>
                `;
            }
        }
        createA_Q(counter){
           
            questionTextBox.textContent = this.question;
            
            if (this.anwser == undefined){
                counter = 0;
                let btns = document.querySelectorAll('button');
                btns[0].removeAttribute('data-select', '');
                new QuestionGenerator('','','',qObj.alpha).victory(counter);
            } else {
                for(let i = 0; i < 4; i++){
                    btnBox[i].innerHTML = `
                    <button class="btnA">
                    <span class="btnCategore" data-select>${this.alpha[i]}</span>
                    ${this.anwser[i]}
                    </button>
                    `;
                }
            }
            let btns = document.querySelectorAll('button');
            btns[0].setAttribute('data-select', '');
            btns.forEach(item =>{
                item.addEventListener('click', (event) =>{
                    if(event.target == item && event.target.hasAttribute('data-select')){
                        counter++;
                        new QuestionGenerator(btns, qObj.question[counter], qObj.anwsers[counter],qObj.alpha).createA_Q(counter);
                    }
                    else {
                        btns[0].removeAttribute('data-select', '');
                        counter = 0;
                        new QuestionGenerator('','','',qObj.alpha).endGame(counter);
                    }
                });
            });
            console.log(counter);
        } 
        
    }
    questionTextBox.addEventListener('click', () => {
        new QuestionGenerator(btns, qObj.question[counter], qObj.anwsers[counter],qObj.alpha).startGame(counter);
    })
    
});
