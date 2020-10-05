//var allModuleNames = ['modules/moduleTemplate.html','modules/password.html','modules/buttonModule.html', 'modules/keypad.html'];
//var modulesToBeFilled = ['#module2','#module3','#module4','#module5','#module6'];

var successCount = 0;
var numberOfBombModulesLoaded = 2;


//loads and chooses modules
var startGame=function()
{
    $('#module1').load('modules/bombModule.html'); //Makes the first module a bomb
    $('#module2').load('modules/clockModule.html'); 
    $('#module3').load('modules/buttonModule.html');
    $('#module4').load('modules/simonSaysModule.html');
    $('#module5').load('modules/passwordModule.html');
    $('#module6').load('modules/wiresModule.html');
    $('#module7').load('modules/keypadModule.html'); 
    $('#module8').load('modules/module_template.html'); 

    /*
    modulesToBeFilled.forEach(module => {
        $(module).load(allModuleNames[Math.floor(Math.random()*allModuleNames.length)]); //randomly chooses and loads a minigame for each module
    });
    */
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

$.when(
    getUrlVars(),
    $.ready
  ).done(function( urlVars ) {
    // Document is ready.
    // Value of test.json is passed as `data`.
    console.log(urlVars);
    console.log(urlVars['time']);
    $(document).ready(function(urlVars){//Runs everything
        startGame(urlVars['time']);
    });
  });


