
//Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
  
  let catYears, dogYears;

  //convert cat years to human years
  if(humanYears > 2){
    catYears = (humanYears - 2) * 4 + 24
    dogYears = (humanYears - 2) * 5 + 24  
  } else if (humanYears === 2) {
    catYears = 24
    dogYears = 24
  } else {
    catYears = 15
    dogYears = 15
  }
  
      
  return [humanYears,catYears,dogYears];
}

console.log(humanYearsCatYearsDogYears(3));


/*
//Bin to Decimal
function binToDec(bin){
  reverseBin = bin.split('').reverse().join('');
  sum = 0;
  for (i=0; i<bin.length; i++) {
    sum += reverseBin[i]*(2**i)
  }
  return sum
}


/*
//Barista Problem
//If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.


let coffees = [2, 3, 5, 9, 10].sort((a, b) => a - b);



let multiplier = coffees.length

let sum = 0;

for (i = 0; i < coffees.length; i++){
  let coffeeTime = coffees[i] * multiplier
  sum += coffeeTime + (2*i)
  multiplier -= 1
}

console.log(sum)


/*
function barista(coffees){

  if (coffees.length<1){
    return 0
  }else{
    //first order from least to greatest
  coffees.sort((a, b) => a - b)
  //add each index value with the previous preceding value + 2
  
  const sumWithInitial = coffees.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  
  return sumWithInitial + (coffees.length-1)*2
  }
  
  };
  
  
  
  
  //return "Let's code!"


console.log(barista(coffeesList))



/*


arr = [1, 5, 3, 2, 5]

const flip=(d, a)=>{
  //Take array a and sort it
  a.sort()
  return d === 'R' ? a : a.reverse()
}

console.log (arr)


console.log(arr)

console.log(arr.reverse())






/*
//Area of a square using arc value

function squareArea(A){
  //a*4 give you circumference of the circle
  let circumference = A*4
  //circumference = pi * D    //D = diameter
  //circumferece / pi = D
  let diameter = circumference / Math.PI
  // D / 2 = r    //the length of the sqaure is r (radius)
  let radius = diameter / 2
  return Number((radius*radius).toFixed(2))
}

/*
//Rock Paper Scissors
const rps = (p1, p2) => {
  if ((p1 == 'scissors' && p2 == 'paper') ||
      (p1 == 'paper' && p2 == 'rock') ||
      (p1 == 'rock' && p2 == 'scissors')) {
    return 'Player 1 won!'
  } else if (p1 == p2) {
    return 'Draw!'
  } else {
    return 'Player 2 won!'
  }
};

/*

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

//find multiples of a number
function findMultiples(integer, limit) {
  numArr = []
  
  for (i = integer; i <= limit; i+=integer){
    
    numArr.push(i)
    
  }
  return numArr
}


 console.log(findMultiples(4,19))


/*

let arr = ["PT92", 6];


let weaponsArr = {
  PT92: 'PT92 - 17 bullets',
  M4A1: 'M4A1 - 30 bullets',
  M16A2: 'M16A2 - 30 bullets',
  PSG1: 'PSG1 - 5 bullets',
}

function magNumber(info){

  let bulletIndex = weaponsArr[info[0]].indexOf('bullets');
  let magazineIndex = weaponsArr[info[0]].indexOf('-') + 2;
  let magazineSize = weaponsArr[info[0]].slice(magazineIndex, bulletIndex);

  if (info[1]*3>magazineSize){
    return Math.ceil(info[1]*3 / magazineSize);
  } else {
    return 1;
  }

}

console.log(magNumber(arr));

//console.log(magNumber(arr));

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets


/*
// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a**b
}
  
function subt(a,b){
  return a - b
}

/*
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

let nums = [5,100, 49, 10]

function squareOrSquareRoot(array) {
  
  let newArr = array.map(num => String(Math.sqrt(num)).includes('.') ? num**2 : Math.sqrt(num))
  return newArr
  //return array;  
}

console.log(squareOrSquareRoot(nums));
/*
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0


function sameCase(a, b){
  aUpper = a.toUpperCase()
  aLower = a.toLowerCase()
  bUpper = b.toUpperCase()
  bLower = b.toLowerCase()

  if (a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()){
    return -1
  } else if ( (a === a.toUpperCase() && b === b.toUpperCase())
  || (a === a.toLowerCase() && b === b.toLowerCase())) {
  return 1;
} else {
  return 0
}
}

console.log( sameCase('10','y') )







/*
let size = 3;

function stringy(size) {
  let string = "";
  for (i = 0; string.length< size; i++){
      string += '1'
      string += '0'
  }
  if (string.length == size){
  return string  
  } else {
  return string.slice(0, string.length-1)
  }
}

//if(string.length < size){

console.log(stringy(size));


/*

// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0

function sameCase(a, b){
  
  return 0;
}


/*
let word = 'h';


function capitalizeWord(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

console.log(capitalizeWord(word));

//Short Long Short
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// function solution(a, b){
//   return a.length > b.length ? b+a+b : a+b+a
// }

//nameShuffler('john McClane'); => "McClane john"

//let str = 'john McClane'

// function nameShuffler(str){
//   let strArr = str.split(' ')
//   let lastFirst = [strArr[1], strArr[0]]
//   return lastFirst.join(' ')
// }


//reverse the elements using the following code
// function nameShuffle(str){
//   return str.split(' ').reverse()
// }

// console.log(nameShuffle(str))



/*
//Coctail API code

//The user will enter a cocktail. 
//Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

*/



//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


