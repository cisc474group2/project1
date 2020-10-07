let length;
let sequence=[];
let seqPos;
let corPos;
let simonsimonIntervalID;

let startSimon=function(){
    document.getElementById("blueSimonClick").addEventListener("click", blueLight);
    document.getElementById("redSimonClick").addEventListener("click", redLight);
    document.getElementById("yellowSimonClick").addEventListener("click", yellowLight);
    document.getElementById("greenSimonClick").addEventListener("click", greenLight);
    setSequence();
}

let setSequence=function(){
    length=Math.floor(Math.random()*10)%3+3;
    let i=0;
    for(i=0;i<length;i++){
        sequence[i]=Math.floor(Math.random()*10)%4;
    }
    playSequence();
}

let playSequence=function(){
    seqPos=1;
    corPos=0;
    setAnswer(sequence[corPos]);
    //console.log(seqPos+" "+length);
    simonIntervalID=setInterval(showColor,5000);
}

let showColor=function(){
    let i=0;
    let showID=setInterval(function(){
        switch(sequence[i]){
            case 0:
                blueLight();
                break;
            case 1:
                redLight();
                break;
            case 2:
                yellowLight();
                break;
            case 3:
                greenLight();
                break;
        }
        i++;
        if(i==seqPos){
            clearInterval(showID);
        }
    },1000);
}

let goodClick=function(){
    //console.log("good");
    //console.log(corPos+" "+seqPos);
    corPos++;
    if(corPos==seqPos && seqPos!=length){
        seqPos++;
        corPos=0;
    }
    else if(corPos==seqPos && seqPos==length){
        addSuccess();
        document.getElementById("blueSimonClick").removeEventListener("click", blueLight);
        document.getElementById("redSimonClick").removeEventListener("click", redLight);
        document.getElementById("yellowSimonClick").removeEventListener("click", yellowLight);
        document.getElementById("greenSimonClick").removeEventListener("click", greenLight);
        clearInterval(simonIntervalID);
        return;
    }
    setAnswer(sequence[corPos]);

}

let badClick=function(){
    //console.log("bad");
    addStrike();
    clearInterval(simonIntervalID);
    seqPos=1;
    corPos=0;
    setSequence();
}

let setAnswer=function(correct){
    document.getElementById("blueSimonClick").removeEventListener("click", badClick);
    document.getElementById("redSimonClick").removeEventListener("click", badClick);
    document.getElementById("yellowSimonClick").removeEventListener("click", badClick);
    document.getElementById("greenSimonClick").removeEventListener("click", badClick);
    document.getElementById("blueSimonClick").removeEventListener("click", goodClick);
    document.getElementById("redSimonClick").removeEventListener("click", goodClick);
    document.getElementById("yellowSimonClick").removeEventListener("click", goodClick);
    document.getElementById("greenSimonClick").removeEventListener("click", goodClick);
    switch(correct){
        case 0:
            if(checkSerial()){
                if(strikes==0){
                    redGood();
                }
                else if(strikes==1){
                    greenGood();
                }
                else{
                    redGood();
                }
            }
            else{
                if(strikes==0){
                    yellowGood();
                }
                else if(strikes==1){
                    blueGood();
                }
                else{
                    greenGood();
                }
            }
            
            break;
        case 1:
            if(checkSerial()){
                if(strikes==0){
                    blueGood();
                }
                else if(strikes==1){
                    yellowGood();
                }
                else{
                    greenGood();
                }
            }
            else{
                if(strikes==0){
                    blueGood();
                }
                else if(strikes==1){
                    redGood();
                }
                else{
                    yellowGood();
                }
            }
            
            break;
        case 2:
            if(checkSerial()){
                if(strikes==0){
                    greenGood();
                }
                else if(strikes==1){
                    redGood();
                }
                else{
                    blueGood();
                }
            }
            else{
                if(strikes==0){
                    redGood();
                }
                else if(strikes==1){
                    greenGood();
                }
                else{
                    redGood();
                }
            }
            
            break;
        case 3:
            if(checkSerial()){
                if(strikes==0){
                    yellowGood();
                }
                else if(strikes==1){
                    blueGood();
                }
                else{
                    yellowGood();
                }
            }
            else{
                if(strikes==0){
                    greenGood();
                }
                else if(strikes==1){
                    yellowGood();
                }
                else{
                    blueGood();
                }
            }
            
            break;
    }
}

