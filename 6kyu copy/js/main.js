//6kyu

//Your order, please

function order(words){
  let wordsArr = words.split(' ');
  let myObj = {};
  let numbers = [1,2,3,4,5,6,7,8,9];
  let orderArr = [];
  
  for (let i = 0; i < wordsArr.length; i ++) {
    for (let j = 0; j < wordsArr[i].length; j++) {
      if (numbers.includes(Number(wordsArr[i][j]))) {
        console.log(wordsArr[i][j])
        myObj[wordsArr[i][j]] = wordsArr[i]
    }
  }
  }
  
  for (key in myObj) {
    orderArr.push(myObj[key])
  }
//   console.log(orderArr.join(' '))
  return orderArr.join(' ')
  
//     for (let j = 0; j < wordsArr[i].length; j++) {
//         console.log(wordsArr[i][j])
//       //        if (numbers.includes(Number(wordsArr[i][j]))){
// //         myObj[wordsArr[i]] = j
//     }
//     }
// //   }
  
// //   console.log(myObj)
}


//Convert string to camel case
// p given a dash/underscore delimeted string into camel casing
// r return string
// e "the-stealth-warrior" >> theStealWarrior
// p 

let testCase = "the_stealth_warrior";

function toCamelCase(str){
  
  let strArr = null;
  
  //check if str contains a dash
  let containsDash = str.includes('-')
  //split the str into an array
  if (containsDash) {
   strArr = str.split('-') 
  } else {
   strArr = str.split('_') 
  }
  
  //take every word starting at index 1 and convert it to uppercase
  
    for (let i = 1; i < strArr.length; i++) {
      strArr.splice(i,1, strArr[i][0].toUpperCase() + strArr[i].slice(1))
    }  
  
  //join the array
    return strArr.join('')
}

console.log(toCamelCase(testCase))

