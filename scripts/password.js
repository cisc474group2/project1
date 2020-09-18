// Global Variables for the Password Module
var firstLetter = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'n', 'o', 'p', 'r', 's', 't', 'w'];
var secondLetter = ['a', 'b', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'o', 'p', 'r', 't', 'v'];
var thirdLetter = ['a', 'e', 'g', 'h', 'i', 'l', 'o', 'r', 't', 'u', 'v'];
var fourthLetter = ['a', 'c', 'd', 'e', 'g', 'h', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u'];
var fifthLetter = ['d', 'e', 'g', 'h', 'k', 'l', 'n', 'r', 't', 'w', 'y'];
var letterList = [firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var disjointFirst = subtraction(alpha, firstLetter);
var disjointSecond = subtraction(alpha, secondLetter);
var disjointThird = subtraction(alpha, thirdLetter);
var disjointFourth = subtraction(alpha, fourthLetter);
var disjointFifth = subtraction(alpha, fifthLetter);

var disjointList = [disjointFirst, disjointSecond, disjointThird, disjointFourth, disjointFifth];

var debugList = [firstLetter, disjointSecond, thirdLetter, disjointFourth, disjointFifth];

const rollerLength = 6;
const rolodexLength = 5;
const numDesiredDisjoint = 2;

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

var res = start();

function start() {
    // Adds the word to the rolodex
    firstRoller.add(selectedWord.charAt(0));
    secondRoller.add(selectedWord.charAt(1));
    thirdRoller.add(selectedWord.charAt(2));
    fourthRoller.add(selectedWord.charAt(3));
    fifthRoller.add(selectedWord.charAt(4));

    var result = fillRolodex();
    var rolodexPosition = result.forEach(x => Math.random() * rollerLength);
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

    console.log(rolodex);
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