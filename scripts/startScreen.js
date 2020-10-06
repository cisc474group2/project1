var clockTicks = [0, 3, 0, 0];
var userModules = 4;
var userStrikes = 3;

document.getElementById("startTimeLeft").addEventListener("click", function(){
    if(clockTicks[0] == 0 && clockTicks[1] == 0){
        return;
    }
    else if(clockTicks[0] == 1){
        clockTicks[0] = 0;
        clockTicks[1] = 9;
        clockTicks[2] = 3;
        clockTicks[3] = 0;
    }
    else if(clockTicks[2] == 0){
        clockTicks[2] = 3;
        clockTicks[1]--;
    }
    else{
        clockTicks[2] = 0;
    }
    updateStartClock();
});

document.getElementById("startTimeRight").addEventListener("click", function(){
    if(clockTicks[0] == 1){
        return;
    }
    if(clockTicks[1] == 9 && clockTicks[2] == 3){
        clockTicks[0] = 1;
        clockTicks[1] = 0;
        clockTicks[2] = 0;
        clockTicks[3] = 0;
    }
    else if(clockTicks[2] == 0){
        clockTicks[2] = 3;
    }
    else{
        clockTicks[1]++;
        clockTicks[2] = 0;
    }
    updateStartClock();
});

document.getElementById("startModuleNumLeft").addEventListener("click", function(){
    if(userModules == 2){
        return;
    }else{
        userModules--;
    }
    updateStartModules();
});

document.getElementById("startModuleNumRight").addEventListener("click", function(){
    if(userModules == 4){
        return;
    }else{
        userModules++;
    }
    updateStartModules();
});

document.getElementById("hardcoreOn").addEventListener("click", function(){
    document.getElementById('hardcoreOn').classList.add('selected');
    document.getElementById('hardcoreOff').classList.remove('selected');
    userStrikes = 1;
});

document.getElementById("hardcoreOff").addEventListener("click", function(){
    document.getElementById('hardcoreOff').classList.add('selected');
    document.getElementById('hardcoreOn').classList.remove('selected');
    userStrikes = 3;
});

let updateStartClock = function(){
    document.getElementById("timeText").innerHTML = "Time: " + clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);
}

let updateStartModules = function(){
    document.getElementById("moduleNumber").innerHTML = "Modules: " + userModules.toString(10);
}

updateStartClock();
updateStartModules();