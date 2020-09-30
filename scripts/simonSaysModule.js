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
}

let playSequence=function(){
    seqPos=0;
    while(seqPos<length){
        corPos=0;
        setInterval(showColor(sequence[seqPos]),5000);

    }
}

let showColor=function(light){
    switch(light){
        case 0:

        case 1:

        case 2:

        case 3:
            
    }
}

let goodClick=function(){
    corPos++;
    setAnswer();
    if(corPos==seqPos){
        seqPos++;
    }

}

let badClick=funtion(){
    addStrike();
    setSequence();
    seqPos=0;
    corPos=0;
}

let setAnswer=function(correct){
    switch(correct){
        case 0:

        case 1:

        case 2:

        case 3:

    }
}