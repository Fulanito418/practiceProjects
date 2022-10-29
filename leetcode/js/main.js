//leetcode


var moveZeroes = function(nums) {
    
    let size = nums.length
    for (let i = 0; i < size; i++) {
        //check if current value is 0
        if ( nums[i] === 0 ) {
        //if 0, splice and push to the end
            console.log('spliced value: '+ nums.splice(i,1))
            nums.push(0)
            i--
            size--
            // console.log('just pushed a 0 and nums looks like: '+ nums)
        }    
    }//end of forLoop
    
    return nums
    
};

/*
const testCaseNums = [5,4,3,2,1]
const testK = 3

const revNums = (nums, start, end) => {
	while(start < end) {
        // console.log(nums[start])
	[ nums[start], nums[end] ] = [ nums[end], nums[start] ];
	start++
	end--	
	}
}


revNums(testCaseNums, 0, testK-1)
// revNums(testCaseNums, testK, testCaseNums.length - 1)

console.log(testCaseNums)



/*
const App = () => {
    const options = [
      { label: 'Fruit', value: 'fruit' },
      { label: 'Vegetable', value: 'vegetable' },
      { label: 'Meat', value: 'meat' },
    ];
  
    const [value, setValue] = React.useState('fruit');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div>
        <Dropdown
          label="What do we eat?"
          options={options}
          value={value}
          onChange={handleChange}
        />
  
        <p>We eat {value}!</p>
      </div>
    );
  };

  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };



/*
//Longest Substring Without Repeating Characters

 var lengthOfLongestSubstring = function(s) {
    
    //create array
    let myStack = [];
    let maxSub = 0
    //push each letter into the array
    //check if array includes letter you're pushing
    //if it does, reset stack and record length
    for (let i = 0; i < s.length; i++) {
        
        let currentLetter = s[i]
        if (myStack.length == 0) {
            myStack.push(currentLetter)
            maxSub = 1
        } else if (myStack.includes(currentLetter)) {
            maxSub = Math.max(maxSub, myStack.length)
            myStack = []
            myStack.push(currentLetter)    
        } else {
            myStack.push(currentLetter)    
            maxSub = Math.max(maxSub, myStack.length)
        }
    }
    
    return maxSub
};


/*
//1184. Distance Between Bus Stops
 var distanceBetweenBusStops = function(distance, start, destination) {
    
    
    //Edge case
if(start == destination){
    return 0 
}
    
    let distanceSum = distance.reduce((acc,c)=>acc+c,0)
    console.log(distanceSum)
    let distancesTraveled = []
    let travelAmount = 0

//Scenario start < destination 
if (start<destination) {
for (let i = start; i < destination; i++) {
    travelAmount += distance[i]
}
    distancesTraveled.push(travelAmount)
    distancesTraveled.push(distanceSum - travelAmount)
    console.log(distancesTraveled)
} 
    
//Scenario start > destination 
    if (start>destination) {
for (let i = start-1; i >= destination; i--) {
    
    
    travelAmount += distance[i]
}
    console.log(travelAmount)
    distancesTraveled.push(travelAmount)
    distancesTraveled.push(distanceSum - travelAmount)
    // console.log(distancesTraveled)
} 


    //example
    //sum = 10
    // [1,2,3,4]
    //    ^ ^
    //    E S
    
    
    
    return Math.min(...distancesTraveled)

};

//given and array to represent the distance between stops
//given the start number
//given the destination as a number

//distance from 0 to 2
//[1,2,3,4]
// ^   ^
// from 0 to 1 = 1
// from 1 to 2 = 2
//sum is 3



//what if we go clockwise?
//collect distance values, from 
//distance[start] ... + distance[destination - 1]



//what if we go counter-clockwise?
// for (let j = 0; j <)

//what if we go backwards?

/*
//test 1
// const names = ['ball', 'bat', 'ball', 'jacket', 'ball'];
// const price = [3,5,3,50,3]
// const weight = [1,1,1,10,1]

//test 2
const names = ['ball', 'ball','ball'];
const price = [3, 3, 3]
const weight = [1, 2, 2]

function checkDups (names, price, weight) {
    
    let itemsObj = {};
    let duplicates = 0;

    //create a map with item names with price and weight
    //add items to map as long as they don't exist
    for (let i = 0; i < names.length; i++) {
        
        if (!itemsObj[names[i]]) {
            itemsObj[names[i]] = [price[i], weight[i]]
        } else if(price[i] == itemsObj[names[i]][0] && weight[i] == itemsObj[names[i]][1]){
            //if it does exist, check >>price obj[name][0] and >>weight obj[name][1]
            console.log(price[i] + ' current price') // current item price 
            console.log(itemsObj[names[i]][0] + ' price in obj') // item price in obj
            console.log(price[i] == itemsObj[names[i]][0]) // check if current price == item price in obj
            
            console.log(weight[i] + ' current weight') // current item weight 
            console.log(itemsObj[names[i]][1] + ' weight in obj') // item weight in obj
            console.log(weight[i] == itemsObj[names[i]][1]) // check if current weight == item weight in ob
            duplicates++
        }
    } //end for loop
    return duplicates
    


}

console.log(checkDups(names,price,weight))
/*

//Isomorphic Strings
//map dictionary
var isIsomorphic = function(s, t) {
    
    //takes care of any edge case where s and t are different lengths
    if (s.length != t.length) {
        return false
        }
    
    let sMap = {}
    let tMap = {}
    
    
    for (let i = 0; i<s.length; i++){
        sChar = s[i];
        tChar = t[i];
        
        if (sMap[sChar] == undefined) {
            sMap[sChar] = tChar    
        }
        if (tMap[tChar] == undefined) {
            tMap[tChar] = sChar    
        }
        
        if (sMap[sChar] != tChar || tMap[tChar] != sChar) {
            return false
        } 
    
    }
    return true
    
}






//Find Pivot Index
//p given an array of numbers
//r return the index value of the pivot index, that is, where the sum of the numbers to the left of the pivot are equal to the sums of the nums to the right of the pivot
//e 
//p

var pivotIndex = function(nums) {

    //variable to hold sum of nums to the left of the pivot
    let sumLeft = 0
    //variable to hold the sum of the nums to the right of the pivot
    let sumRight = 0
    
    //use a for loop starting at 1 and use slice and reduce to take the sum of all the nums starting at index 1 and to the right
    for (let i = 1; i <= nums.length; i++) {
        sumLeft = nums.slice( 0, i - 1 ).reduce(( acc, e ) => acc + e, 0)
        //console.log('sumLeft =' + nums.slice( 0, i - 1 ))
        sumRight = nums.slice( i ).reduce(( acc, e ) => acc + e, 0)
        //console.log('sumRight =' +nums.slice( i ))
        
        if (sumLeft == sumRight) {
            return i-1
        } else if (i == nums.length) {
            return -1       
        }
    }
    
    //use the index value to take the sum of all the values to the left of the pivot (0,i-1)
    
    //if the leftSum and rightSum are equal, return i-1
    
    
    
    
};



/*

//Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums. 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// p given an array of numbers
// r return an array
// e [1,2,3,4,5] >> [1,3,6,10,15]
// p

var runningSum = function(nums) {
    //variable to hold sum
    let sum = 0;
    //sumsArr
    let sumArr = [];
    //push running sum into sumsArr
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        sumArr.push(sum)
    }
    return sumArr

};





/*
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