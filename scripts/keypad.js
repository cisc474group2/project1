var firstColumn = ["hoop", "TInsideA", "lambda", "awkwardH", "squidKnife", "fancyH", "backwardsC"];
var secondColumn = ["backwardsE2D", "hoop", "backwardsC", "looper", "blankStar", "fancyH", "upsideDownQMark"];
var thirdColumn = ["copyright", "noseEye", "looper", "xi", "broken3", "lambda", "blankStar"];
var fourthColumn = ["six", "backwardsP", "tB", "squidKnife", "xi", "upsideDownQMark", "smiley"];
var fifthColumn = ["candles", "smiley", "tB", "C", "backwardsP", "worm", "filledStar"];
var sixthColumn = ["six", "backwardsE2D", "railroad", "ae", "candles", "hSmiley", "omega"];

var listOfColumns = [firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn];
var selectedColumn = listOfColumns[Math.floor(Math.random() * listOfColumns.length)];

var firstIndex = Math.floor(Math.random() * 3);
var secondIndex = Math.floor(Math.random() * (4 - firstIndex) + firstIndex);
var thirdIndex = Math.floor(Math.random() * (4 - secondIndex) + secondIndex);
var fourthIndex = Math.floor(Math.random() * (4 - thirdIndex) + thirdIndex);



