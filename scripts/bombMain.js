//var allModuleNames = ['modules/moduleTemplate.html','modules/password.html','modules/buttonModule.html', 'modules/keypad.html'];
//var modulesToBeFilled = ['#module2','#module3','#module4','#module5','#module6'];

var successCount = 0;
var numberOfBombModulesLoaded = 2;
var stopTheClock;

var clockTicks;
var strikes;
var toggleSound;
var errorBuzzerSound;
var explosionSound;


//loads and chooses modules
var startGame=function(ct)
{

    $('#module1').load('modules/bombModule.html'); //Makes the first module a bomb
    $('#module2').load('modules/clockModule.html'); 
    $('#module3').load('modules/buttonModule.html');
    $('#module4').load('modules/simonSaysModule.html');
    $('#module5').load('modules/passwordModule.html');
    $('#module6').load('modules/wiresModule.html');
    $('#module7').load('modules/keypadModule.html'); 
    $('#module8').load('modules/module_template.html'); 

    //Prepares the clock
    clockTicks = ct;
    strikes=0;
    stopTheClock = 0;
    toggleSound = new Audio('../audio/toggleSound.wav');
    errorBuzzerSound = new Audio('../audio/buzzer.wav');
    explosionSound = new Audio('../audio/explosion.wav');
    /*
    modulesToBeFilled.forEach(module => {
        $(module).load(allModuleNames[Math.floor(Math.random()*allModuleNames.length)]); //randomly chooses and loads a minigame for each module
    });
    */
}


function gameLoss() {
    
    setTimeout(() => {
        explosionSound.play();
    }, 1000);
}

var addSuccess=function() {
    successCount += 1;
    if (successCount == numberOfBombModulesLoaded) {
        console.log("game won");
    }
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function decodeTime(t) {
    ct = [0, 0, 0, 0];
    ct[0] = Math.floor(t/100) % 10;
    ct[1] = Math.floor(t/10) % 10;
    ct[2] = Math.floor(t/1) % 10;
    if (ct[2] == 1) {
        ct[2] = 3;
    }
    console.log("ct", ct);
    return ct;
}

$.when(
    getUrlVars(),
    $.ready
  ).done(function( urlVars ) {
    // Document is ready.
    // Value of test.json is passed as `data`.
    var time = urlVars['time'];
    $(document).ready(function(){//Runs everything
        startGame(decodeTime(time));
    });
  });


