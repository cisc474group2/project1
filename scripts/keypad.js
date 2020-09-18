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



