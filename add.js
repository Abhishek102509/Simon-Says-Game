let gameSeq=[]; 
let userSeq=[];
let btns=["red","yellow","green","purple"];

let started=false;
let lvl=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game start");
        started=true;


        lvlUp();
    }
});


function gameflash(btn) {
   btn.classList.add("gameflash");
   setTimeout(function(){
    btn.classList.remove("gameflash");
   },250);
};


function userflash(btn) {
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },250);
};


function lvlUp() {
    userSeq=[];
    lvl++;
    h2.innerText=`Level ${lvl}`;

    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);

    gameSeq.push(randCol);
    console.log(gameSeq);


    gameflash(randBtn);

};

function checkAns(idx){
    // console.log("curr level :", lvl);

    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
       setTimeout(lvlUp,1000);
       }
    }else{
        h2.innerText=`Game over :Your score was ${lvl}  Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);


}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    lvl=0;
 }