/*
let numbersList = [0,1,2,3,4,5,6,7,8,9];
// function isNotNumber(value) {
//   return value = numbersList
//}

function isNotNumber(value) {
  return value !== '0'
  && value !== '1'
  && value !== '2'
  && value !== '3'
  && value !== '4'
  && value !== '5'
  && value !== '6'
  && value !== '7'
  && value !== '8'
  && value !== '9' 
}

let stringW = 'T1h8is loo22ks5 gr99e3a0t!'
let arrChar = stringW.split('')
console.log(arrChar);

let filtered = arrChar.filter(isNotNumber)
console.log(filtered);
console.log(filtered.join(' '));
// filtered is [12, 130, 44]


/*
let stringW = 'This looks5 grea8t!'
let arrChar = stringW.split('')
console.log(arrChar);
//console.log(arrChar.filter(num => Number.isInteger(num)));

function numToFilter(value) {
  return value = 'g'
}

console.log(arrChar.filter(numToFilter));


//let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]




/*



//It's pretty straightforward. Your goal is to create 
//a function that removes the first and last characters 
//of a string. You're given one parameter, the original 
//string. You don't have to worry with strings with less than two characters.
let str = 'hello'
let modArr = str.split('');
modArr.shift();
modArr.pop();
str = modArr.join('')
console.log(str);


//console.log(str.split('').shift().pop().join();

//Solution for checking consecutives
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

/*
let testArr = [-5,-4,-3,-2,-1,0,1,2,10,4,5];
//let testArr = [-3,-2,-1,0,1,2,3,4,5];

let sequence = 0;

let sumOne = testArr[0] + 1

function firstNonConsecutive (arr) {
  if (arr.length < 2) {
    return null
  } else {
    checkNonConsecutive(arr)
  }
}

//console.log(`${arr [i]}` + `  ${arr [i+1]}` + `${arr[i] == arr[i+1]-1}`);

function checkNonConsecutive(arr){
  
  for (i=0; i<arr.length-1; i++){
  if (arr[i] + 1 == arr[i+1]) {
    continue
  } else {
    console.log(arr[i+1])
    break
  }

  }
}




console.log(firstNonConsecutive(testArr));

  //console.log('continues')
  
    //arr[i] === arr[i+1] ? arr[i+1] : "hello"
  
    //}







// function checkConsecutive() {
//   for (i=0; i<arr.length - 1; i++){
//     if (arr[i] !== arr[i+1] - 1) {
//       return arr[i+1];
//     } else {
//       checkConsecutive()
// }
//   }
// }



/*

      }
    } if (sequence == arr.length + 1 ) { return null }
  } console.log(sequence)
}

console.log(firstNonConsecutive(testArr));



function firstNonConsecutive (arr) {

  if (arr.length < 2){
    return null
  } else {
    for (i=0; i<arr.length; i++){
      if (arr[i] == arr[i+1] + 1) {
        console.log(arr[i+1]);
      } else {
        console.log('all consec')
        //return null
      }
    }
  }
}

console.log(firstNonConsecutive(testArr));
// console.log((testArr[2+4]));

// console.log(testArr[i])
// console.log(testArr[i+1])
// console.log(testArr[i] !== testArr[i+1]);


//Testing Object constructor

function Vehicle(make, model, color){
  this.make = make,
  this.model = model,
  this.color = color
}

let favCar = new Vehicle('Honda', 'Civic', 'black');




//Remove all the white space #########################
const str = ' A   B   C    D ';

const noWhitespace = str.replace(/\s/g, '');
console.log(noWhitespace); // 👉️ 'ABCD'


The \s metacharacter matches spaces, tabs and newlines.

We use the g (global) flag to specify that we want to match all occurrences of whitespace characters in the string, not just the first occurrence.

The second parameter the replace function takes is the replacement. In our case we want to replace all whitespace with an empty string (nothing).




//Add all the positive values in an array #########################



function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}


function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}


function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}






// *Variables*
// Declare a variable and assign it to your 
//fav drink as a string. Make sure there is no
 //whitespace on either side of the string, and 
 //print the value to the console

 let favDrink = 'Lemonade'.trim()

 console.log(favDrink);

//Declare a variable, assign it a string 
//of multiple words, and check to see 
//if one of the words is "apple".

let multWords = 'Green Blush Cheeks Apple Beauty'

let lowerWords = multWords.toLowerCase();

console.log(lowerWords.includes('apple'));

// *Functions*
// Create a function that returns 
// rock, paper, or scissors as randomly as possible

function rockPaperScissors () {
    let ranValue = Math.random();
    if (ranValue<0.33){
        console.log('rock') 
    } else if (ranValue>0.66) {
        console.log('paper')
    } else {
        console.log('scissors')
    }
}

//rockPaperScissors();


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function


function checkWin(playerChoice){
    console.log(playerChoice)
    let botChoice = rockPaperScissors();    
//     if ( (playerChoice === 'rock' && botChoice === 'scissors') || 
//     (playerChoice === 'paper' && botChoice === 'rock') || 
//     (playerChoice === 'scissors' && botChoice === 'paper') ) {
//         console.log('Win');
//     } else if (playerChoice === botChoice) {
//         console.log('Tied');
//     } else {
//         console.log('Lose');
//     }
}

checkWin('rock');


//*Loops*
//Create a function that takes an array of choices. 
//Play the game x times where x is the number 
//of choices in the array. Print the results of 
//each game to the console.


// function playGameXTimes(arr){
//     arr.forEach( choice => checkWin(choice) ) 
//     };

// playGameXTimes()

*/