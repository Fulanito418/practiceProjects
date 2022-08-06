//DSA



/**
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Input: s = "a)b(c)d"
Output: "ab(c)d"


Valid string?? "(abc)"
Not Valid:  "((abcd)"
**/

const testCase = "a)b(c)d"
//expected "ab(c)d"
// stack = []

function validString (s) {
  
  //variable that hold sArr
  let sArr = s.split('') //[a, b, "", a]
  console.log (sArr)
  //stack you add and remove from the end
  let stackArr = []; //should keep track of bad index

  for (let i = 0; i < sArr.length; i++) {
    if( sArr[i] == "(" ) {
      stackArr.push(i)
    } else if ( sArr[i] == ")" ) {
    
      if (stackArr.length > 0) {
        stackArr.pop() 
      } else {
        sArr[i] = ""
      }
    }
  }

  for (let j = 0; j < stackArr.length; j++) {
    //create varaible to keep track of indices to remove in sArr
    let sArrRemoveIndex = stackArr[j]
    //sArr[sArrRemoveIndex] = ""
    sArr[sArrRemoveIndex] = ""
  }
  
  return sArr.join('')
  
  };



//validString?? "((hello))" valid
//validString?? ")(hello)(" not valid

console.log(validString(testCase));








//NEXT ONE ######################################################################

Problem Statement
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
Example 4:

Input: String="cbbebi", K=10
Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".





















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