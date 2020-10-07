document.getElementById("clockInnerBorder").innerHTML=clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);

var clockIntervalID;

let getTime=function(){
    return clockTicks;
}

let tickDown=function(){
    //if (stopTheClock == 0) {
        clockTicks[3]--;
        updateClock(clockTicks,3);
        document.getElementById("clockInnerBorder").innerHTML=clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);
        timingChecker();
        blinkLights();
        if(clockTicks[0]==0 && clockTicks[1]==0 && clockTicks[2]==0 && clockTicks[3]==0){
            blinkLightOn = -1;
            cleanUpClock();
            //lose goes here
        }
    //}
};

let updateClock=function(clock,pos){
    if(clock[pos]<0){
        if(pos==2){
            clock[pos]=5;
            clock[pos-1]--;
        }
        else if(pos==0){
            let i=0;
            for(i=0;i<4;i++){
                clock[i]=0;
            }
            pos=1;
        }
        else{
            clock[pos]=9;
            clock[pos-1]--;
        }
        updateClock(clock,pos-1);
    }
};

let clockStart=function(){ 
    clockIntervalID=setInterval(tickDown, 1000);
};

let addStrike=function(){
    strikes++;
    errorBuzzerSound.play();
    if (strikes < numOfAllowedStrikes) {
        document.getElementById("clockUpperSegment").innerHTML += " X";
    }
    else{
        //document.getElementById("upperSegment").innerHTML="X X X";
        //lose goes here
        cleanUpClock();
    }
};

let cleanUpClock = function() {
    console.log("stop Clock");
    alarmAudio.pause();
    clockTickTockAudio.pause();
    clearInterval(clockIntervalID);
    clearInterval(simonIntervalID);
    gameLoss();
};

let timingChecker=function() {
    if (clockTicks[0] == 0 & clockTicks[1] == 0 & clockTicks[2] == 4 & clockTicks[3] == 5) {
        alarmAudio.play();
    }
    else if (clockTicks[0] == 0 & clockTicks[1] == 0 & clockTicks[2] == 2 && clockTicks[3] == 9) {
        blinkLightOn = 0;
        alarmAudio.play();
    }
    if (clockTicks[0] == 0 & clockTicks[1] == 0 & clockTicks[2] == 5 & clockTicks[3] == 9) {
        blinkLightOn = 0;
    }
};


let blinkLights=function() {
    blinkLightCounter =  (blinkLightCounter + 1) % 2;
    if (blinkLightCounter == 0 && blinkLightOn == 0) {
        blinkLightOn = 1;
        blobj.classList.add('warningRed');
    }
    else if (blinkLightCounter == 0 && blinkLightOn == 1) {
        blinkLightOn = 0;
        blobj.classList.remove('warningRed');
    }
};

clockStart();

/*document.addEventListener("click", function(){
    addStrike();
})*/