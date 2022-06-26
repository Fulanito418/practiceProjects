//6kyu

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