
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