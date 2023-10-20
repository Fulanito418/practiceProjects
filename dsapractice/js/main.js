//DSA
/*
You are reading a Build Your Own Story book. It is like a normal book except that choices on some pages affect the story, sending you to one of two options for your next page.

You start reading at page 1 and read forward one page at a time unless you reach a choice or an ending.

The choices are provided in a list, sorted by the page containing the choice, and each choice has two options of pages to go to next. In this example, you are on page 3, where there is a choice. Option 1 goes to page 7 and Option 2 goes to page 8.

choices1_1 = [[3, 7, 8], [9, 4, 2]] => [[current_page, option_1, option_2], ...]
The ending pages are also given in a sorted list:

endings1 = [6, 15, 21, 30]

These choices are really stressing you out, so you decide that you'll either always pick the first option, or always pick the second option.

Given a list of endings, a list of choices with their options, and the choice you will always take (Option 1 or Option 2), return the ending you will reach. If you get stuck in a loop, return -1.

Example:
stories(endings1, choices1_1, 1) (always Option 1)
  Start: 1 -> 2 -> 3(choice) -> 7 -> 8 -> 9(choice) -> 4 -> 5 -> 6(end) => Return 6

stories(endings1, choices1_1, 2) (always Option 2)
  Start: 1 -> 2 -> 3(choice) -> 8 -> 9(choice) -> 2 -> 3(choice) -> 8 ... => Return -1

Additional inputs:
choices1_2 = [[3, 14, 2]]
choices1_3 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]]
choices1_4 = [[2, 10, 15], [3, 4, 10], [4, 3, 15], [10, 3, 15]]

endings2 = [11]
choices2_1 = [[2, 3, 4], [5, 10, 2]]
choices2_2 = []

endings3 = [4, 11]
choices3_1 = [[10, 6, 8]]

Complexity Variable:
n = number of pages
(endings and choices are bound by the number of pages)

All Test Cases :
stories(endings1, choices1_1, 1) => 6
stories(endings1, choices1_1, 2) => -1
stories(endings1, choices1_2, 1) => 15
stories(endings1, choices1_2, 2) => -1
stories(endings1, choices1_3, 1) => 21
stories(endings1, choices1_3, 2) => 30
stories(endings1, choices1_4, 1) => -1
stories(endings1, choices1_4, 2) => 15
stories(endings2, choices2_1, 1) => 11
stories(endings2, choices2_1, 2) => -1
stories(endings2, choices2_2, 1) => 11
stories(endings2, choices2_2, 2) => 11
stories(endings3, choices3_1, 1) => 4
stories(endings3, choices3_1, 2) => 4
*/

"use strict";


const endings1 = [6, 15, 21, 30];
const choices1_1 = [
  [3, 7, 8],
  [9, 4, 2]
];

const choices1_2 = [
  [3, 14, 2]
];
const choices1_3 = [
  [5, 11, 28],
  [9, 19, 29],
  [14, 16, 20],
  [18, 7, 22],
  [25, 6, 30]
];
const choices1_4 = [
  [2, 10, 15],
  [3, 4, 10],
  [4, 3, 15],
  [10, 3, 15]
];

const endings2 = [11];
const choices2_1 = [
  [2, 3, 4],
  [5, 10, 2]
];
const choices2_2 = [];

const endings3 = [4, 11];
const choices3_1 = [
  [10, 6, 8]
];



function stories(endings, choices, option) {
  
  
  //create a variable representing max ending page
  const maxPage = Math.max(...endings); //
  
  //list of past choices array
  const pastChoices = [];
  const choicePages = {};
  
  
  for (let i = 0; i < choices.length; i++) {
    choicePages[choices[i][0]] = choices[i][option];
  }

  for (let i = 1; i <= maxPage; i++ ) {
    
    //check if ending
    if (endings.includes(i)) {
      return i;
    }
    //check if in loop
    
    
    if (choicePages[i]) {
      
      pastChoices.push(choicePages[i])
      //check if in loop
      if (pastChoices.includes(choicePages[i])) {
        return -1;
      }
      
      i = choicePages[i] // 7 

    }
    
    
  }
  
  
  //cross check counter with list of pages that represent choice pages
  
  
  //if a match, then go with the option given >> change counter to choice option
  
  //every time there is a match .. push that match into the past choices arr
  
  // if choice has been made more than once, you're in a loop
  
  //counter matches ending array >> ending reached
  
  
  
  
  
  return "done";
}

