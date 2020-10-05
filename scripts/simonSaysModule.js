let length;
let sequence=[];
let seqPos;
let corPos;
let intervalID;

let startSimon=function(){
    document.getElementById("blueSimonTop").addEventListener("click", blueClick);
    document.getElementById("redSimonTop").addEventListener("click", redClick);
    document.getElementById("yellowSimonTop").addEventListener("click", yellowClick);
    document.getElementById("greenSimonTop").addEventListener("click", greenClick);
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
    console.log(seqPos+" "+length);
    intervalID=setInterval(showColor,5000);
}

let showColor=function(){
    let i=0;
    for(i=0;i<seqPos;i++){
        switch(sequence[i]){
            case 0:
                document.getElementById("blueSimonTop").style.borderBottomColor="rgb(0, 191, 255)";
                document.getElementById("blueSimonBottom").style.borderTopColor="rgb(0, 191, 255)";
                setTimeout(function(){
                    document.getElementById("blueSimonTop").style.borderBottomColor="blue";
                    document.getElementById("blueSimonBottom").style.borderTopColor="blue";
                },1000);
                break;
            case 1:
                document.getElementById("redSimonTop").style.borderBottomColor="red";
                document.getElementById("redSimonBottom").style.borderTopColor="red";
                setTimeout(function(){
                    document.getElementById("redSimonTop").style.borderBottomColor="rgb(206, 7, 7)";
                    document.getElementById("redSimonBottom").style.borderTopColor="rgb(206, 7, 7)";
                },1000);
                break;
            case 2:
                document.getElementById("yellowSimonTop").style.borderBottomColor="rgb(250, 250, 98)";
                document.getElementById("yellowSimonBottom").style.borderTopColor="rgb(250, 250, 98)";
                setTimeout(function(){
                    document.getElementById("yellowSimonTop").style.borderBottomColor="rgb(255, 224, 0 )";
                    document.getElementById("yellowSimonBottom").style.borderTopColor="rgb(255, 224, 0 )";
                },1000);
                break;
            case 3:
                document.getElementById("greenSimonTop").style.borderBottomColor="rgb(128, 253, 128)";
                document.getElementById("greenSimonBottom").style.borderTopColor="rgb(128, 253, 128)";
                setTimeout(function(){
                    document.getElementById("greenSimonTop").style.borderBottomColor="green";
                    document.getElementById("greenSimonBottom").style.borderTopColor="green";
                },1000);
                break;
        }
    }
}

let goodClick=function(){
    console.log("good");
    console.log(corPos+" "+seqPos);
    corPos++;
    if(corPos==seqPos && seqPos!=length){
        seqPos++;
        corPos=0;
    }
    else{
        addSuccess();
        document.getElementById("blueSimonTop").removeEventListener("click", blueClick);
        document.getElementById("redSimonTop").removeEventListener("click", redClick);
        document.getElementById("yellowSimonTop").removeEventListener("click", yellowClick);
        document.getElementById("greenSimonTop").removeEventListener("click", greenClick);
        clearInterval(intervalID);
        return;
    }
    setAnswer(sequence[corPos]);

}

let badClick=function(){
    console.log("bad");
    addStrike();
    clearInterval(intervalID);
    seqPos=1;
    corPos=0;
    setSequence();
}

let blueClick=function(){
    document.getElementById("blueSimonTop").style.borderBottomColor="rgb(0, 191, 255)";
    document.getElementById("blueSimonBottom").style.borderTopColor="rgb(0, 191, 255)";
    setTimeout(function(){
        document.getElementById("blueSimonTop").style.borderBottomColor="blue";
        document.getElementById("blueSimonBottom").style.borderTopColor="blue";
    },1000);
}

let redClick=function(){
    document.getElementById("redSimonTop").style.borderBottomColor="red";
    document.getElementById("redSimonBottom").style.borderTopColor="red";
    setTimeout(function(){
        document.getElementById("redSimonTop").style.borderBottomColor="rgb(206, 7, 7)";
        document.getElementById("redSimonBottom").style.borderTopColor="rgb(206, 7, 7)";
    },1000);
}

let yellowClick=function(){
    document.getElementById("yellowSimonTop").style.borderBottomColor="rgb(250, 250, 98)";
    document.getElementById("yellowSimonBottom").style.borderTopColor="rgb(250, 250, 98)";
    setTimeout(function(){
        document.getElementById("yellowSimonTop").style.borderBottomColor="rgb(255, 224, 0 )";
        document.getElementById("yellowSimonBottom").style.borderTopColor="rgb(255, 224, 0 )";
    },1000);
}

let greenClick=function(){
    document.getElementById("greenSimonTop").style.borderBottomColor="rgb(128, 253, 128)";
    document.getElementById("greenSimonBottom").style.borderTopColor="rgb(128, 253, 128)";
    setTimeout(function(){
        document.getElementById("greenSimonTop").style.borderBottomColor="green";
        document.getElementById("greenSimonBottom").style.borderTopColor="green";
    },1000);
}

let setAnswer=function(correct){
    document.getElementById("blueSimonTop").removeEventListener("click", badClick);
    document.getElementById("redSimonTop").removeEventListener("click", badClick);
    document.getElementById("yellowSimonTop").removeEventListener("click", badClick);
    document.getElementById("greenSimonTop").removeEventListener("click", badClick);
    document.getElementById("blueSimonTop").removeEventListener("click", goodClick);
    document.getElementById("redSimonTop").removeEventListener("click", goodClick);
    document.getElementById("yellowSimonTop").removeEventListener("click", goodClick);
    document.getElementById("greenSimonTop").removeEventListener("click", goodClick);
    switch(correct){
        case 0:
            if(strikes==0){
                redGood();
            }
            else if(strikes==1){
                greenGood();
            }
            else{
                redGood();
            }
            
            break;
        case 1:
            if(strikes==0){
                blueGood();
            }
            else if(strikes==1){
                yellowGood();
            }
            else{
                greenGood();
            }
            
            break;
        case 2:
            
            yellowGood();
            
            break;
        case 3:
            
            greenGood();
            
            break;
    }
}

let redGood=function(){
    console.log("red");
    document.getElementById("blueSimonTop").addEventListener("click", badClick);
    document.getElementById("redSimonTop").addEventListener("click", goodClick);
    document.getElementById("yellowSimonTop").addEventListener("click", badClick);
    document.getElementById("greenSimonTop").addEventListener("click", badClick);
}

let blueGood=function(){
    console.log("blue");
    document.getElementById("blueSimonTop").addEventListener("click", goodClick);
    document.getElementById("redSimonTop").addEventListener("click", badClick);
    document.getElementById("yellowSimonTop").addEventListener("click", badClick);
    document.getElementById("greenSimonTop").addEventListener("click", badClick);
}

let yellowGood=function(){
    console.log("yellow");
    document.getElementById("blueSimonTop").addEventListener("click", badClick);
    document.getElementById("redSimonTop").addEventListener("click", badClick);
    document.getElementById("yellowSimonTop").addEventListener("click", goodClick);
    document.getElementById("greenSimonTop").addEventListener("click", badClick);
}

let greenGood=function(){
    console.log("green");
    document.getElementById("blueSimonTop").addEventListener("click", badClick);
    document.getElementById("redSimonTop").addEventListener("click", badClick);
    document.getElementById("yellowSimonTop").addEventListener("click", badClick);
    document.getElementById("greenSimonTop").addEventListener("click", goodClick);
}


/*document.addEventListener("click", function(){
    document.getElementById("document.getElementById("blueSimonTop")").style.borderColor);
    badClick();
});*/

startSimon();
