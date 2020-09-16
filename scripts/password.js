// Global Variables for the Password Module
var firstLetter = new Set(['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'n', 'o', 'p', 'r', 's', 't', 'w']);
var secondLetter = new Set(['a', 'b', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'o', 'p', 'r', 't', 'v']);
var thirdLetter = new Set(['a', 'e', 'g', 'h', 'i', 'l', 'o', 'r', 't', 'u', 'v']);
var fourthLetter = new Set(['a', 'c', 'd', 'e', 'g', 'h', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u']);
var fifthLetter = new Set(['d', 'e', 'g', 'h', 'k', 'l', 'n', 'r', 't', 'w', 'y']);
var alpha = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

var wordList = ["about", "after", "again", "below", "could", "every", "first", "found", "great", 
                            "house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", 
                            "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", 
                            "water", "where", "which", "world", "write"];

var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];

var start=function() {

}

// Selects the word to use
console.log(selectedWord + " " + selectedWord.charAt(0) + " " + selectedWord.charAt(4));