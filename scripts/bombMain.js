var allModuleNames = ['modules/buttonModule.html', 'modules/passwordModule.html','modules/wiresModule.html','modules/keypadModule.html'];
var modulesToBeFilled = ['#module0','#module1','#module2','#module3','#module4','#module5','#module6'];

var successCount = 0;
var numModules = 2;//Chooses the number of modules (1-7)


//loads and chooses modules
var startGame=function(numModules = 2)
{
    $('#numberOfBombModulesComplete').text("Modules Beaten: " + successCount + "/" + numModules);
    $('#bombSpace').load('modules/bombModule.html'); //Makes the first module a bomb
    $('#clockSpace').load('modules/clockModule.html'); //Makes the second module a clock

    var numModulesLoaded = 0;
    modulesToBeFilled.forEach(module => {
        if (allModuleNames.length > 0 && numModulesLoaded < numModules){
            var name = allModuleNames[Math.floor(Math.random()*allModuleNames.length)];
            $(module).load(name); //randomly chooses and loads a minigame for each module
            allModuleNames = allModuleNames.filter(function(n){ return n!=name; }); 
            numModulesLoaded++;
        } else {
            $(module).hide();
        }
        
    });
}

var addSuccess=function() {
    successCount += 1;
    $('#numberOfBombModulesComplete').text("Modules Beaten: " + successCount + "/" + numModules);
    if (successCount == numModules) {
        console.log("game won");
    }
}

$(document).ready(function(){//Runs everything
    startGame(4);
});