/*
//Replace With Alphabet Position
//p given a string of characters
//r return a string of numbers representing each letter's position in the alphabet
//e "A b c" >> "1 2 3"
//p

function alphabetPosition(text) {
  let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ]
  
  let returnArr = [];
  
  //convert text to uppercase
  let upperText = text.toUpperCase()
  
  //loop through text
  for (let i = 0; i < text.length; i++) {
    //if char is in alphabet, push alphabet position value to return array
    if (alphabet.includes(upperText[i])) {
      returnArr.push(upperText.charCodeAt(i) - 64)
    }
  }
  
  
  return returnArr.join(" ")
}


/*

//Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//p given a string, dash/underscore delimited words into camel case
// first word should only be capitalized if it already was
//r reutrn a string
//e the-stealth-warrior >> theStealthWarrior
//p


const testCase = "the-stealth-warrior";

function toCamelCase(str){
  
  
  //check first letter for uppercase
  let firstLetterIsUpperCase = (str[0] == str[0].toUpperCase());

  //check for dash or underscore
  let containsDash = str.includes('-');

  //if dash then split by -
  //else split by _
  let strArr
  if(containsDash) {
    strArr = str.split('-') 
  } else {
    strArr = str.split('_') 
  }
    
  //function that takes in a word and return word with first letter capitalized
  let camelArr = []
  //that word gets pushed to an empty array
  for (let i = 0; i<strArr.length; i++) {
    if (firstLetterIsUpperCase) {
      strArr[0].split('')[0].toUpperCase() 
      + strArr[0].slice(1)
    }
  }

  //join those words that were pushed into the empty array

}



toCamelCase(testCase)














/*

// Unique In Order
  // p given an array or string
// r return an array 
// e 'AAASSSDDDA' >> [A,S,D,A]
// p

let testCase = 'AAAABBBCCDAABBB';
let testCaseTwo = [1,2,2,3,3];

var uniqueInOrder=function(iterable){
  
  //variable to take on iterable value in array form
  let iterableArr = null;
  //empty array to push value
  let returnArr = [];
  
  //check for typeof iterable, if object, keep
  //if string change to array
  if (typeof(iterable) === 'object') {
    iterableArr = iterable
  } else {
    iterableArr = iterable.split('')
  }
  // console.log(iterableArr)
  //first value in returnArr will be first value in iterableArr
  returnArr[0]=iterableArr[0]
  // console.log(returnArr[0])
  // console.log(iterableArr[1])
  // console.log(returnArr[0]==iterableArr[1])
  

  //need variable for most recently pushed to make sure you don't
  //have any consecutive values that are the same
  //you need this because you wont be able to cross check
  //using returnArr[i-1] because it's still being built
  //will look like returnArr = ['A']
  let justPushed = returnArr[0]
  
  for (i = 1; i < iterableArr.length; i++){
    if (justPushed != iterableArr[i]){
      returnArr.push(iterableArr[i])
    }
    justPushed = iterableArr[i]
  }

  if (iterable.length<1) {
    return [];
  }else{
    return returnArr
  }
  //loop through array and push values into returnArr if they are not
  //consecutive. CHeck returnArr value before pushing into

  // return returnArr

}


console.log(uniqueInOrder(testCase))
console.log(uniqueInOrder(testCaseTwo))


/*

//Take a Ten Minutes Walk
function isValidWalk(walk) {
  //insert brilliant code here
}


/*

//Persistent Bugger
// p: given a positive number
// r: return a number that represents the persistence
// e: 39>> 3*9=27>> 2*7=14>> 1*4=4 return 3
// p


function persistence(num) {
  //variable to show count 
 let count = 0;
   //variable to store num as an Array
 let numArr = String(num).split('')
 //if num is a single digit, return 0
 if (numArr.length==1) {
   return 0
   //if num is not a single digit then multiply all the digits 
   // and check if you get a single digit, if not repeat
 } else {
//     if (String((numArr).reduce((a,c)=>a*c,1)).length > 1) {
   let x = numArr.reduce((a,c)=>a*c,1)
   while (String(x).length > 1) {
     count++
     x = String(x).split('').reduce((a,c)=>a*c,1)
   }
    return count + 1
   } 
     
   }


   /*


// let myObj = {
//   a : 1,
//   b : 2,
//   c : 1
// }

// for (x in object) {
  
// }


//

array = [5, 1, 22, 25, 6, -1, 8, 10]

sequence = [1, 6, -1, 10]

function isValidSubsequence(array, sequence) {
  array.filter(e => {
    sequence.includes(e)
  }) 
  console.log(array)
}


/*
//Replace With Alphabet Position


// p given a string, replace each letter with its position in the alphabet
// r  return a string
// e
// p

function alphabetPosition(text) {
  return text;
}




//Duplicate Encoder
//p given a string, characters may be repeated
// ignore case
//r return a string  
//e "recede"   =>  "()()()"
// if character repeats replace with ) and 
//if not replace with (
//p

function duplicateEncode(word){
  //convert word to an array
let wordArr = word.toLowerCase().split('')
console.log(wordArr)
  //empty array to push parens
let parensArr = [];

  //check for the index of each element
//if the indexOf(e,0) an element is positive
//and indexOf(e,indexOf(e)+1) is negative
//then we know for sure it appears once
wordArr.forEach(e => {
  if (wordArr.indexOf(e) >= 0 && 
      wordArr.indexOf(e,wordArr.indexOf(e)+1)<0) {
    parensArr.push('(')  
  } else {
    parensArr.push(')')  
  }
   
                })
return parensArr.join('')
}


/*
//Find The Parity Outlier
//p given an array of all positives and one odd or vice versa
//r return a number, the 'outlier'
//e [2, 4, 6, 8, 9] >> 9
//p 

let testArr = [2, 4, 0, 100, 4, 11, 2602, 36];

function findOutlier(integers){
  //create a variable for pushing evens
  let evenArr = [];
  //create a variable for pushing odds
  let oddArr = [];

  //loop through array and push evens to evenArr and vice versa
  testArr.forEach(e => {
    if (e % 2 == 0) {
      evenArr.push(e)
    } else {
      oddArr.push(e)
    }
  })
  //check length of evenArr and oddArr, return array[0] with length 1
  if (evenArr.length == 1) {
    return evenArr[0]
  } else {
    return oddArr[0]
  }
}


console.log(findOutlier(testArr))


/*
//Bit Counting


//p given an integer, always positive
//r return a number representing the number of bits that are equal to one
//e 1234 >> 10011010010 in binary so return 5
//p

let testNum = 1234;

var countBits = function(n) {
  //variable to store the binary version of n
  let binaryReturn = Math.abs(n).toString(2);
  //return that sum of all the bits after splitting to turn into an array
  return binaryReturn.split('').reduce( (a,c) => a + +c,0)
};


console.log(countBits(testNum))



/*
//Stop gninnipS My sdroW

//p given a string with one or more words
//r return a string but with any word 5 letters or longer, reversed
//e "Hey fellow warriors" >> "Hello wollef sroirraw"
//p 

let testString = "Hey fellow warriors";

function spinWords(string){
  //create an empty array to push words
  let spunWords = [];
  //take string and change into an array
  let stringArr = string.split(' ')
  //loop thorugh array and check if word is 5 or longer
  stringArr.forEach(element => {
    if(element.length >= 5) {
      spunWords.push(element.split('').reverse().join(''))
    } else {
      spunWords.push(element)
    }
  });

  //console.log(spunWords.join(' '))
  return (spunWords.join(' '))
}

spinWords(testString)



/*
//Sum of Digits / Digital Root
//p given a number, n, could have one or more digits
//r return a single number that represents the sum of all the digits in
// that number (n)
//e 1928 >> 1 + 9 + 2 + 8 >> 20
//p

let testNum = 132189

function digital_root(n) {
  //convert n into a string then an array and use reduce
  let nArr = String(n).split('')
  let sumArr = nArr.reduce((a,c)=>a + +c,0)
  
  // return sumArr
  
  if (String(sumArr).length == 1) {
    return sumArr
  } else {
    return digital_root(Number(sumArr))
  }

  }

  


console.log(digital_root(132189))

//digital_root(testNum)

/*
//p: given a string, letters, upper and lower, and numbers
//r: return a number
//e: 'lucky' >> 0  'bases' >> 1
//p

let testString = 'aA11bcb';

function duplicateCount(text){
  //change string to lowercase
  //change string to array

  let lowerTextArr = text.toLowerCase().split('')
  
  //return lowerTextArr
  //create duplicateArr
  
  let duplicatesArr = [];

  for (let i = 0; i<lowerTextArr.length; i++) {
    //if not in duplicatesArr already and another copy exists in lowerTextArr
    //then push to duplicates. Check using indexOf
    if (!duplicatesArr.includes(lowerTextArr[i]) && lowerTextArr.indexOf(lowerTextArr[i], i+1) > 0) { 
      duplicatesArr.push(lowerTextArr[i])
    }
    
  }
  return duplicatesArr.length
  //loops through array, and check if it's in duplicatesArr

}

console.log(duplicateCount(testString))

/*

//Array.diff

function arrayDiff(a, b) {
  //console.log(a)
  //console.log(b)
  for (j=0; j<b.length; j++) {
   for (i=0; i<a.length; i++) {
    if (a[i] === b[j]) {
      a.splice(i,1)
    }
     if (a[i] === b[j]) {
      a.splice(i,1)
  } 
  }
 
}
   return a
  }

/*
// p given an array of integers, always one integer that appears
// an odd number of times
//r return number that appears an odd number of times
//e [1,1,2] >> 2 [0,1,0,1,0] >> 0 
//p

let testVal = [20,1,1,2,2,3,3,5,5,4,20,4,5]
//let testVal = [1,1,2]
function findOdd(A) {
    
  let count = 0;
  A.sort((a,b) => a-b)

  //if number and one after are the same add one to count
  
  for (let i = 0; i < A.length; i++) {
    
    //console.log(A[i] == A[i+1])
   
    if (A[i] == A[i+1]) {
      //console.log(`${A[i]} ${A[i+1]}`)
      count++
    } else if (A[i]!=A[i+1]) {
      count++
      //console.log('count: ' + count)
      if (count % 2 == 1){
        return A[i]
        break;
      } 
      count = 0 
    }
  }
}


/*
//Create Phone Number
//p: given an array of 10 integers
//r: return a string in the form of a phone number
//e: [5,5,5,2,3,4,5,6,7,8]  >>  "(555) 234-5678"


function createPhoneNumber(numbers){
  //variables for each part of the number
  let areaCode = (numbers.slice(0,3).join(''))
  let telPrefix = (numbers.slice(3,6).join(''))
  let lineNumber = (numbers.slice(6).join(''))
  
  return `(${areaCode}) ${telPrefix}-${lineNumber}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))




/*
//Who likes it?
//p: given an array with names, can include 0 values
//r: return string
//e: ['Max', 'Phil'] >> 'Max and Phil like this'
//p

function likes(names) {
  //store length of names array
  let namesLength = names.length
  //console.log(namesLength)
  //if namesLength is 0 >> 'no one likes thsi'
  if (namesLength == 0) {
    return 'no one likes this'
    console.log('no one likes this')
  } else if (namesLength == 1) {
    // return `${names[0]} likes this`
  } else if (namesLength == 2) {
    // return `${names[0]} and ${names[1]} like this`
  } else if (namesLength == 3) {
    //return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    //return `${names[0]}, ${names[1]} and ${namesLength - 2} others like this`
  }
}


/*
//Multiples of 3 or 5
//p given a natural number
//r return a number representing the sum of all the numbers
//below the given value that are multiples of 3 or 5
//e  10 >> 3 + 5 + 6 + 9 = 23
//p

function solution(number){
  //variable to keep track of added values
  //empty array to push values
  //let numArr = []
  let counter = 0;
  
  for (let i = 1; i < number; i++ ) {    
    //if number % 3 or 5 is zero, then add to counter
    if(i % 3 == 0 || i % 5 == 0) {
      //console.log(i)
      //numArr.push(i)
      counter+= i
    }
      
    }
    //console.log(numArr)
    return counter
  }

console.log(solution(10))


/*
//Shortest steps to a number
//prep
//p: a step can be defined as +1 or *2. Starts from 1 
//r: return shortest number of steps to land on num
//e: to reach 3 >>  1 + 1 + 1 takes two steps 
// to reach 5 >> 1 *2 *2 + 1 takes three steps
//p: create a counter and +1 each additional loop
//loop *2 without going over


function shortestStepsToNum(num) {
  let counter = 0
  let maxNum = num
  let startNum = 1

  for (let i = 1; startNum*2 < maxNum; i ++) {
    console.log(`loop: ${i} counter: ${counter} startNum: ${startNum}`);
    startNum *= 2
    counter += 1
  }
  console.log(`ending counter: ${counter}`);
  console.log(`ending startNum: ${startNum}`); 
}

shortestStepsToNum(10)
*/