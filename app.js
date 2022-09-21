// Initialize Home Controller 
const 
    homeScores = document.getElementById('home-scores'),
    homePlusBtn = document.getElementById('home-PlusBtn'),
    homeMinusBtn = document.getElementById('home-MinusBtn');

let valueOne = 0;

// Function of Home controller buttons 
homePlusBtn.addEventListener('click', function() {
    homeScores.textContent = valueOne += 1;
});
homeMinusBtn.addEventListener('click', function() {
    homeScores.textContent = valueOne -= 1;
});

// Initialize Guest Controller
const 
    guestScores = document.getElementById('guest-scores'),
    guestPlusBtn = document.getElementById('guest-PlusBtn'),
    guestMinusBtn = document.getElementById('guest-MinusBtn');

let valueTwo = 0;

// Function of Guest controller buttons 
guestPlusBtn.addEventListener('click', function() {
    guestScores.textContent = valueTwo += 1;
});
guestMinusBtn.addEventListener('click', function() {
    guestScores.textContent = valueTwo -= 1;
});

// Initialize Quarter Controller
const 
    gameQuarter = document.getElementById('game-quarter'),
    buttonOne = document.getElementById('btnOne'),
    buttonTwo = document.getElementById('btnTwo'),
    buttonThree = document.getElementById('btnThree'),
    buttonFour = document.getElementById('btnFour');

// Function of Quarter controller buttons 
buttonOne.addEventListener('click', function(){ 
    gameQuarter.textContent = 1; 
});
buttonTwo.addEventListener('click', function(){ 
    gameQuarter.textContent = 2; 
});
buttonThree.addEventListener('click', function(){ 
    gameQuarter.textContent = 3; 
});
buttonFour.addEventListener('click', function(){ 
    gameQuarter.textContent = 4; 
});

// Function of Fouls controller buttons
const 
    homeFouls = document.getElementById('home-fouls'),
    guestFouls = document.getElementById('guest-fouls'),
    homeFoulsPlusBtn = document.getElementById('hFouls-PlusBtn'),
    homeFoulsMinusBtn = document.getElementById('hFouls-MinusBtn'),
    guestFoulsPlusBtn = document.getElementById('gFouls-PlusBtn'),
    guestFoulsMinusBtn = document.getElementById('gFouls-MinusBtn');

let valueThree = 0, valueFour = 0;

homeFoulsPlusBtn.addEventListener('click', function(){ 
    homeFouls.textContent = valueThree += 1 
});
homeFoulsMinusBtn.addEventListener('click', function(){ 
    homeFouls.textContent = valueThree -= 1 
});
guestFoulsPlusBtn.addEventListener('click', function(){ 
    guestFouls.textContent = valueFour += 1 
});
guestFoulsMinusBtn.addEventListener('click', function(){ 
    guestFouls.textContent = valueFour -= 1 
});


// Game Timer Controller

// Initialize Game Timer Controller
var 
    startStopBtn = document.getElementById('gameTime-startStop'),
    resetBtn = document.getElementById('gameTime-reset'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

var startingGameTime = null, gameTimerRunning = true, gameTimeCounter = setInterval(gameTimer, 1000);


function gameTimer() {
    if(minutes.value == 0 && seconds.value == 0) {
        minutes.value = 0;
        seconds.value = 0;
    }else if(seconds.value != 0) {
        seconds.value--;
    }else if(minutes.value != 0 && seconds.value == 0) {
        seconds.value = 59;
        minutes.value--;
    }
}

// PLAY/STOP Button
startStopBtn.addEventListener('click', function(){
    gameTimerRunning ? clearInterval(gameTimeCounter) : gameTimeCounter = setInterval(gameTimer, 1000);
    gameTimerRunning = !gameTimerRunning;
    

});

// RESET Button
resetBtn.addEventListener('click', function(){
    clearInterval(gameTimeCounter);
    minutes.value = 10;
    seconds.value = 0 + "0";
    gameTimerRunning = false;
});



// Shot Clock Controller

// Initialize Shot Clock Controller
const
    shotclockTimer = document.getElementById('shotclock-time'),
    playStop = document.getElementById('shotclock-playStop'),
    reset = document.getElementById('shotclock-reset');

let startingTime = 24, counter = setInterval(timer, 1000), running = true;

// Function of 24 Shot clocks
function timer() {
    startingTime -= 1;
    if(startingTime < 0){ startingTime = 24; };

    shotclockTimer.textContent = startingTime;
};

// PLAY/STOP Button
playStop.addEventListener('click', function(){
    running ? clearInterval(counter) : counter = setInterval(timer,1000);
    running = !running;
});
// RESET Button
reset.addEventListener('click', function(){
    clearInterval(counter);
    shotclockTimer.textContent = 24;
    startingTime = 24;
    running = false;
})



    






