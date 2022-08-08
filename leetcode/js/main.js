//leetcode


//20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//p  given a string of characters that may include () {} []
//r return true or false
//e "()" true 
//     "{]" false
//p

//object to store opening pair for closing tags
const openingSymbolForClosing = {
    ')' : '(',
    '}' : '{',
    ']' : '['
}

var isValid = function(s) {
   
   
   //we can use a stack to keep track of any opening characters
   //i.e.  (, {, [
   //variable that represents the stack that we can push to
   let myStack = [];
   
   
   //loop through string
   //if character is an opening symbol then push it to the stack
   for (let i = 0; i < s.length; i++) {
       if (s[i]== '(' || s[i]== '{' || s[i]== '[') {
           myStack.push(s[i])    
           console.log(myStack)
   //if character is a closing tag then check if last character in stack is its opening pair, if so pop it off the stack
       } else if ( myStack[myStack.length - 1] == openingSymbolForClosing[s[i]] ) {
           myStack.pop()
           console.log(myStack)
       } else {
           myStack.push(s[i])    
       }
   }
   //check stack, if empty return true (valid), if not return false
   
   return myStack.length == 0 ? true : false
   
};





/*
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.

Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.

Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 
// p given an array of numbers 'fruits' that represents the type of fruit a tree produces
// R return the maximum number of fruits that you can pick 
// e
// p

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].







/*
//Two Sum #1

//Used hashtable to solve - went from 252ms to solve to 101ms
var twoSum = function(nums, target) {
  //create and empty object
  let myHash = {}
      for (i = 0; i<nums.length; i++) {
          let e = nums[i]
          if (myHash.hasOwnProperty(target-e)) {
              return ([myHash[target-e],i])
      } else {
          myHash[e]=i
      }
      }
  }
  


//This worked but Refactored ^^ to use hashtable
// var twoSum = function(nums, target) {
//     // console.log(nums)
//     // console.log(target)
//     //loop through nums and add index 0 to the rest of the array, one by one and check
//     //to see what it adds up to
//     for (let i = 0; i < nums.length; i++) {
        
//         for (let j = 1; j < nums.length; j++) {
            
//             // console.log(`nums index:${i}: ${nums[i]} + nums index:${j} ${nums[j]}`);
//             // console.log(nums[i]+nums[j])
//             if (nums[i]+nums[j]===target && i != j) {
//                 return [i, j]
//                 break;
//             } 
            
//         }
//     }
        
// };


// // p given an array of nums
// //given an interger called target


// // r return the indices of the two numbers that add up to target


// // e 
// //nums = [2,7,11,15] 
// // targer = 9
// // index 0 and 1 add up to 9
// //return [0, 1]

*/