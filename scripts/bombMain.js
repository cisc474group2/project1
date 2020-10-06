// line 28- change sync strikes with hardcore on/off number of strikes
// line 102- change '4' to user input for number of modules

var allModuleNames = ['modules/buttonModule.html', 'modules/passwordModule.html', 'modules/wiresModule.html', 'modules/keypadModule.html'];
var modulesToBeFilled = [
    '#module0',
    '#module1',
    '#module2',
    '#module3',
    '#module4',
    '#module5',
    '#module6'
];

var successCount = 0;
// var numModules = 2;//Chooses the number of modules (1-7)
var numModulesLoaded = 0;
var stopTheClock;
var userModules;
var clockTicks;
var strikes;
var numOfAllowedStrikes;
var toggleSound;
var errorBuzzerSound;
var explosionSound;
var heartbeatSound;

var blinkLightCounter;
var blinkLightOn;
var blobj;


// loads and chooses modules
var startGame = function (ct, numModules = 2, hd) {
    $('#bombSpace').load('modules/bombModule.html'); // Makes the first module a bomb
    $('#clockSpace').load('modules/clockModule.html');
    // Makes the second module a clock

    // Prepares the clock
    clockTicks = ct;
    strikes = 0;
    stopTheClock = 0;
    toggleSound = new Audio('../audio/toggleSound.wav');
    errorBuzzerSound = new Audio('../audio/buzzer.wav');
    dingSound = new Audio('../audio/ding.wav');
    successSound = new Audio('../audio/success.wav');
    explosionSound = new Audio('../audio/explosion.wav');
    heartbeatSound = new Audio('../audio/heartbeat.wav');
    heartbeatSound.load();

    numOfAllowedStrikes = hd;

    blinkLightCounter = 0;
    blinkLightOn = -1;
    blobj = document.getElementById("masterBombBackground");


    modulesToBeFilled.forEach(module => {
        if (allModuleNames.length > 0 && numModulesLoaded < numModules) {
            var name = allModuleNames[Math.floor(Math.random() * allModuleNames.length)];
            $(module).load(name); // randomly chooses and loads a minigame for each module
            allModuleNames = allModuleNames.filter(function (n) {
                return n != name;
            });
            numModulesLoaded++;
        } else {
            $(module).hide();
        }
    });


    heartbeatSound.volume = .05;
    heartbeatSound.play();
    heartbeatSound.loop = ture;
}


function gameLoss() {

    setTimeout(() => {
        explosionSound.play();
    }, 1000);

    var mbb = document.getElementById("masterBombBackground");

    mbb.innerHTML = "";
    mbb.classList.remove("bombBackgroundGame");
    mbb.classList.add("bombBackgroundLoss");
    var retry = document.createElement("button");
    retry.setAttribute("id", "retryButton");
    retry.innerHTML = "Click to try again...";
    mbb.appendChild(retry);
    document.getElementById("retryButton").addEventListener("click", function () {
        location.href = "startScreen.html";
    });

}

var addSuccess = function () {
    successCount += 1;
    if (successCount == numModulesLoaded) {
        console.log("game won");
        stopTheClock = 0;
        setTimeout(() => {
            successSound.play();
        }, 500);
        var mbb = document.getElementById("masterBombBackground");

        mbb.innerHTML = "";
        mbb.classList.remove("bombBackgroundGame");
        mbb.classList.add("bombBackgroundLoss");
        var retry = document.createElement("button");
        retry.setAttribute("id", "retryButton");
        retry.innerHTML = "Congrats! Click to play again!";
        mbb.appendChild(retry);
        document.getElementById("retryButton").addEventListener("click", function () {
            location.href = "startScreen.html";
        });


    }
}

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function decodeTime(t) {
    ct = [0, 0, 0, 0];
    ct[0] = Math.floor(t / 100) % 10;
    ct[1] = Math.floor(t / 10) % 10;
    ct[2] = Math.floor(t / 1) % 10;
    if (ct[2] == 1) {
        ct[2] = 3;
    }
    console.log("ct", ct);
    return ct;
}

$.when(getUrlVars(), $.ready).done(function (urlVars) {
    // Document is ready.
    // Value of test.json is passed as `data`.
    var time = urlVars['time'];
    var mods = urlVars['mods'];
    var hard = urlVars['hard'];
    $(document).ready(function () { // Runs everything
        startGame(decodeTime(time), mods, hard); // we only have 4 unique modules
    });
});
