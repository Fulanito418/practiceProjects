console.log('Hello, testing');

let arr1 = [10,20,20,-10];

let initValue = 0;

function positiveSum(arr) {
  if (arr.length == 0){
    return 0;
    } else {
      for(i=0; i<arr.length; i++){
        initValue = initValue + arr[i];
      }
}
return initValue;
  };
  
console.log(positiveSum(arr1));


/*
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