let redGood=function(){
    console.log("red");
    document.getElementById("blueSimonClick").addEventListener("click", badClick);
    document.getElementById("redSimonClick").addEventListener("click", goodClick);
    document.getElementById("yellowSimonClick").addEventListener("click", badClick);
    document.getElementById("greenSimonClick").addEventListener("click", badClick);
}

let blueGood=function(){
    console.log("blue");
    document.getElementById("blueSimonClick").addEventListener("click", goodClick);
    document.getElementById("redSimonClick").addEventListener("click", badClick);
    document.getElementById("yellowSimonClick").addEventListener("click", badClick);
    document.getElementById("greenSimonClick").addEventListener("click", badClick);
}

let yellowGood=function(){
    console.log("yellow");
    document.getElementById("blueSimonClick").addEventListener("click", badClick);
    document.getElementById("redSimonClick").addEventListener("click", badClick);
    document.getElementById("yellowSimonClick").addEventListener("click", goodClick);
    document.getElementById("greenSimonClick").addEventListener("click", badClick);
}

let greenGood=function(){
    console.log("green");
    document.getElementById("blueSimonClick").addEventListener("click", badClick);
    document.getElementById("redSimonClick").addEventListener("click", badClick);
    document.getElementById("yellowSimonClick").addEventListener("click", badClick);
    document.getElementById("greenSimonClick").addEventListener("click", goodClick);
}

let blueLight=function(){
    document.getElementById("blueSimonTop").style.borderBottomColor="rgb(0, 191, 255)";
    document.getElementById("blueSimonBottom").style.borderTopColor="rgb(0, 191, 255)";
    setTimeout(function(){
        document.getElementById("blueSimonTop").style.borderBottomColor="blue";
        document.getElementById("blueSimonBottom").style.borderTopColor="blue";
    },1000);
}

let redLight=function(){
    document.getElementById("redSimonTop").style.borderBottomColor="red";
    document.getElementById("redSimonBottom").style.borderTopColor="red";
    setTimeout(function(){
        document.getElementById("redSimonTop").style.borderBottomColor="rgb(206, 7, 7)";
        document.getElementById("redSimonBottom").style.borderTopColor="rgb(206, 7, 7)";
    },1000);
}

let yellowLight=function(){
    document.getElementById("yellowSimonTop").style.borderBottomColor="rgb(250, 250, 119)";
    document.getElementById("yellowSimonBottom").style.borderTopColor="rgb(250, 250, 119)";
    setTimeout(function(){
        document.getElementById("yellowSimonTop").style.borderBottomColor="rgb(255, 224, 0 )";
        document.getElementById("yellowSimonBottom").style.borderTopColor="rgb(255, 224, 0 )";
    },1000);
}

let greenLight=function(){
    document.getElementById("greenSimonTop").style.borderBottomColor="rgb(128, 253, 128)";
    document.getElementById("greenSimonBottom").style.borderTopColor="rgb(128, 253, 128)";
    setTimeout(function(){
        document.getElementById("greenSimonTop").style.borderBottomColor="green";
        document.getElementById("greenSimonBottom").style.borderTopColor="green";
    },1000);
}

let checkSerial=function(){
    for(i=0;i<6;i++){
        if(serialNumber[i]=="A" || serialNumber[i]=="E" || serialNumber[i]=="I" || serialNumber[i]=="O" || serialNumber[i]=="U"){
            return true;
        }
    }
    return false;
}

startSimon();
