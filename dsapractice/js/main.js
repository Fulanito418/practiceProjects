//DSA


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


const testCase = [2, 1, 5, 1, 3, 2];
const testK = 3;


function sumFunc(x) {
  return x.reduce( (acc, d) => acc + d, 0);
}


const max_sub_array_of_size_k = function(k, arr) {
  
  //variable to store current max
  // let currentMax = sumFunc(arr.slice(0,k))
  let currentMax = 0
  //variable to store possible max
  let possibleMax = 0

  for (let i = 0; i <= arr.length-k; i++) {

    currentMax = sumFunc(arr.slice( i, i+k ))
    console.log(`currentMax = ${currentMax}`)
    possibleMax = Math.max(currentMax, possibleMax)

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