//6kyu


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