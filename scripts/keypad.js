var firstColumn = ["hoop", "TInsideA", "lambda", "awkwardH", "squidKnife", "fancyH", "backwardsC"];
var secondColumn = ["backwardsE2D", "hoop", "backwardsC", "looper", "blankStar", "fancyH", "upsideDownQMark"];
var thirdColumn = ["copyright", "noseEye", "looper", "xi", "broken3", "lambda", "blankStar"];
var fourthColumn = ["six", "backwardsP", "tB", "squidKnife", "xi", "upsideDownQMark", "smiley"];
var fifthColumn = ["candles", "smiley", "tB", "C", "backwardsP", "worm", "filledStar"];
var sixthColumn = ["six", "backwardsE2D", "railroad", "ae", "candles", "hSmiley", "omega"];

var listOfColumns = [firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn];
var selectedColumn = listOfColumns[Math.floor(Math.random() * listOfColumns.length)];

var firstIndex = Math.floor(Math.random() * 3);
var secondIndex = Math.ceil(Math.random() * (4 - firstIndex) + firstIndex);
var thirdIndex = Math.ceil(Math.random() * (5 - secondIndex) + secondIndex);
var fourthIndex = Math.ceil(Math.random() * (6 - thirdIndex) + thirdIndex);

var firstSymbol = selectedColumn[firstIndex];
var secondSymbol = selectedColumn[secondIndex];
var thirdSymbol = selectedColumn[thirdIndex];
var fourthSymbol = selectedColumn[fourthIndex];

var symbols = [firstSymbol, secondSymbol, thirdSymbol, fourthSymbol];


var buttons = ["TopLeftButton", "TopRightButton", "BottomLeftButton", "BottomRightButton"];

var firstButtonIndex = Math.floor(Math.random() * 3);
var firstButtonID = buttons[firstButtonIndex];
buttons.splice(firstButtonIndex, 1);

var secondButtonIndex = Math.floor(Math.random() * 2);
var secondButtonID = buttons[secondButtonIndex];
buttons.splice(secondButtonIndex, 1);

var thirdButtonIndex = Math.floor(Math.random() * 1);
var thirdButtonID = buttons[thirdButtonIndex];
buttons.splice(thirdButtonIndex, 1);


fourthButtonID = buttons[0];


var firstButton = document.getElementById(firstButtonID);
var firstImage = '<img src="../images/' + firstSymbol + '.png" />';
firstButton.innerHTML = firstImage;

var secondButton = document.getElementById(secondButtonID);
var secondImage = '<img src="../images/' + secondSymbol + '.png" />';
secondButton.innerHTML = secondImage;

var thirdButton = document.getElementById(thirdButtonID);
var thirdImage = '<img src="../images/' + thirdSymbol + '.png" />';
thirdButton.innerHTML = thirdImage;

var fourthButton = document.getElementById(fourthButtonID);
var fourthImage = '<img src="../images/' + fourthSymbol + '.png" />';
fourthButton.innerHTML = fourthImage;

var count = 0;
firstButton.addEventListener("click", function(){
    if(count == 0){
        firstButton.style.backgroundColor = "green";
        this.disabled = true;
        count++;
    }
});

secondButton.addEventListener("click", function(){
    if(count == 1){
        secondButton.style.backgroundColor = "green";
        count++;
    }
    else{
        secondButton.style.backgroundColor = "red";
        firstButton.disabled = true;
        thirdButton.disabled = true;
        fourthButton.disabled = true;
    }
    this.disabled = true;
    
});

thirdButton.addEventListener("click", function(){
    if(count == 2){
        thirdButton.style.backgroundColor = "green";
        count++;
    }
    else{
        thirdButton.style.backgroundColor = "red";
        firstButton.disabled = true;
        secondButton.disabled = true;
        fourthButton.disabled = true;
    }
    this.disabled = true;
});

fourthButton.addEventListener("click", function(){
    if(count == 3){
        fourthButton.style.backgroundColor = "green";
        count++;
    }
    else{
        fourthButton.style.backgroundColor = "red";
        firstButton.disabled = true;
        secondButton.disabled = true;
        thirdButton.disabled = true;
    }
    this.disabled = true;
});



