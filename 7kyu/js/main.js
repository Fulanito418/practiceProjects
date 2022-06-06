//7Kyu

//Highest and Lowest
//p: given a string of numbers separated by spaces
//r: return a string of the highest and lowest numbers
//e: "5 8 -4 11" >> "11 -4"
//p: convert string to array using split, store in var numArr
//sort from least to greatest
//push [0] and [array length -1] in var maxMinArr
function highAndLow(numbers){
  
  let numArr = numbers.split(' ')
  numArr.sort((a,b)=> a-b)
  console.log(numArr)
  return (numArr[numArr.length-1] + ' ' + numArr[0])
}



//Disemvowel Trolls
//p: given a string
//r: return a a string
//e: 'This is awful!' >> 'Ths s wfl'
//p: create an array of variable, vowelsArr
// create an empty array, noVowels
// turn string into an array, conserve the spaces, using split
//check to see if any of the characters are inside the vowels array
//if not, push to new array, noVowels
//loop through array

function disemvowel(str) {
  let vowelsArr = ['a','e','i','o','u'];
  let noVowels = [];
  let strArr = str.split('')
  
  strArr.map(x => vowelsArr.includes(x.toLowerCase()) ? null : noVowels.push(x))
  return (noVowels.join(''))  
}

/*
//Sum of two lowest positive integers
//p: positive integers only, given a numbers array, 4 or more in array
//r: return the sum of the two lowest numbers
//e: [5,10,13,6] >> 5+6 = 11
//p: sort array from lowest to highest
//take index 0 and index 1 and add them

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b)=>a-b)
  return numbers[0]+numbers[1]
}


/*
//Square Every Digit
//p: integer input and integer return
//r: return a number
//e: 245 >> 41625
//p: create an empty string
// convert number into an array and forEach value square and
//concatenate to the empty string

function squareDigits(num){
  let numString = []
  let numArr = String(num).split('')
  numArr.forEach(x => numString.push(x**2))
  
  
  console.log(Number(numString.join('')))
}

squareDigits(456)


/*
//Digital cypher
//p: str input only lowercase, key only positive integers
//r: return an array of integers to represent encoded str
//e: apple, 1939 -> a= 1 + 1 p= 16 + 9 p = 16 + 3 l= 12 + 9 e= 5 + 1
// returns [2, 25, 19, 21, 6]
//p: create an empty array to store letter value of words 
//change string to array using split
//loop through array and push letter value to array
//loop through letter array and return new array with letter charCodes - 96
//loop through array containing letter values and add key to each one

// counter that starts at 0 and if it reaches key length, go back to 0
// map through letter value array and add

//or create new array that contains key values, loop through keys and keep
//pushing 


//Solution
function encode(str, n) {
  const key = String(n)
  return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))
}


//Refactor This One
// function encode(str,  n)
// {
//   letterArr = [];
//   strArr = str.split('')
  
//   strArr.forEach(x => letterArr.push(x.charCodeAt(0)-96));
//   //console.log(letterArr)
  
//   encodedLetters = letterArr.map(x => x + 1);
//   //console.log(encodedLetters)
  
  
//    for (let i = 0; i < 10; i++) {
  

//     if (counter >= String(n).length) {
//       console.log(String(n)[i-counter])  
//     } else {
//       console.log(String(n)[i])  
//     }
//    }
// }

// encode('scout',  1939)

/*
//Spinning Rings
//prep
//p: inner ring decreases by 1 on each spin, given an innerMax
// outer ring increases by 1 on each spin, given an outerMax
//both start at 0, inner and outerMax >=1
//r: return the number of spins it would take for rings to reach same number
//e: innerMax is 3 and outerMax is at 2
// spin1: inner 3, outer 1
// spin2: inner 2, outer 2
//return 2
//p: counter variable= 0
// for loop, after each loop move through an array to represent inner ring
//values and outer. innerArr, outerArr. 
//function to create the inner and outer array 

function spinningRings(innerMax, outerMax) {
  // your code here
};



//Don't give me five!
//P: positive or negative numbers, start and end inclusive, start is smaller than end
//R: return the count of numbers without a 5 in them
//E: 4,5,6,7,8,9,10,11,12,13,14,15 would return 10 because you don't count 5 and 15
//P: using a for loop, start to end, count all the numbers using a count variable
// change number to array then check to see if it includes 5

function dontGiveMeFive(start, end)
{
  let count = 0;
  for (let i = start; i <= end; i++){
    if(String(i).includes(5)){
      count += 0
    } else {
      count += 1
    }
  }
  return count
}

/*
//Chain me
chain = (input, fs) => fs.reduce((acc,x) => x(acc), input);
*/