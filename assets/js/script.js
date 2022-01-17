//pegando os minutos e segundos
let minutos = document.querySelector(".pomo-min");
let segundos = document.querySelector(".pomo-seg");

let ciclos = document.querySelector(".pomo-ciclos");

let descansoMin = document.querySelector(".descanso-min");
let descansoSeg = document.querySelector(".descanso-seg");

//pegando os botoes de controle
let btnStart = document.querySelector(".btnplay");
let btnPause = document.querySelector(".btnpause");
let btnStop = document.querySelector(".btnstop");

//variavel que inicia a funcao
let startPomodoro;

//funcao que inicia o pomodoro
btnStart.addEventListener("click", function(){
    
    if(startPomodoro === undefined){
        startPomodoro = setInterval(pomodoroTimer, 1000);
    }
    else{
        alert("O pomodoro já está funcionando!");
    }
});

//funcao que pausa o pomodoro
btnPause.addEventListener("click", function(){
    clearInterval(startPomodoro);
    startPomodoro = undefined;
});

//funcao que reseta o pomodoro
btnStop.addEventListener("click", function(){
    clearInterval(startPomodoro);
    startPomodoro = undefined;

    minutos.textContent = 25;
    segundos.textContent = "00";

    descansoMin.textContent = 05;
    descansoSeg.textContent = "00";

    ciclos.textContent = 0;
});

//funcao principal do pomodoro
function pomodoroTimer(){
    if(segundos.textContent != 0){
        segundos.textContent--;
    }
    else if(minutos.textContent != 0 && segundos.textContent == 0){
        minutos.textContent--;
        segundos.textContent = 59; 
    }

    //descanso
    if(minutos.textContent == 0 && segundos.textContent == 0){
        if(descansoSeg.textContent != 0){
           descansoSeg.textContent--;
        }
        else if(descansoMin.textContent != 0 && descansoSeg.textContent == 0){
            descansoSeg.textContent = 59;
            descansoMin.textContent--;
        }
    }

    //ciclos
    if(minutos.textContent == 0 && segundos.textContent == 0 
        && descansoMin.textContent == 0 && descansoSeg.textContent == 0){
        minutos.textContent = 25;
        segundos.textContent = 59;

        descansoSeg.textContent = 59;
        descansoMin.textContent = 05;

        ciclos.textContent++;
    }
}

copyright();

//funcao copyright
function copyright(){
    let copy = document.querySelector(".ano");
    copy.textContent = new Date().getFullYear();
}

//dark mode
let darkMode = document.querySelector(".dark-mode");

//funcao que aciona o dark mode
darkMode.addEventListener("click", function(){
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}); 