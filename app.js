
let pomodoroBtn = document.querySelector('#pomodoro-btn');
let shortBreakBtn = document.querySelector('#short-break-btn');
let longBreakBtn = document.querySelector('#long-break-btn');
let toggleButton = document.querySelector('#start-btn');
let timerText = document.querySelector('h2');
let optionsDiv = document.querySelector('#options');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let footer = document.querySelector('footer');

let minutes = 25; 
let seconds = 0;
let intervalId = null;

// Update Time
function updateTimerDisplay(){
    timerText.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// start Timer 
function startTimer(){
    if(minutes === 0 && seconds === 0){
        clearInterval(intervalId);
        intervalId = null;
        toggleButton.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
        return; // --?
    }

    if(seconds === 0){
        minutes--;
        seconds = 59;
    }
    else{
        seconds--;
    }
    updateTimerDisplay();
}

// start/pause button
toggleButton.addEventListener('click', function(){
    if(!intervalId){
        this.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
        intervalId = setInterval(startTimer, 1000);
    }
    else{
        this.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
        clearInterval(intervalId);
        intervalId = null;
    }
    darkMode();
});

// setTimer function to set time
function setTimer(minutesValue){
    minutes = minutesValue;
    seconds = 0;
    updateTimerDisplay();
    clearInterval(intervalId) 
    toggleButton.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
    intervalId = null;
}

// Buttons

pomodoroBtn.addEventListener('click', () => {
    setTimer(25);
    // pomodoroColorTheme();

    let darkColor = "#67b99a";
    let lightColor = "#99e2b4";
    let mode = 'pomodoro';
    setTheme(darkColor, lightColor, mode);
});

shortBreakBtn.addEventListener('click', () => {
    setTimer(5);
    // shortBreakColorTheme();

    let darkColor = "#0077B6";
    let lightColor = "#00B4D8";
    let mode = 'shortBreak';
    setTheme(darkColor, lightColor, mode);
})

longBreakBtn.addEventListener('click', () => {
    setTimer(15);
    // longBreakColorTheme();

    let darkColor = "#023E8A";
    let lightColor = "#0096C7";
    let mode = 'longBreak';
    setTheme(darkColor, lightColor, mode);

});

pomodoroBtn.style.border = '2px solid white'; // by default on the pomodoro mod
function setTheme(darkColor, lightColor, mode){
    body.style.backgroundColor = darkColor;
    h1.style.backgroundColor = lightColor;
    optionsDiv.style.backgroundColor = lightColor;
    pomodoroBtn.style.backgroundColor = darkColor;
    shortBreakBtn.style.backgroundColor = darkColor;
    longBreakBtn.style.backgroundColor = darkColor;
    footer.style.backgroundColor = lightColor;

    if(mode === 'pomodoro'){
        pomodoroBtn.style.border = '2px solid white';
        shortBreakBtn.style.border = 'none';
        longBreakBtn.style.border = 'none';
    }
    else if(mode === 'shortBreak'){
        shortBreakBtn.style.border = '2px solid white';
        pomodoroBtn.style.border = 'none';
        longBreakBtn.style.border = 'none';
    }
    else if(mode === 'longBreak'){
        longBreakBtn.style.border = '2px solid white';
        pomodoroBtn.style.border = 'none';
        shortBreakBtn.style.border = 'none';
    }
}