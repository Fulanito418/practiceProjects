//6kyu
//String transformer
function stringTransformer(str) {
  
  
  let strArr = str.split('')
//   console.log(strArr)
  
  
  for(let index in strArr){
    //if lower case 97 to 122
    if (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122) {
      strArr[index] = strArr[index].toUpperCase()
    } else if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
      strArr[index] = strArr[index].toLowerCase()
    }
  }
  console.log(strArr.join('').split(' ').reverse().join(' '))
  return strArr.join('').split(' ').reverse().join(' ')
}


//a 97, z 122, A 65, Z 90
//we are given a string, str
//string will have some uppercase and lowercase letters
//take the string, change any uppercase letters to lowercase and viceversa

//next, words should be reversed.

//Hello Bob >> bOB hELLO

//loop through string
//check charCodeAt each letter, if greater than lowercase bound
//change to upper, else change to lower


/*
//Array combinations
function solve(arr) {
  
  let counter = 1
  
  let mySet = new Set();
  
  for (let i = 0; i < arr.length; i++) {
    
    arr[i].forEach(x => mySet.add(String(i)+x))
    counter *= mySet.size
    mySet.clear()
    
  }
  
//   console.log(mySet)
//   console.log(counter)
  return counter
  
  
};

//given an array of arrays
//all numbers
//return number representing number of unique arrays that can be created

//set that takes in unique values
//keep multiply counter
//return counter
/*
//Directions Reduction
//p given an array of directions
//r return and array showing the final directions
//e example
//p

//create a map with the opposites
let myMap = new Map();
myMap.set('NORTH', 'SOUTH')
myMap.set('SOUTH', 'NORTH')
myMap.set('WEST', 'EAST')
myMap.set('EAST', 'WEST')


function dirReduc(arr){
  //create a stack
  let myStack = [];
  
  //loop through input arr and if stack is empty push the value,
  for (const x in arr) {
    console.log()
    let currentDirection = arr[x]
    
    if( myStack.length == 0 ) {
      myStack.push(currentDirection)
    } else if (myStack[ myStack.length - 1 ] == myMap.get(currentDirection)) {
      myStack.pop()
    } else {
      myStack.push(currentDirection)
    }
  }
  //if not empty, check if it's opposite is the last one in there,
  //pop if so
  //return myStack
  
  return myStack
}
