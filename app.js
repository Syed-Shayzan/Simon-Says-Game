let gameSeq = [];
let userSeq = [];
let clrArr = ["red","green","yellow","purple"];
let gameStart = false;
let Level = 0;

let h3_1 = document.querySelector('.gameOver');
let h3_2 = document.querySelector('.score');
let startBtn = document.querySelector('#start-btn');

function GameStart() {
    if(gameStart == false){
        gameStart = true;
        startBtn.style.display = 'none';
        h3_1.style.display = 'none';

        level();
    }
};

startBtn.addEventListener("click", GameStart);

function level() {
    userSeq = [];
    Level++;
    h3_2.innerHTML = (`Level : <b>${Level}<b/>`);

    let getRandom = Math.floor(Math.random() * 4);
    let rdmClr = clrArr[getRandom];
    let rdmBtn = document.querySelector(`.${rdmClr}`);
    flash(rdmBtn);
    gameSeq.push(rdmClr);
}

function flash(btn){
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    },300)
}

function pressBtn() {
    btn = this;
    flash(btn);

    let userClr = btn.getAttribute('id');
    userSeq.push(userClr);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",pressBtn);
}

function checkAns(index){
    if(gameSeq[index] == userSeq[index]){
        if(gameSeq.length == userSeq.length){
            setTimeout(level,1000);
        }
    }
    else{
        let body = document.querySelector('body');
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "black";
        },250);
        h3_1.style.display = 'flex';
        h3_1.innerHTML = `<b>Game Over !</b>`;
        h3_2.innerHTML = `Score : ${Level}`;
        gameOver();
    }
}

function gameOver() {
    gameSeq = [];
    userSeq = [];
    gameStart = false;
    Level = 0;
    startBtn.style.display = 'flex';
    startBtn.style.justifyContent = 'center';
}
