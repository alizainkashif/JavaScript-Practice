// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Current Day

let date = new Date()
let today = date.getDay()
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let currentDay = days[today];
console.log(`Today is : ${currentDay}`)

// Time
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(`Current time is : ${hours} : ${minutes} : ${seconds}`)

// Q6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = prompt('Enter Any Year to find Leap Year');

let leapYearResult = ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) ? 'Leap Year' : 'Not a Leap Year';
console.log(leapYearResult)
// Q8. Write a JavaScript program where the program takes a random integer between 1 and 10,and the user is then prompted 
// to input a guess number.The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let random = Math.floor(Math.random() * 10)
let promptNum = prompt('Enter any Number From 1 to 10');

let Equalresult = (random === promptNum) ? 'Good Work' : 'Not Matched';
console.log(Equalresult)


//10 Write a JavaScript program to calculate multiplication and division of two numbers (input from the user)

function Calculations() {
    let firstNumber = document.getElementById('input1')
    let secondNumber = document.getElementById('input2')
    let multiplyBtn = document.getElementById('multiply')
    let divideBtn = document.getElementById('divide')
    let resultBtn = document.getElementById('result')

    multiplyBtn.addEventListener('click',function () {
        let result = firstNumber.value * secondNumber.value;
        resultBtn.innerHTML = result;
    })

    divideBtn.addEventListener('click',function () {
        let result = firstNumber.value / secondNumber.value;
        resultBtn.innerHTML = result;
    })
}

Calculations();

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// Celcius to Fahrenheit
let celcius = prompt('Enter Temperature in celcius')
let Fahrenheit = celcius * 9 / 5 + 32
console.log(`Temperature in Farenheit is ${Fahrenheit}F`)

// Fahrenheit to Celcius
let fahrenheit = prompt('Enter Temperature in Fahrenheit')
let celciusformula = (fahrenheit - 32) * 5 / 9
console.log(`Temperature in Celcius is ${celciusformula}C`)


// 16. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.  



function sumOfNumbers(firstNumber,secondNumber) {
    if (firstNumber === secondNumber) {
      return 3 * (firstNumber + secondNumber);
      } 
     else
     {
      return (firstNumber + secondNumber);
     }
   }
  console.log(sumOfNumbers(20, 30));
  console.log(sumOfNumbers(30, 30));


//   17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
//    Returns triple the absolute difference if the specified number is greater than 19.

let givennNumber = 19
let userNumber = prompt('Enter Any Number');

let minus = userNumber - givennNumber

let result = (minus > givennNumber) ? 3 * (minus) : minus;

console.log(result);



