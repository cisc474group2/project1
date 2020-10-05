document.getElementById("clockInnerBorder").innerHTML=clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);

let tickDown=function(){
    if (stopTheClock == 0) {
        clockTicks[3]--;
        updateClock(clockTicks,3);
        document.getElementById("clockInnerBorder").innerHTML=clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);
        alarmAudioChecker();
        if(clockTicks[0]==0 && clockTicks[1]==0 && clockTicks[2]==0 && clockTicks[3]==0 && stopTheClock == 0){
            cleanUpClock()
            //lose goes here
        }
    }
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
    setInterval(tickDown, 1000);
}

let addStrike=function(){
    strikes++;
    errorBuzzerSound.play();
    if(strikes==1){
        document.getElementById("clockUpperSegment").innerHTML="X";
    }
    else if(strikes==2){
        document.getElementById("clockUpperSegment").innerHTML="X X";
    }
    else{
        //document.getElementById("upperSegment").innerHTML="X X X";
        //lose goes here
        cleanUpClock();
    }
}

let cleanUpClock = function() {
    console.log("stop Clock");
    alarmAudio.pause();
    clockTickTockAudio.pause();
    stopTheClock = 1;
    gameLoss();
}

let alarmAudioChecker=function() {
    if (clockTicks[0] == 0 & clockTicks[1] == 0 & clockTicks[2] == 4 & clockTicks[3] == 5) {
        alarmAudio.play();
    }
    else if (clockTicks[0] == 0 & clockTicks[1] == 0 & clockTicks[2] == 2 && clockTicks[3] == 9) {
        alarmAudio.play();
    }
}

clockStart();

/*document.addEventListener("click", function(){
    addStrike();
})*/