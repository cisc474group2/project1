// Global Variables 
var allIndicatorLabels = [ 'SND', 'CLR', 'CAR', 'IND', 'FRQ', 'SIG', 'NSA', 'MSA', 'TRN', 'BOB', 'FRK'];
var allBatteryNames = ['#bombDBattery1', '#bombDBattery2', '#bombDBattery3', '#bombAABattery1', '#bombAABattery2', '#bombAABattery3'];
var allPortNames = ['#PS2Port', '#RJ45Port', '#SerialPort', '#StereoRCAPort',  '#DVIDPort', '#ParallelPort'];

//Bomb Information
var indicatorLabel = '';
var batteryNames = [];
var portNames = [];
var lightOn = true;

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
        $('#bombIndicatorLight').removeClass("lightOn");
        $('#bombIndicatorLight').addClass("lightOff");
    }
    indicatorLabel = allIndicatorLabels[Math.floor(Math.random()*allIndicatorLabels.length)];
    $('#bombIndicatorLabel').text(indicatorLabel);
}

$(document).ready(function(){//Runs everything
    fillBomb();
});