// console.log(storyTime(endings1, choices1_1, 1));



// stories(endings1, choices1_1, 2) => -1
console.log(stories(endings1, choices1_1, 2))


// stories(endings1, choices1_2, 1) => 15
// stories(endings1, choices1_2, 2) => -1
// stories(endings1, choices1_3, 1) => 21
// stories(endings1, choices1_3, 2) => 30
// stories(endings1, choices1_4, 1) => -1
// stories(endings1, choices1_4, 2) => 15
// stories(endings2, choices2_1, 1) => 11
// stories(endings2, choices2_1, 2) => -1
// stories(endings2, choices2_2, 1) => 11
// stories(endings2, choices2_2, 2) => 11
// stories(endings3, choices3_1, 1) => 4
// stories(endings3, choices3_1, 2) => 4


// const endings1 = [6, 15, 21, 30];
// const choices1_1 = [
//   [3, 7, 8],
//   [9, 4, 2]
// ];
//Flipping the Matrix

function flippingMatrix(matrix) {
  let mlength = matrix.length
  let maxSum = 0
  let currentMax = -Infinity
  
  for (let r = 0; r < mlength/2; r++) {
      for (let c = 0; c < mlength/2; c++) {
          
          let subValue = [
              matrix[r][c],
              matrix[r][mlength-1-c],
              matrix[mlength-1-r][c],
              matrix[mlength-1-r][mlength-1-c]
          ]
          currentMax = Math.max(...subValue)
          maxSum+=currentMax
      }
  }
  return maxSum

}

//given a matrix
//return max sum possible that can be created in the top left quartile of input

//double loop r and c
//both start at 0
//take max of the 4 possible mirror images of each input

