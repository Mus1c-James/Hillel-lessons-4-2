"use strict";

 const fiveDigitNumberInput = prompt('Enter 5 digit number');
 let result =''; 
 if(fiveDigitNumberInput === null){
    alert()
 }else if (fiveDigitNumberInput.trim() === '' || isNaN(fiveDigitNumberInput) || !Number.isInteger(+fiveDigitNumberInput)){
    alert('Error: invalid number') 
 }else{
   const num = Math.abs(+fiveDigitNumberInput);
 
    if(String(num).length === 5 ){
      result = num.toString().split('').join(' ');
      alert(`Your number is: ${result}`);
    }else{
        alert('Number is not 5-digit');
    }
 }
 document.getElementById("content").innerHTML = `
 <p>Your number is: ${result}</p>
 `; 
 