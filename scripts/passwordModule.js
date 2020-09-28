// Global Variables for the Password Module
var firstLetter = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'n', 'o', 'p', 'r', 's', 't', 'w'];
var secondLetter = ['a', 'b', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'o', 'p', 'r', 't', 'v'];
var thirdLetter = ['a', 'e', 'g', 'h', 'i', 'l', 'o', 'r', 't', 'u', 'v'];
var fourthLetter = ['a', 'c', 'd', 'e', 'g', 'h', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u'];
var fifthLetter = ['d', 'e', 'g', 'h', 'k', 'l', 'n', 'r', 't', 'w', 'y'];
var letterList = [firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var success = false;
var triggers = ['ub', 'lb'];

var disjointFirst = subtraction(alpha, firstLetter);
var disjointSecond = subtraction(alpha, secondLetter);
var disjointThird = subtraction(alpha, thirdLetter);
var disjointFourth = subtraction(alpha, fourthLetter);
var disjointFifth = subtraction(alpha, fifthLetter);

var disjointList = [disjointFirst, disjointSecond, disjointThird, disjointFourth, disjointFifth];

var debugList = [firstLetter, disjointSecond, thirdLetter, disjointFourth, disjointFifth];

var letterPaths;

var rollerNames;

const rollerLength = 6;
const rolodexLength = 5;
const numDesiredDisjoint = 2;

var rolodexPosition;

var firstRoller = new Set([]);
var secondRoller = new Set([]);
var thirdRoller = new Set([]);
var fourthRoller = new Set([]);
var fifthRoller = new Set([]);

var rolodex = [firstRoller, secondRoller, thirdRoller, fourthRoller, fifthRoller];



var wordList = ["about", "after", "again", "below", "could", "every", "first", "found", "great", 
							"house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", 
							"sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", 
							"water", "where", "which", "world", "write"];

var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];

//var res = start();

function start(rn) {
	rollerNames = rn;


	// Adds the word to the rolodex
	firstRoller.add(selectedWord.charAt(0));
	secondRoller.add(selectedWord.charAt(1));
	thirdRoller.add(selectedWord.charAt(2));
	fourthRoller.add(selectedWord.charAt(3));
	fifthRoller.add(selectedWord.charAt(4));

	rolodex = fillRolodex();
	letterPaths = fillLetterPaths();
	rolodexPosition = [0,0,0,0,0];

	for (var k = 0; k < rolodexLength; k ++) {
		rolodexPosition[k] = Math.floor(Math.random() * rollerLength);
	}
	setInitialPos();
}

// Fills the rolodex rollers
function fillRolodex() {

	var sourceLetters = randomDisjointList();

	let k = 0;
	rolodex.forEach(roller => {
		while (roller.size < rollerLength) {
			roller.add(sourceLetters[k][Math.floor(Math.random() * sourceLetters[k].length)])
		}
		k ++;
	});

	//console.log(rolodex);
	console.log(selectedWord)
	return rolodex;
}

// Set subtraction.
// a - array
// b - array
// Returns new set of all elements in a not in b
function subtraction(a, b) {
	return a.filter(x => !b.includes(x));
}

// Returns the disjoint array, with one disjoint set of letters, and 4 original.
function randomDisjointList() {
	let numDisjoint = 0;
	var toReturn = [letterList[0], 0, 0, 0, disjointList[rolodexLength-1]];
	for (let k = 1; k < rolodexLength - 1; k ++) {
		// if less then .5, add disjoint,
		if (numDisjoint < numDesiredDisjoint && Math.random() < .75) {
			toReturn[k] = disjointList[k];
			numDisjoint ++;
		}
		else {
			toReturn[k] = letterList[k];
		}
	}
	return toReturn;
}

function fillLetterPaths() {
	var toReturn = new Set([]);
	rolodex.forEach(roller => {
		var tmp = new Set([]);
		roller.forEach(letter => {
			tmp.add("url('../images/password/" + letter + ".png')");
		})
		tmp = Array.from(tmp);
		toReturn.add(tmp);
	})
	toReturn = Array.from(toReturn);
	//console.log(toReturn);
	return toReturn;
}


// ButtonID is the button to change
// Dir 1 or -1, 1 is forward, -1 is reverse.
function changeDisplayedLetter(buttonID, dir) {
	//console.log(buttonID + " " + dir);

	var rollerArrayEntry = buttonID[buttonID.length - 1];
	var selectedRoller = "roller" + rollerArrayEntry;
	var pos = rolodexPosition[rollerArrayEntry - 1] + dir;
	
	if (pos < 0) pos = rollerLength - 1;
	else if (pos > rollerLength - 1) pos = 0;

	rolodexPosition[rollerArrayEntry - 1] = pos;
	
	var path = letterPaths[rollerArrayEntry - 1][pos];

	document.getElementById(selectedRoller).style.background = path;
	document.getElementById(selectedRoller).style.backgroundSize = ("cover");
}


function setInitialPos() {
	for (var k = 0; k < rollerNames.length; k ++) {
		var name = rollerNames[k];
		var pos = rolodexPosition[k];
		var path = letterPaths[k];
		//console.log(name, pos, path[pos]);
		document.getElementById(name).style.background = path[pos];
		document.getElementById(name).style.backgroundSize = "cover";
	}
}

function checkRollerStatus() {
	var reconstructedWord = "";
	var rol = Array.from(rolodex);
	for (var k = 0; k < rolodexLength; k ++) {
		reconstructedWord = reconstructedWord + Array.from(rol[k])[rolodexPosition[k]];
	}

	if (reconstructedWord == selectedWord) {
		document.getElementById("indicatorLightObj").classList.remove('errorRed');
		document.getElementById("indicatorLightObj").classList.add('successGreen');
		triggers.forEach(x => {
			var elem = document.getElementsByClassName(x)
			Array.prototype.forEach.call(elem, function(y) {
				console.log(y, ", ", y.classList.contains(x));
				y.classList.remove(x);
				console.log(y, ", ", y.classList.contains(x));
			});
		});
		success = true;
	}
	else {
		addStrike();
	}
		

	return reconstructedWord == selectedWord;
}