/*
//diagonalDifference
function diagonalDifference(arr) {
  let primaryDiagonal = 0 
 let secondaryDiagonal = 0
 
 for (let row = 0; row < arr.length; row++) {
     primaryDiagonal += arr[row][row]
     secondaryDiagonal += arr[row][arr.length-(row+1)]
 }
 
 return Math.abs(primaryDiagonal-secondaryDiagonal)


// }
//            arr[row][col]
// [1,2,3] >> arr[0][0] [row][col]
// [4,5,6] >> arr[1][1]
// [7,8,9] >> arr[2][2]

// [1,2,3] >> arr[0][arr.length-(row+1)]
// [4,5,6] >> arr[1][arr.length-(row+1)]
// [7,8,9] >> arr[2][arr.length-(row+1)]

// given a square matrix array of i x j
//return the absolute difference of the sume of the diagonals



}
/*
//countingSort
function countingSort(arr) {
    
  let freqArr = new Array(100).fill(0)


  for (let i = 0; i < arr.length; i++) {
      freqArr[ arr[i] ]++ 
  }
  
  return freqArr
}

//given an array of numbers
//return a frequency array, where each values' index represents how many times that index appears in the input arr

//[1,1,3,2,1]
//return [0, 3, 1, 1]

//create freqArr = new Array(100)
//loop through input arr
// go in freqArr[ input[i] ] = freqArr[ input[i] ] + 1

//return freqArr


/*
//lonelyinteger
function lonelyinteger(a) {
    
  a.sort( (a,b) => a - b)
  if(a[0]!=a[1]) {
      return a[0]
  }
  if(a[a.length-2]!=a[a.length-1]){
      return a[a.length-1]
  }
  
  
  for(let i = 0; i < a.length - 2; i++){
      let j = i+1
   if(a[i] != a[j] && a[i+1] != a[j+1]) {
       return a[i+1]
   } 
   }
          
  
}

//given an array of integers, they all repeat except for 1
//return the integer that appears once

//[3,4,5,3,4]
//we can sort the array first

//[3,3,4,5,3,5] >> [3,3,3,4,5,5]
                      //   ^ ^
                      //   i j 
//[3,4,5,3,4] >> [3,3,4,4,5]
                  //  ^ ^
                  //  i j  
//use two pointers i,j
//if i and j are equal, have them move up one space
//if i and j are not equal, move up one, if they are still not equal, return i

//while loop
//for loop i < arr.length - 2
//if i === j,
//if i != j && and i+1 != j+1
//return i+1

//nothing returns from that, return last element in arr 

/*
//findMedian
function findMedian(arr) {
  //sort
  arr.sort((a,b)=>a-b)
  return arr[Math.floor(arr.length/2)]
  }
/*
//Time Conversion
function timeConversion(s) {
  let amTime = s.includes('A')
  let pmTime = s.includes('P')
  
  // console.log('amtime '+amTime, 'pmtime '+pmTime)

  let sArr = s.split(':')
  // console.log(sArr)
  //handle 12
  if(Number(sArr[0]) === 12 && amTime){
      sArr[0] = '00'        
  }
  if(Number(sArr[0]) != 12 && pmTime){
      sArr[0] = String(Number(sArr[0]) + 12)   
  }
  console.log('hello')
  return sArr.join(':').slice(0,8)
  
  
}

// check if am or pm
//keep in variable

//split string by :
// check [0] == 12
// check if 12 
// YES? if AM, set to 00
// NO? leave as 12
// join by :
// then slice (0, 8) and return 

// Not 12?
// check am? 
// Yes? keep time
// No? pm >> add 12

// 12:01:00AM >> 00:01:00
// 03:01:00AM >> 03:01:00
// 11:01:00AM >> 11:01:00
// 12:01:00PM >> 12:01:00
// 01:01:00PM >> 13:01:00
// 11:01:00PM >> 23:01:00
/*
//Mini-Max Sum
function miniMaxSum(arr) {
  // Write your code here
  let arrLen = arr.length
  if (arr.length<=4){
      let sum = arr.reduce((acc,cur)=> acc + cur,0)
      console.log(`${sum} ${sum}`)
  } else {
      arr.sort((a,b)=>a-b)
      let minSum = arr.slice(0,4).reduce((acc,cur)=> acc + cur,0)
      let maxSum = arr.slice(arrLen-4).reduce((acc,cur)=> acc + cur,0)
      console.log(`${minSum} ${maxSum}`)
  }

}

//given an array of nums
//return space separated two integers

//if arr is 4 or less, reduce and print them

// if not, sort, slice and reduce first 4,
//slice and reduce last 4
//print


/*
//Plus Minus
function plusMinus(arr) {
  let arrLength = arr.length
  let [posCount, zeroCount, negCount] = [0,0,0]
  
  arr.forEach(num=> {
      if( num === 0 ){
          zeroCount++
      } else if(num>0) {
          posCount++
      } else {
          negCount++
      }
  })
  
  console.log((posCount/arrLength).toFixed(6))
  console.log((negCount/arrLength).toFixed(6))
  console.log((zeroCount/arrLength).toFixed(6))
}

//first take length of arr
//loop through arr
//keep track of positives, 0, negatives
//print pos, negatives and 0s ratio up to 6 decimal places

/*
//2dArrayDS

function hourglassSum(arr) {
  let returnSum = -Infinity
  let currentSum = 0
  
  for(let r = 0; r <=3; r++){
      for(let c = 0; c<=3; c++){
          currentSum = arr[r][c] + arr[r][c+1] + arr[r][c+2] + arr[r+1][c+1] + arr[r+2][c] + arr[r+2][c+1] + arr[r+2][c+2]
          console.log(currentSum + 'currentSum')
          returnSum = Math.max(returnSum, currentSum )
          console.log(returnSum)
      }
  } 
  return returnSum
}


// [
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0 ],
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 2, 4, 4, 0 ],
//   [ 0, 0, 0, 2, 0, 0 ],
//   [ 0, 0, 1, 2, 4, 0 ]
// ]

//return the highest sum of an hourglass

// [0][0]  [0][1]  [0][2]
//         [1][1]
// [2][0]  [2][1]  [2][2]

// row = 0 and column = 0
// [r][c]  [r][c+1]  [r][c+2]
//         [r+1][c+1]
// [r+2][c][r+2][c+1][r+2][c+2]

//sum of 7
// arr[r][c] + arr[r][c+1] + arr[r][c+2] + arr[r+1][c+1] + arr[r+2][c] + arr[r+2][c+1] + arr[r+2][c+2]


//continue looping until you reach the end
//meaning row is 3 and column is 3



/*
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(numsArr) {
  console.log(numsArr)
}



/*
//Search Insert Position
var searchInsert = function(nums, target) {
  
    
  let left = 0
  let right = nums.length - 1
  let mid;
  
  while (left <= right) {
      mid = left + Math.floor( (right - left) / 2 )   
      //console.log(`mid: ${mid}`)
      
      if ( nums[mid] === target ) {
          console.log('we found 1')
          return mid
      } else if ( nums[mid] < target) {
          left = mid + 1
          //if mid is less than the target, AND mid + 1 is higher than the target, then return mid + 1
          if ( nums[mid + 1] > target || nums[mid + 1] === target || nums[mid + 1] === undefined ) {
              return mid + 1
          }
          
      } else {
          //console.log('mid here '+mid)
          right = mid - 1
          if ( nums[mid - 1] === target ) {
              // console.log('mid here '+mid)
              return mid - 1
          } else if (nums[mid - 1] < target || nums[mid - 1] === undefined ) {
              return mid          
          }
          
      }
          
      }
  }

/*
//First Bad Version
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;
      let mid;
      
      while (left <= right) {
          
          mid = left + Math.floor((right-left)/2)
      
          if (isBadVersion(mid)) {
              
              if (isBadVersion(mid-1)) {
                  right = mid - 1   
              } else {
                  return mid    
              }
              
          } else {
              left = mid + 1
          }
  }
}
}


/*
//Binary Search
let search = function (nums, target) {
	
	let left = 0
	let right = nums.length -1
	
	while (left <= right  ) {
		let mid = left + Math.floor((right - left) / 2);
		if ( nums[mid] === target ){
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};





/*
//Extract the domain name from a URL

function domainName(url){
  return url.replace('http://','').replace('https://','').replace('www.','').split('.')[0]
  
}


/*
//'Fizz Buzz'
// // Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// //integer

// //console log the number
// //if number % 3 >> print Fizz
// //if number % 5 >> print Buzz
// //if number % 3 && number % 5
// //>> print Fizz Buzz

// //Example
// //Input: [1,2,3,4,5,6,7,8,9,10,..,15]
// // 1 >> 1
// // 2 >> 2
// // 3 >> Fizz
// // 4 >> 4
// // 5 >> Buzz
// // 6 >> Fizz
// // 7 >> 7
// // 8 >> 8
// // 9 >> Fizz
// // 15 >> Fizz Buzz

function fizzBuzz(nums) {
  for (let i = 1; i <= nums; i++) {
    
    if (i % 5 === 0 && i % 3 === 0 ) {
      console.log('Fizz Buzz')
    } else if ( i % 3 === 0 ) {
      console.log('Fizz')
    } else if ( i % 5 === 0 ) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
    
  }
}

let testCase = 20;
console.log(fizzBuzz(testCase));

// console.log("hello");




/*
// For a = [25, 35, 872, 228, 53, 278, 872], the output should be solution(a) = 4.

// There are 4 pairs of digit anagrams:

// a[1] = 35 and a[4] = 53 (i = 1 and j = 4),
// a[2] = 872 and a[5] = 278 (i = 2 and j = 5),
// a[2] = 872 and a[6] = 872 (i = 2 and j = 6),
// a[5] = 278 and a[6] = 872 (i = 5 and j = 6).


let testCase = [25, 35, 872, 228, 53, 278, 872];

console.log(solution(testCase))


function solution(a) {
  let myObj = {}
  function sortNums(num) {
      num.sort((a,b)=> a-b)
      return num.join('')
  }
  
  
  let count = 0
  
  for (let i = 0; i < a.length; i++) {
      for (let j = i+1; j < a.length; j++) {
          
        let sortedI = sortNums(String(a[i]).split(''))
        let sortedJ = sortNums(String(a[j]).split(''))
        //console.log(sortedI, sortedJ, sortedI == sortedJ)
          
        if (sortedI == sortedJ) {
          console.log(sortedI, sortedJ, sortedI == sortedJ)
          let matchingPair = sortNums([i, j])
          myObj[matchingPair] = true
        }
        
          }   
      }
      return Object.keys(myObj).length
  }//last
  
  
  //given an array of integers
  
  //return number presenting number of digit anagrams
  
  //loop through array
  //compare all of them
  
  //double loop
  
  //if lengths are different, next
  //if same length, sort by value
  //compare if equal
  //increa count by 1




/*
let myArr = [1,2,3,4,5,6,7,8,9,10]


let myWindow = []
let count = 0

for (let i = 0; i < myArr.length; i++) {
  let currentVal = myArr[i]

  if (myWindow.length < 3) {
    count += currentVal
    myWindow.push(currentVal)
  } else {
    // console.log(myWindow, count)
    let shiftVal = myWindow.shift()
    myWindow.push(currentVal)
    count -= shiftVal
    count += currentVal
    
  }
  
  if (myWindow.length===3) {
    console.log(myWindow, count)
  }

}





/*
let myData = [
  {name: "baseball", price: 10},
  {name: "glove", price: 15},
  {name: "bat", price: 20}
]

function arrayPractice() {

}

console.log("hello")
/*
//Test
let maxX = 5;
let maxY = 8;
let data = [ [1, 2], [2, 3], [3, 1], [4, 6], [5, 8] ];
// let data = [ [5, 8] ]



function sayHello(maxX, maxY, data) {

  //new array
  let newArr = new Array();

  for (let i = 0; i < data.length; i++) {
    let currentX = data[i][0]
    let currentY = data[i][1]
    // console.log(currentX, currentY)
    // this will set newArr[2] to "-*"
    // console.log(data[i][0])
    newArr[currentY] = "+"+"-".repeat(currentX*6)+"*"
    // newArr >> [ empty, empty, ["-*"], ["--*"]  ]
  }
  // console.log(newArr)
  for (let i = maxY + 1; i >= 0; i--) {
    if (i == maxY + 1 || i == 0) {
      console.log('+-----+-----+-----+-----+-----+-----+')
    } else if (newArr[i] == undefined) {
      console.log('+' + '------'.repeat(maxX)) 
    } else {
      console.log(newArr[i])
    }
  }
  //check for index that does not exist 
  //if dne print XXXXX
  // for(let i = newArr.length; i >= 0; i--) {
  //   print(newArr[i])
  // } 
}

sayHello(maxX, maxY, data)



// Write a program, in any language, that will display an ASCII chart given the following data
// data = [(1,2), (2, 3), (3, 1), (4, 6), (5, 8)].
// You should be able to print the surrounding components of the chart and then place an * where each data point is specified in the data set. You do not need to print the X and Y legends but that would be helpful. You are given the max x and max y but if you can calculate that it would be helpful.

// Online auction graph display
// x axis is time
// y axis is price
// Title item
//
// Given a two-dimension array graph the price over time
//
//   +-----+-----+-----+-----+-----+-----+
//   +  - - - - - *      +
//   +  - - - - -        +
//   +            *      +
//  $+                   +
//   +                   +
//   +      *            +
//   +   *               +
//   +  - - - *          +
//   +-----+-----+-----+-----+-----+-----+
//        time
//
//  max x = 5
//  max y = 8
//  data = {(1,2), (2, 3), (3, 1), (4, 6), (5, 8)}


//Given max x, max y and data = []
//Test
// maxX
// maxY
// data = [ [1,2], [2, 3], [3, 1], [4, 6], [5, 8] ]

//console.log the chart

//




/*


// p given an array of integers
// r return a number that represents the number of good pairs
// e [1,2,3,1,2] >> you have a total of 2 good pairs (0,3) (1,4)
// p 



//Leet 1512




// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100



var numIdenticalPairs = function(nums) {

  //create a hash table to keep track of nums and their occurences
  //create varirable to keep track of goodPairs
      const myHash = {}
      let goodPairs = 0
  //loop through nums and check if key exists in hash, if it does increase key value by one, if not create new key and set it equal to 1
      for (let i = 0; i < nums.length; i++) {
          if (myHash[nums[i]]) {
              myHash[nums[i]]++
          } else {
              myHash[nums[i]] = 1
          }
      }
      console.log(myHash)
      
      for (const key in myHash) {
          let keyValue = myHash[key] - 1
          goodPairs += ((keyValue)*(keyValue+1))/2
      }
      return (goodPairs)
  
  //take key values use n(n+1)/2 to figure out how many goodPairs each would make and increase goodPairs by that value
  
      
      
  
  };

/*

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Input: s = "a)b(c)d"
// Output: "ab(c)d"


// Valid string?? "(abc)"
// Not Valid:  "((abcd)"
// **/

