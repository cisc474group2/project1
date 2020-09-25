clockTicks=[0,5,0,0];
strikes=0;
document.getElementById("innerBorder").innerHTML=clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);

let tickDown=function(){
    clockTicks[3]--;
    updateClock(clockTicks,3);
    document.getElementById("innerBorder").innerHTML=clockTicks[0].toString(10)+clockTicks[1].toString(10)+":"+clockTicks[2].toString(10)+clockTicks[3].toString(10);
    if(clockTicks[0]==0 && clockTicks[1]==0 && clockTicks[2]==0 && clockTicks[3]==0){
        //lose goes here
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

let start=function(){ 
    setInterval(tickDown, 1000);
}

let addStrike=function(){
    strikes++;
    if(strikes==1){
        document.getElementById("upperSegment").innerHTML="X";
    }
    else if(strikes==2){
        document.getElementById("upperSegment").innerHTML="X X";
    }
    else{
        //document.getElementById("upperSegment").innerHTML="X X X";
        //lose goes here
    }
}

start();

/*document.addEventListener("click", function(){
    addStrike();
})*/