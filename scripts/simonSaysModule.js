let length;
let sequence=[];
let seqPos;
let corPos;
let setSequence=function(){
    length=int(Math.random*10)%3+3;
    let i=0;
    for(i;i<length;i++){
        sequence[i]=int(Math.random*10)%4;
    }
    playSequence();
}

let playSequence=function(){
    seqPos=0;
    setAnswer(sequence[0]);
    while(seqPos<length){
        setInterval(showColor(),5000);

    }
}

let showColor=function(){
    let i=0;
    for(i=0;i<seqPos;i++){
        switch(sequence[i]){
            case 0:
                document.getElementById("blueSimon").style.borderColor="rgb(0, 191, 255)";
                setInterval(document.getElementById("blueSimon").style.borderColor="blue",1000);
                break;
            case 1:
                document.getElementById("redSimon").style.borderColor="red";
                setInterval(document.getElementById("redSimon").style.borderColor= "rgb(206, 7, 7)",1000);
                break;
            case 2:
                document.getElementById("yellowSimon").style.borderColor="rgb(250, 250, 98)";
                setInterval(document.getElementById("yellowSimon").style.borderColor="yellow",1000);
                break;
            case 3:
                document.getElementById("greenSimon").style.borderColor="rgb(128, 253, 128)";
                setInterval(document.getElementById("greenSimon").style.borderColor="green",1000);
                break;
        }
    }
}

let goodClick=function(){
    corPos++;
    setAnswer(sequence[corPos]);
    if(corPos==seqPos){
        seqPos++;
        corPos=0;
        setAnswer(sequence[0]);
    }

}

let badClick=function(){
    addStrike();
    setSequence();
    seqPos=0;
    corPos=0;
}

let setAnswer=function(correct){
    switch(correct){
        case 0:
            document.getElementById(blueSimon).addEventListener("click", goodClick());
            document.getElementById(redSimon).addEventListener("click", badClick());
            document.getElementById(yellowSimon).addEventListener("click", badClick());
            document.getElementById(greenSimon).addEventListener("click", badClick());
            break;
        case 1:
            document.getElementById(blueSimon).addEventListener("click", badClick());
            document.getElementById(redSimon).addEventListener("click", goodClick());
            document.getElementById(yellowSimon).addEventListener("click", badClick());
            document.getElementById(greenSimon).addEventListener("click", badClick());
            break;
        case 2:
            document.getElementById(blueSimon).addEventListener("click", badClick());
            document.getElementById(redSimon).addEventListener("click", badClick());
            document.getElementById(yellowSimon).addEventListener("click", goodClick());
            document.getElementById(greenSimon).addEventListener("click", badClick());
            break;
        case 3:
            document.getElementById(blueSimon).addEventListener("click", badClick());
            document.getElementById(redSimon).addEventListener("click", badClick());
            document.getElementById(yellowSimon).addEventListener("click", badClick());
            document.getElementById(greenSimon).addEventListener("click", goodClick());
            break;
    }
}


document.addEventListener("click", function(){
    document.getElementById("blueSimon").style.border-color="rgb(0, 191, 255)";
    badClick();
})
setSequence();