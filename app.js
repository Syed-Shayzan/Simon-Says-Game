let btns = ["red","green","yellow","purple"];
let gameSeq = [];
let userSeq = [];
let started = false;
let Level = 0;
let h3 = document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});


function flash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },350);
}

function levelUp(){
    userSeq = [];
    Level++;
    h3.innerText = `level ${Level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randclr = btns[randIdx];
    let radbtn = document.querySelector(`.${randclr}`);
    gameSeq.push(randclr);
    console.log(gameSeq);
    flash(radbtn);
}

function pressBtn(){
    let btn = this;
    flash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",pressBtn);
    
}

function checkAns(indx){
    if(gameSeq[indx] == userSeq[indx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },250);
        h3.innerHTML = `Game Over! Your score was <b>${Level}</b><br>Please press any key to start the Game`;
        gameOver();
    }
}

function gameOver(){
    gameSeq = [];
    userSeq = [];
    Level = 0;
    started = false;
}




