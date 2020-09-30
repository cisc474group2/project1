//global variables for WhosOnfirst module

var DisplayWords = {
	"Button1": ['UR'],
	"Button2": ['YES', 'NOTHING', 'LED', 'THEY ARE'],
	"Button3": ['', 'REED', 'LEED', 'THEY\'RE', ],
	"Button4": ['FIRST', 'OKAY', 'C', ],
	"Button5": ['BLANK', 'READ', 'RED', 'YOU', 'YOUR', 'YOU\'RE', 'THEIR', ],
	"Button6": ['DISPLAY', 'SAYS', 'NO', 'LEAD', 'HOLD ON', 'YOU ARE', 'THERE', 'SEE', 'CEE']	
}

var ButtonWords = ['READY','FIRST','NO','BLANK','NOTHING','YES','WHAT','UHHH','LEFT','RIGHT','MIDDLE','OKAY','WAIT','PRESS']
var ClickWords = {
	"READY": ['YES', 'OKAY', 'WHAT', 'MIDDLE', 'LEFT', 'PRESS', 'RIGHT', 'BLANK', 'READY', 'NO', 'FIRST', 'UHHH', 'NOTHING', 'WAIT'],
	"FIRST": ['LEFT', 'OKAY', 'YES', 'MIDDLE', 'NO', 'RIGHT', 'NOTHING', 'UHHH', 'WAIT', 'READY', 'BLANK', 'WHAT', 'PRESS', 'FIRST'],
	"NO": ['BLANK', 'UHHH', 'WAIT', 'FIRST', 'WHAT', 'READY', 'RIGHT', 'YES', 'NOTHING', 'LEFT', 'PRESS', 'OKAY', 'NO', 'MIDDLE'],
	"BLANK": ['WAIT', 'RIGHT', 'OKAY', 'MIDDLE', 'BLANK', 'PRESS', 'READY', 'NOTHING', 'NO', 'WHAT', 'LEFT', 'UHHH', 'YES', 'FIRST'],
	"NOTHING": ['UHHH', 'RIGHT', 'OKAY', 'MIDDLE', 'YES', 'BLANK', 'NO', 'PRESS', 'LEFT', 'WHAT', 'WAIT', 'FIRST', 'NOTHING', 'READY'],
	"YES": ['OKAY', 'RIGHT', 'UHHH', 'MIDDLE', 'FIRST', 'WHAT', 'PRESS', 'READY', 'NOTHING', 'YES', 'LEFT', 'BLANK', 'NO', 'WAIT'],
	"WHAT": ['UHHH', 'WHAT', 'LEFT', 'NOTHING', 'READY', 'BLANK', 'MIDDLE', 'NO', 'OKAY', 'FIRST', 'WAIT', 'YES', 'PRESS', 'RIGHT'],
	"UHHH": ['READY', 'NOTHING', 'LEFT', 'WHAT', 'OKAY', 'YES', 'RIGHT', 'NO', 'PRESS', 'BLANK', 'UHHH', 'MIDDLE', 'WAIT', 'FIRST'],
	"LEFT": ['RIGHT', 'LEFT', 'FIRST', 'NO', 'MIDDLE', 'YES', 'BLANK', 'WHAT', 'UHHH', 'WAIT', 'PRESS', 'READY', 'OKAY', 'NOTHING'],
	"RIGHT": ['YES', 'NOTHING', 'READY', 'PRESS', 'NO', 'WAIT', 'WHAT', 'RIGHT', 'MIDDLE', 'LEFT', 'UHHH', 'BLANK', 'OKAY', 'FIRST'],
	"MIDDLE": ['BLANK', 'READY', 'OKAY', 'WHAT', 'NOTHING', 'PRESS', 'NO', 'WAIT', 'LEFT', 'MIDDLE', 'RIGHT', 'FIRST', 'UHHH', 'YES'],
	"OKAY": ['MIDDLE', 'NO', 'FIRST', 'YES', 'UHHH', 'NOTHING', 'WAIT', 'OKAY', 'LEFT', 'READY', 'BLANK', 'PRESS', 'WHAT', 'RIGHT'],
	"WAIT": ['UHHH', 'NO', 'BLANK', 'OKAY', 'YES', 'LEFT', 'FIRST', 'PRESS', 'WHAT', 'WAIT', 'NOTHING', 'READY', 'RIGHT', 'MIDDLE'],
	"PRESS": ['RIGHT', 'MIDDLE', 'YES', 'READY', 'PRESS', 'OKAY', 'NOTHING', 'UHHH', 'BLANK', 'LEFT', 'FIRST', 'WHAT', 'NO', 'WAIT']
}

 GameData = {
	"ButtonToPress": -1, 
	"ButtonToRead": -1,
	"DisplayWord": '',
	"WordToPress": '',
	"WordToRead": '',	
}

/* interface diagram
_____________________
[ DISPLAY ]    O	|
					|
[btn1] [btn4]  []	|
[btn2] [btn5]  []	|
[btn3] [btn6]  []	|
____________________|

explanation:
DISPLAY: 
	a digital display with one of DisplayWords showing. based on Whuch button ReadWord appears on
btn1-6: 
	clickable buttons. One is randomly assigned WordToRead, then WordToClick is generated and assigned another. the rest are filled in randomly 

 WordToRead_Number  - WordToRead
 displayword		pressword

generate PressWord
*/

function generateGameData(){
	
	GameData.WordToPress = generateWordToPress();
	GameData.WordToRead = generateWordToRead();

	if(GameData.WordToPress === GameData.WordToRead){
		GameData.ButtonToRead = generateButtonNumber();
		GameData.ButtonToPress = GameData.ButtonToRead;
	}
	else{
		GameData.ButtonToRead = generateButtonNumber();
		GameData.ButtonToPress = generateButtonNumber();
		do{
			GameData.ButtonToPress = generateButtonNumber();
		}while(GameData.ButtonToPress == GameData.ButtonToRead)
	}

	GameData.DisplayWord = generateDisplayWord(GameData.ButtonToRead);



}


function generateButtonNumber(){
	return Math.floor(Math.random()*6)+1;
}

function generateWordToPress(){
	return ButtonWords[Math.floor(Math.random()*ButtonWords.length)];
}

function generateWordToRead(){
	return ButtonWords[Math.floor(Math.random()*ButtonWords.length)];
} 


//generate display word from WordToRead_Number
// ButtonNumber: the number where the ReadButton will be placed on the display
function generateDisplayWord(ButtonNumber){
	switch(ButtonNumber){
		case 1:
				return DisplayWords.Button1[Math.floor(Math.random()*DisplayWords.Button1.length)];
				break;
		case 2:
				return DisplayWords.Button2[Math.floor(Math.random()*DisplayWords.Button2.length)];
				break;
		case 3:
				return DisplayWords.Button3[Math.floor(Math.random()*DisplayWords.Button3.length)];
				break;
		case 4:
				return DisplayWords.Button4[Math.floor(Math.random()*DisplayWords.Button4.length)];
				break;
		case 5:
				return DisplayWords.Button5[Math.floor(Math.random()*DisplayWords.Button5.length)];
				break;
		case 6:
				return DisplayWords.Button6[Math.floor(Math.random()*DisplayWords.Button6.length)];
				break;		
	}
}

/* function test(testvar){
	return testvar[];
} */

generateGameData();
console.log(JSON.stringify(GameData));

//generate a ButtonWord that will 