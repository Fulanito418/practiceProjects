//6kyu



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