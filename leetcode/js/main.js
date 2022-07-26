//leetcode



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

