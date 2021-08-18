const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' ',
};

function decode(expr) {
    
    let resultStr = []
   
    let tempArr = expr.match(/.{1,10}/g); // делим вход на равные куски длиной 10 символов
   
       
    for (let i = 0; i < tempArr.length; i++) { //цикл верхнего уровня
       let counter = 0;  // пишем каунтер 
       let result = '';
    while (counter < 9) { // 
     if ((tempArr[i][counter] + tempArr[i][counter+1]) === '10') { //если 10, добавляем точку
       result = result + '.';
       counter = counter + 2;
       }
       else if ((tempArr[i][counter] + tempArr[i][counter+1]) === '11') { //если 11, добавляем тире
               result = result + '-';
       counter = counter + 2;
       }
       else if (tempArr[i] === '**********') { //если ********** добавляем пробел
               result = result + ' ';
               counter = counter + 9; // добавляем каунтер для целого прохода
       }
       else {
       counter = counter + 2;
       }
    }
    resultStr.push(result)
    }
     // далее работаем с массивом морзе
     let string = '';
	for (let i = 0; i < resultStr.length; i++) {
		string = string + MORSE_TABLE[resultStr[i]];
	}
	return string
}


module.exports = {
    decode
}