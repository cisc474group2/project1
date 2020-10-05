var clockTicks = [0, 3, 0, 0];

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

    else if(clockTicks[0] == 1){
        clockTicks[0] == 0;
        clockTicks[1] == 9;
        clockTicks[2] == 3;
        clockTicks[3] == 0;
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

let updateStartClock = function(){
    document.getElementById("timeText").innerHTML = clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);
}

updateStartClock();