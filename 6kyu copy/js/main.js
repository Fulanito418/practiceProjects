//6kyu

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
