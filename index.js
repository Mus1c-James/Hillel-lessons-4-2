"use strict";
//debugger
let inputNumberDigit = prompt("Введите трехзначное число");

	//console.log(inputNumberDigit);
inputNumberDigit = inputNumberDigit.trim();
	//console.log('input Trim', inputNumberDigit);
if (/^-?\d{3}$/.test(inputNumberDigit)) {
    let numStr = inputNumberDigit.replace('-', ''); 
    let numberDigit1 = numStr[0];
    let numberDigit2 = numStr[1];
    let numberDigit3 = numStr[2]; 

    if (numberDigit1 === numberDigit2 && numberDigit2 === numberDigit3) {
        console.log("Все цифры одинаковы");
    }  
    else if (numberDigit1 === numberDigit2 || numberDigit2 === numberDigit3 || numberDigit1 === numberDigit3) {
        console.log("Есть одинаковые цифры среди цифр числа");
    } 
    else {
        console.log("Все цифры разные");
    }
} else {
    console.log("Ошибка: введено не трехзначное число");
}
