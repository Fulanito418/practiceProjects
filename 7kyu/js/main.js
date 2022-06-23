//7Kyu



//`Beginner Series #3 Sum of Numbers`


//p: given two integers, positive or negative, any order
// if equal return one of the given values
//r: return number, sum
//e: 5,7 >> 5 + 6 + 7
//p

function getSum( a,b ) {
  //variable for counter
  let counter = 0;
  //variable for bigger value, using max
  let maxVal = Math.max(a,b);
  //variable for smaller value, using min
  let minVal = Math.min(a,b);

  //if a equals b then return a
  if ( a === b ) {
    return a
  } else {
    //if not, use add all the values in between, inclusive
   //using a for loop
    for (i = minVal; i<= maxVal; i++) {
      counter += i
    }
    return counter
  }
}

console.log(getSum(10,5))

/*
//Complementary DNA
//p: given a string of letters representing DNA
//r: return string
//e: GATC >> CTAG
//p

function DNAStrand(dna){
  //empty array variable to store complements
  let compArr = [];
  //convert dna string to array using split
  let dnaArr = dna.split('')
  //forEach element in the array, push its complement to compArr
  dnaArr.forEach(function(e){
    if (e == 'A') {
      compArr.push('T')
    } else if (e == 'T') {
      compArr.push('A')
    } else if (e == 'C') {
      compArr.push('G')
    } else {
      compArr.push('C')
    }
  })
  //return joined compArr 
  return compArr.join('')
}


/*
//Shortest Word

//p string of words, never empty, single data type
//r return the length of the shortest word(s)
//e 'hi hill hundreds' >> 2
//p 

function findShort(s) {
  
  //turn the string into an array using split
  let stringArr = s.split(' ')
  //create an empty array to collect string lengths
  let stringLengths = [];
  
  //loop through stringArr and push string lengths 
  //into the stringLengths array
  stringArr.forEach( function(e) {
    stringLengths.push(e.length)

    //console.log(stringLengths)
  });
  //sort stringLengths from least to greatest and return
  //value at index 0
  stringLengths.sort((a,b)=> a-b )
  //console.log(stringLengths[0])
  return stringLengths[0]
}

console.log(findShort('Hello hill hope'))



/*
//P: given a string, can be empty, ignore letter case
//R: return true or false
//E: 'After' >> true | 'Before' >> false
//P: convert string to array, lower case 
//Use map strough elements and c
// if >=2 false

//Isograms
function isIsogram(str){
  let strArr = str.toLowerCase().split('')
  let count = 0
  //console.log(strArr)
  //console.log(str.length)

  if(str.length <= 1) {
    console.log('true')
    //return true
  } else {
    
    //console.log(strArr.indexOf('n')); 
    //console.log(strArr.lastIndexOf('n')); 
    strArr.forEach( e => strArr.indexOf(e) === strArr.lastIndexOf(e) ? count++ : count+=2)
    console.log(count)
    console.log(str.length)
    console.log(count === str.length)
    return count === str.length ? 'true' : 'false'
    return count === str.length ? true : false

  }
  
}

console.log(isIsogram('are'))

/*
//Exes and Ohs
//p: given a string of any case letters
//r: return true or false if equal number of 'x' or 'o' are present in string
//case insensitive
//e: 'oooxxx' >> true  "ooBXx" >> true
//p: turn the str into all lowercase, then an array
//filter for x
//filter for o
//compare lengths, return true or false

function XO(str) {
  let strLower = str.toLowerCase().split('')
  
  let onlyX = strLower.filter(el => el === 'x')
  let onlyO = strLower.filter(el => el === 'o')
  
  return onlyX.length == onlyO.length ? true : false


}


/*
//Mumbling
//p: string of letters, lower or upper case
//r: return string
//e: 'WeR' >> W-Ee-Rrr 
//p: covert string to an array
//loop thorugh array and 

function accum(s) {
  
  let sArr = s.toLowerCase().split('')
	let mumArr = [];
  let finalArr =[]
    
  for(i=0; i<sArr.length; i++){
    mumArr.push(sArr[i].repeat(i+1))
  }
  
//   console.log(mumArr.map(x=> charAt(0).toUpperCase()))
  mumArr.map(x=> finalArr.push((x.charAt(0).toUpperCase()+x.slice(1))))

  return (finalArr.join('-'))
}



/*
//List Filtering
//p: given non-negative integers and strings
//r: return a new list with the strings filtered out
//e: [5,a,4,t,z] >> [5,4]
//p: filter array by typeOf Number

function filter_list(l) {
  let numOnly = l.filter(x => typeof x === 'number')
  return (numOnly)
}


/*

//Descending Order
//p: takes in non-negative integers
//r: return number
//e: 5923>> 9532
//p: take number and turn to string
//split into array and sort high to low
//return joined array

function descendingOrder(n){
  let nArr = String(n).split('').sort((a,b)=> b-a)
  return Number(nArr.join(''))
}


/*
// "You're a square!"
//p: given an integer, positive or negative
//r: return true or false
//e: 25 >> true 10>> false any negative false
//p: check if n is negative, return false
//if not then find the square root, if its an integer, return true

var isSquare = function(n){
  if (n<0) {
    return false
  } else if ( Number.isInteger( n ** (1/2) )  )  {
    return true
  } else {
    return false
  }
}


/*
//Get the Middle Character
//p: given a string, sometimes odd or even
//r: return a string, single middle letter if given string is odd
// two middle letters if given string is even
//e: 'Hello' >> 'l'  'trip' >> 'ri' 
//p: check if string is less than 3 length, return the string
//if not, check if odd, return string index of string length /2, round up
// else return string index of string length/2 (and +1 index)

function getMiddle(s)
{
  if (s.length <3){
    return s
  } else if (s.length%2 === 1 ){
    return s[Math.ceil(s.length / 2)-1]
  } else {
    return s[Math.ceil(s.length / 2)-1] + s[Math.ceil(s.length / 2)]
  }
}



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