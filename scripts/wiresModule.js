$(document).ready(function(){
  
    //var serialNumber = Math.floor((Math.random() * 999999) + 100000);
    var odd = new Boolean(serialNumber[5]%2===1);
    var numWires = Math.floor((Math.random() * 4) + 3);
    //$('#wiresUpperSegmentHeader').html("Serial Number: " + serialNumber[0] + serialNumber[1] + serialNumber[2] + serialNumber[3] + serialNumber[4] + serialNumber[5]);

    let wireClasses = ['redWire', 'whiteWire', 'blueWire', 'yellowWire', 'blackWire'];
    let wireColors = [];

    if(numWires==3){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }else if(numWires==4){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }else if(numWires==5){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }else if(numWires==6){
        $('.wire-module').html("<div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div><div class=\"wire\"></div>");
    }

    var list = document.getElementsByClassName('wire');

    for (var i = 0; i < numWires; i++) {
        wireColors.push(wireClasses[Math.floor((Math.random() * 5))]);
        $(list[i]).addClass(wireColors[i]);
    }


    if(numWires==3){
        //if there are no red wires, cut the second wire
        if(!wireColors.includes('redWire')){
            $(list[1]).addClass('correct');
        }
        //otherwise, if the last wire is white, cut the last wire
        else if(wireColors[2] === 'whiteWire'){
            $(list[2]).addClass('correct');
        }
        //Otherwise, if there is more than one blue wire, cut the last blue wire
        else if((wireColors.filter(color => color === 'blueWire')).length > 1){
            for(var i=numWires-1; i>=0; i--){
                if(wireColors[i] === 'blueWire'){
                    $(list[i]).addClass('correct');
                    break;
                }
            }
        }
        //Otherwise, cut the last wire
        else{
            $(list[2]).addClass('correct');
        }
    }else if(numWires==4){
        //If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.
        if(((wireColors.filter(color => color === 'redWire')).length > 1) && (odd===true)){
            for(var i=numWires-1; i>=0; i--){
                if(wireColors[i] === 'redWire'){
                    $(list[i]).addClass('correct');
                    break;
                }
            }
        }
        //Otherwise, if the last wire is yellow and there are no red wires, cut the first wire.
        else if((!wireColors.includes('redWire')) && (wireColors[3] === 'yellowWire')){
            $(list[0]).addClass('correct');
        }
        //Otherwise, if there is exactly one blue wire, cut the first wire.
        else if(wireColors.filter(color => color === 'blueWire').length == 1){
            $(list[0]).addClass('correct');
        }
        //Otherwise, if there is more than one yellow wire, cut the last wire.
        else if(wireColors.filter(color => color === 'yellowWire').length > 1){
            $(list[3]).addClass('correct');
        }
        //Otherwise, cut the second wire.
        else{
            $(list[1]).addClass('correct');
        }
    }else if(numWires==5){
        //If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.
        if((wireColors[4] === 'blackWire') && (odd===true)){
            $(list[3]).addClass('correct');
        }
        //Otherwise, if there is exactly one red wire and there is more than one yellow wire, cut the first wire.
        else if((wireColors.filter(color => color === 'redWire').length == 1) && (wireColors.filter(color => color === 'yellowWire').length > 1)){
            $(list[0]).addClass('correct');
        }
        //Otherwise, if there are no black wires, cut the second wire.
        else if(!wireColors.includes('blackWire')){
            $(list[1]).addClass('correct');
        }
        //Otherwise, cut the first wire.
        else{
            $(list[0]).addClass('correct');
        }
    }else if(numWires==6){
        //If there are no yellow wires and the last digit of the serial number is odd, cut the third wire.
        if(!wireColors.includes('yellowWire') && (odd===true)){
            $(list[2]).addClass('correct');
        }
        //Otherwise, if there is exactly one yellow wire and there is more than one white wire, cut the fourth wire.
        else if((wireColors.filter(color => color === 'yellowWire').length == 1) && (wireColors.filter(color => color === 'whiteWire').length > 1)){
            $(list[3]).addClass('correct');
        }
        //Otherwise, if there are no red wires, cut the last wire.
        else if(!wireColors.includes('redWire')){
            $(list[5]).addClass('correct');
        }
        //Otherwise, cut the fourth wire.
        else{
            $(list[3]).addClass('correct');
        }
    }



    $('.wire').click(function(){
        $(this).addClass('cut-wire').removeClass('redWire').removeClass('whiteWire').removeClass('blueWire').removeClass('yellowWire').removeClass('blackWire');
        if(this.classList.contains('correct')){
            document.getElementById('indicatorLight').classList.remove("red");
            document.getElementById('indicatorLight').classList.add("lightOn");
            addSuccess();
        }else{
            document.getElementById('indicatorLight').classList.add("red");
            addStrike();
        }
    });
    
});
