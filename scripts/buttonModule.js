var buttonLabels = ['Abort','Detonate','Hold','Stop'];
var colors = ['blue', 'white', 'yellow', 'red', 'green'];

$(document).ready(function(){
    var button = document.getElementById('buttonModuleButton');

    var buttonLabel = buttonLabels[Math.floor(Math.random()*buttonLabels.length)];
    var buttonColor = colors[Math.floor(Math.random()*colors.length)];
    var stripColor = colors[Math.floor(Math.random()*colors.length)];

    $('#buttonModuleButton').addClass(buttonColor);
    $('#buttonModuleButton').text(buttonLabel);
    $('#buttonModuleLightStrip').addClass(stripColor);

    var timeDown, timeUp=getTime();
    var wonModule=false;

    var goodPush=function(){
        /**
         * Returns true if the button push wins the module
         */
        var bombInfo = getBombInfo(); 

        var indicatorLightOn = bombInfo[0];
        var indicatorLabel = bombInfo[1];
        var numBatteries = bombInfo[2].length;

        if (buttonColor == 'blue' && buttonLabel == 'Abort') { //Rule 1
            return releaseHeld();
        }
        else if (buttonLabel == 'Detonate' && numBatteries > 1) { //Rule 2
            return quickClick();
        }
        else if (buttonColor == 'white' && indicatorLight && indicatorLabel=='CAR'){ //Rule 3
            return releaseHeld();
        }
        else if (numBatteries > 2 && indicatorLight && indicatorLabel=='FRK'){ //Rule 4
            return quickClick();
        }
        else if (buttonColor == 'red' && buttonLabel == 'Hold') { //Rule 6
            return quickClick();
        }
        else //Rule 5 and 7
        {
            return releaseHeld();
        }
    }

    var quickClick=function(){ 
        /* 
        Returns true if button click took less than 2 seconds
        */
        return (timeUp[0]==timeDown[0] && 
                timeUp[1]==timeDown[1] && 
                timeUp[2]==timeDown[2] && 
               (timeUp[3]==timeDown[3] || timeUp[3]==timeDown[3]-1) );
    };

    var releaseHeld=function(){
        /*
        returns true if the number checkfor is in any place on the clock
        */
        var checkfor;
        switch(stripColor){
            case 'blue':
                checkfor = 4;
                break;
            case 'yellow':
                checkfor = 5;
                break;
            default:
                checkfor = 1;
        }
        return (timeUp[0]==checkfor || 
                timeUp[1]==checkfor || 
                timeUp[2]==checkfor || 
                timeUp[3]==checkfor );
    }

    button.addEventListener("click", function(){
        console.log(goodPush());
        if (!goodPush()){ //Add Strike
            addStrike();
            $('#buttonModuleLight').removeClass("lightOff");
            $('#buttonModuleLight').addClass("red");
        } else if (!wonModule){ //Game Won
            wonModule = true;
            addSuccess();
            $('#buttonModuleLight').removeClass("lightOff");
            $('#buttonModuleLight').removeClass("red");
            $('#buttonModuleLight').addClass("lightOn");
        }
    });
    button.addEventListener("mousedown", function(){
        timeDown = [ getTime()[0], getTime()[1], getTime()[2], getTime()[3] ];
    });
});