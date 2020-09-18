let clockTicks=[0,5,0,0];

let tickDown=function(){
    wait(1000);
    clockTicks[4]--;
    updateClock(clockTicks,3);
};

let updateClock=function(clock,pos){
    if(clock[pos]<0){
        clock[pos]=9;
        clock[pos-1]--;
        updateClock(clock,pos-1);
    }
};

let start=function(){
    while(clockTicks[0]!=0 && clockTicks[1]!=0 && clockTicks[2]!=0 && clockTicks[3]!=0){
        tickDown();
    }
    
}