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

// let year = prompt('Enter Any Year to find Leap Year');

// let leapYearResult = ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) ? 'Leap Year' : 'Not a Leap Year';
// console.log(leapYearResult)


// Q8. Write a JavaScript program where the program takes a random integer between 1 and 10,and the user is then prompted 
// to input a guess number.The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// let random = Math.floor(Math.random() * 10)
// let promptNum = prompt('Enter any Number From 1 to 10');

// let Equalresult = (random === promptNum) ? 'Good Work' : 'Not Matched';
// console.log(Equalresult)


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
// let celcius = prompt('Enter Temperature in celcius')
// let Fahrenheit = celcius * 9 / 5 + 32
// console.log(`Temperature in Farenheit is ${Fahrenheit}F`)

// // Fahrenheit to Celcius
// let fahrenheit = prompt('Enter Temperature in Fahrenheit')
// let celciusformula = (fahrenheit - 32) * 5 / 9
// console.log(`Temperature in Celcius is ${celciusformula}C`)


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

// let givennNumber = 19
// let userNumber = prompt('Enter Any Number');

// let minus = userNumber - givennNumber

// let result = (minus > givennNumber) ? 3 * (minus) : minus;

// console.log(result);

// 18. Write a JavaScript program to check a pair of numbers and
//  return true if one of the numbers is 50 or if their sum is 50.

function sumCheck(a,b,num) {
    if(a == num || b == num) {
        console.log('Number : true')
    } else if (a + b == num) {
        console.log(' Sum : true')
    } else {
        console.log('false')
    }
}

sumCheck(5,7,50);


// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function positiveNegative(a,b) {
    if(a > 0 && b > 0) {
        console.log('both Positive')
    } else if(a > 0 || b < 0) {
        console.log('First Number is Positive , Second Number is Negative')
    }else if(a < 0 || b > 0) {
        console.log('First Number is Negative , Second Number is Positive')
    }else {
        console.log('Both Negativesa')
    }
}

positiveNegative(23,-33)

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string.
//  If the given string begins with "Py" return the original string.  

function PyString(string) {
    return (string.startsWith('Py')) ? string : 'Py' + string;
}

console.log(PyString('orld'))

// 22. Write a JavaScript program to remove a character 
// at the specified position in a given string and return the modified string.

function removeString(string,number) {
    let result = removeString(string,number)
    console.log(result)
}
removeString('hello',3);

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

function positiveMultiple(number) {
    return (number % 3 == 0 && number % 7 == 0)? 'multiple' : 'not multiple';
}

console.log(positiveMultiple(6));

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function startsJava(str) {
    return str.startsWith('Java')? true : false;
}
console.log(startsJava('JavaScript'))


// 31. Write a JavaScript program to find the largest of three given integers. 


function findLargest(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }


  console.log(findLargest(5, 10, 3));
  console.log(findLargest(-1, -7, -4));
  console.log(findLargest(100, 50, 75));


//   39. Write a JavaScript program to compute the sum of the two given integers.
//  If the sum is in the range 50..80 return 65 otherwise return 80.  

function sumRange(a,b) {
    let sum = a + b;
    return (sum > 50 && sum < 80)? 65 : 80 ;
  }
  console.log(sumRange(35,33))

  