// const testCase = "a)b(c)d"
// //expected "ab(c)d"
// // stack = []

// function validString (s) {
  
//   //variable that hold sArr
//   let sArr = s.split('') //[a, b, "", a]
//   console.log (sArr)
//   //stack you add and remove from the end
//   let stackArr = []; //should keep track of bad index

//   for (let i = 0; i < sArr.length; i++) {
//     if( sArr[i] == "(" ) {
//       stackArr.push(i)
//     } else if ( sArr[i] == ")" ) {
    
//       if (stackArr.length > 0) {
//         stackArr.pop() 
//       } else {
//         sArr[i] = ""
//       }
//     }
//   }

//   for (let j = 0; j < stackArr.length; j++) {
//     //create varaible to keep track of indices to remove in sArr
//     let sArrRemoveIndex = stackArr[j]
//     //sArr[sArrRemoveIndex] = ""
//     sArr[sArrRemoveIndex] = ""
//   }
  
//   return sArr.join('')
  
//   };



// //validString?? "((hello))" valid
// //validString?? ")(hello)(" not valid

// console.log(validString(testCase));

// */






//NEXT ONE ######

// Problem Statement
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".
// Example 3:

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
// Example 4:

// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".







/*
// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// Example 2:

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// Example 3:

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].






const testCase1 = [2, 1, 7, 2, 3, 2] 
const testCaseS1 = 7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// const testCase2 = [2, 1, 5, 2, 8]
// const testCaseS2 = 7
// // Output: 1
// // Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// const testCase3 = [3, 4, 1, 1, 6]
// const testCaseS3 = 8
// // Output: 3
// // Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].




// ##### START ####
const smallest_subarray_sum = function(s, arr) {
    
//variable for window start
let windowStart = 0
//variable for window sum
let windowSum = 0
//variable for window length
let minLength = Infinity
  

//next, lets start adding up elements in the arr parameter until it is >=7

for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

  windowSum += arr[windowEnd] //add the next element


  //lets see the current window
  console.log(arr.slice(windowStart, windowEnd + 1))

  // shrink the window as small as possible until the 'windowSum' is smaller than 's'
  while (windowSum >= s) {
    minLength = Math.min(minLength, windowEnd - windowStart + 1);
    console.log("minLength: "+minLength)
    windowSum -= arr[windowStart]
    console.log("windowSum: "+windowSum)
    windowStart += 1 //sliding the window start one to the right
    console.log("windowStart = " + windowStart)
  }
  
}

if (minLength === Infinity) {
  return 0;
}

return minLength


}

  
  

console.log(smallest_subarray_sum(testCaseS1,testCase1))









// const smallest_subarray_sum = function(s, arr) {

//   let windowLength = 1;
//   let subArraySum = 0
//   //array that we can reduce
//   let subArrayReduce = [];
//   let windowMoves = arr.length

//   //checking for sums that are greater than or equal to 's'
  
//   for (let i = 0; i < windowMoves; i++) {

//     console.log(`windowMoves: ${windowMoves}`)
//     console.log(`i value: ${i}`)
//     //if the sum of the subarray is greater than equal to 's'
    
//     subArraySum += arr[i]

//     subArrayReduce.push(arr[i])

//     // console.log(`subArraySum: ${subArraySum}`)
//     console.log(`subArrayReduce: ${subArrayReduce}`)

//     //first if i reaches the last elements arr.length - 1, then i needs to be reset and the windowMoves need to go from arr.length to arr.length --
    

//     //or what is if also checks length of array that is getting summed, if length is equal to windowLength then we should check, if condition not met then reset subArraySum to zero
//     if(subArrayReduce.length == windowLength) {
//       let sum = subArrayReduce.reduce((acc,e)=> acc+e)

//       if (sum >= s) {
//         console.log(`subArraySum winner: ${subArraySum}`)
//       } else {
//         subArrayReduce = []
//         sum = 0
//       }
//     }

//     if (i == windowMoves - windowLength) {
//       console.log(`reached the last index of: ${i}`)
//       i = 0
//       windowLength++
//       windowMoves--
//     }
    
    
//   }

  
//   //slice 'arr' by i, i+1 >> window size of length 1 
  
  
//   //


// };

//console.log(smallest_subarray_sum(testCaseS1,testCase1))




/*
// Maximum Sum Subarray of Size K


// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1
// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Example 2
// Input: [2, 3, 4, 1, 5], k=2 
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

// P Given and array of positive numbers and a positive number 'k' to find the largest possible contiguous subarray of size 'k'
// R Return the array
// E
// P


const testCase = [2, 1, 5, 1, 3, 2, 10, 50];
const testK = 3;


function sumFunc(x) {
  return x.reduce( (acc, d) => acc + d, 0);
}


const max_sub_array_of_size_k = function(k, arr) {
  
  //variable to store current max
  // let sumSubArrayKLength = sumFunc(arr.slice(0,k))
  let sumSubArrayKLength = 0
  //variable to store possible max
  let possibleMax = 0
  //store i value to be able to identify starting index of k length subarray that creates max sum
  let startingIndexOfMax = 0

  for (let i = 0; i <= arr.length-k; i++) {

    console.log("i value = " + i)

    sumSubArrayKLength = sumFunc(arr.slice( i, i+k ))
    console.log(`sumSubArrayKLength = ${sumSubArrayKLength}`)
    
    possibleMax = Math.max(sumSubArrayKLength, possibleMax)
    console.log(`possibleMax = ${possibleMax}`)

    if (possibleMax >= sumSubArrayKLength) {
      startingIndexOfMax = i
    }

    console.log("starting index of max:" + startingIndexOfMax)
    
  }
  return possibleMax

};

console.log(max_sub_array_of_size_k(testK, testCase))





/*

// class Stack {
//   constructor(storage, count) {

//   }
// }


// Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:



// p given a list of stock prices (Apple) called stock_prices
// the index represents the time in minutes since opening bell (9:30 am)
// values are price in US dollars for one share
// stock_price[45] >> 502 (this means that the price of one share of Apple was $502 45 mintues after opening bell, i.e. 10:15 am)

// r return the best profit you could have made from one purchase and one sale at any point 
// e [500, 510, 520] >> return 20

// Example:
// const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);

// Returns 6 (buying for $5 and selling for $11)

// p


const testCase = [10, 7, 5, 8, 11, 9];
// const testCase = [10, 9, 8, 7, 6, 5];

function getMaxProfit(stockPrices) {
  
  //variables for max and min of input
  const maxPrice = Math.max(...stockPrices);
  const minPrice = Math.min(...stockPrices);
  const maxPriceIndex = testCase.indexOf(maxPrice)
  const minPriceIndex = testCase.indexOf(minPrice)
  const validTrades = [];

  console.log(`Max: ${maxPrice}, Min: ${minPrice}`)
  console.log(`Max Index: ${maxPriceIndex}, Min Index: ${minPriceIndex}`)
  
  //What if max price happened at an earlier time (lower index) than the min?
  // if (maxPriceIndex > minPriceIndex) {
  //   return maxPrice - minPrice
  // } 


  //all possible valid trades
for (let i = 0; i < testCase.length; i++) {
  
  for (let j = 1; j < testCase.length; j++) {

    if (i<j && testCase[j]-testCase[i] > 0) {
      //then push into validTrades
      validTrades.push(
      [ j,
        i,
        testCase[j]-testCase[i] ])
    }
  }
}

console.log(validTrades)

validTrades.sort((a,b) => b[2] - a[2])

if (validTrades.length == 0) {
  return 0
} else {
  return validTrades[0][2]
}




}







console.log(getMaxProfit(testCase))

*/
