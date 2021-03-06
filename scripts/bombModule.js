// Global Variables 
var allIndicatorLabels = [ 'SND', 'CLR', 'CAR', 'IND', 'FRQ', 'SIG', 'NSA', 'MSA', 'TRN', 'BOB', 'FRK'];
var allBatteryNames = ['#bombDBattery1', '#bombDBattery2', '#bombDBattery3', '#bombAABattery1', '#bombAABattery2', '#bombAABattery3'];
var allPortNames = ['#PS2Port', '#RJ45Port', '#SerialPort', '#StereoRCAPort',  '#DVIDPort', '#ParallelPort'];

//Bomb Information
var indicatorLabel = '';
var batteryNames = [];
var portNames = [];
var serialNumber = [];
var lightOn = true;

var getBombInfo=function(){
    /** 
     * returns an array containing boolean lightOn, String indicatorLabel,
     *  String array batteryNames, and String array portNames in that order
    */
   return [lightOn, indicatorLabel, batteryNames, portNames];
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
        $('#bombIndicatorLight').removeClass("lightOn");
        $('#bombIndicatorLight').addClass("lightOff");
    }

    for(i=0;i<5;i++){
        if(Math.random()<.5){
            serialNumber[i]=Math.floor(Math.random()*10);
        }
        else{
            serialNumber[i]=String.fromCharCode(Math.floor(Math.random()*26)+65);
        }
    }
    serialNumber[5]=Math.floor(Math.random()*10);
    //Forces the last digit to be a ditgit

    $('#bombSerialNumber').html("S/N: " + serialNumber[0] + serialNumber[1] + serialNumber[2] + serialNumber[3] + serialNumber[4] + serialNumber[5]);

    indicatorLabel = allIndicatorLabels[Math.floor(Math.random()*allIndicatorLabels.length)];
    $('#bombIndicatorLabel').text(indicatorLabel);
}

$(document).ready(function(){//Runs everything
    fillBomb();
});