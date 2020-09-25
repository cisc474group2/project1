// Global Variables 
var allIndicatorLabels = [ 'SND', 'CLR', 'CAR', 'IND', 'FRQ', 'SIG', 'NSA', 'MSA', 'TRN', 'BOB', 'FRK'];
var allBatteryNames = ['#dBattery1', '#dBattery2', '#dBattery3', '#aABattery1', '#aABattery2', '#aABattery3'];
var allPortNames = ['#PS2Port', '#RJ45Port', '#SerialPort', '#StereoRCAPort',  '#DVIDPort', '#ParallelPort'];
var allModuleNames = ['modules/moduleTemplate.html','modules/password.html','modules/buttonModule.html', 'modules/keypad.html', 'modules/wires.html'];
var modulesToBeFilled = ['#module2','#module3','#module4','#module5','#module6'];

//Bomb Information
var indicatorLabel = '';
var batteryNames = [];
var portNames = [];
var lightOn = true;

//loads and chooses modules
var startGame=function()
{
    $('#module1').load('modules/bombModule.html'); //Makes the first module a bomb
    modulesToBeFilled.forEach(module => {
        $(module).load(allModuleNames[Math.floor(Math.random()*allModuleNames.length)]); //randomly chooses and loads a minigame for each module
    });
}

// Populates bomb randomly with ports, indicators and batteries 
function fillBomb() {

    allBatteryNames.forEach(battery => {
        if(Math.random() < .5){
            $(battery).hide();
        } else {
            batteryNames.push([battery]);
        }
    });
    allPortNames.forEach(port => {
        if(Math.random() < .5){
            $(port).hide();
        } else {
            portNames.push(port);
        }
    });

    if(Math.random() < .5){
        lightOn = false;
        $('#indicatorLight').removeClass("on");
        $('#indicatorLight').addClass("off");
    }
    indicatorLabel = allIndicatorLabels[Math.floor(Math.random()*allIndicatorLabels.length)];
    $('#indicatorLabel').text(indicatorLabel);
}