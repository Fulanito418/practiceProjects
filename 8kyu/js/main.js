//8Kyu



/*
//Sum Mixed Array
function sumMix(x){
  return x.reduce( (acc,e) => acc + Number(e), 0 )
}

/*

//Array plus array
function arrayPlusArray(arr1, arr2) {
  
  let newArr = arr1.concat(arr2)
  return newArr.reduce( (acc,e) => acc + e, 0 )
  
}


/*
//Total amount of points
//p given an array with results in "x:y"
//r return a number (x>y: 3 pts; x<y: 0 pts; x=y: 1 pt)
//e ["3:3", '2:1"] >> return 4
//p

function points(games) {
  
  //initiate variable count = 0
  let count = 0;
  
  //for each value in the array, check index 0 and 2
  for (let i = 0; i < games.length; i++) {
    //assign index 0 to var xVal
    let xVal = games[i][0]
    //assign index 2 to var yVal
    let yVal = games[i][2]
    

  //if x>y increase count by 3
  // else if x == y , increase count by 1
      
    if (xVal > yVal) {
      count +=3
    } else if (xVal == yVal) {
      count +=1
    }
  }
  
  return count
  
}


/*

//Count by X
function countBy(x, n) {
  let z = [];

  
  for (let i = 1; i <= n; i++ ) {
    z.push(x*i)
  }
  return z;
}

/*
//Transportation on vacation
//given number of days (d) that you will rent the car
// if 7 or more days then you get 50 off your total
//if 3 or more then you get 20 off your total
//cost per day is 40



function rentalCarCost(d) {
  //7 more more discount
  const sevenDaysPlusDiscount = 50
  const threeDaysPlusDiscount = 20
  const costPerDay = 40
  
  if (d >= 7) {
    return d * costPerDay - sevenDaysPlusDiscount
  } else if (d >= 3) {
    return d * costPerDay - threeDaysPlusDiscount
  } else {
    return d * costPerDay
  }
}

/*
//Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

/*
//Get the mean of an array
function getAverage(marks){
  const marksSum = marks.reduce((acc,c)=> acc + c, 0)
  const marksAvg = marksSum/marks.length
  return Math.floor(marksAvg)
}

/*
//Beginner - Reduce but Grow
function grow(x){
  return x.reduce((acc,c) => acc*c,1)
  }

/*
//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft ? true : false
};

/*

//DNA to RNA Conversion

function DNAtoRNA(dna) {
  let myArr = []
  
  dnaArr = dna.split('')
  
  dnaArr.forEach(e => {
    if (e == 'T') {
      myArr.push('U')
    } else {
      myArr.push(e)
    }
  })
  
  return myArr.join('')
}

/*
//Sum Arrays
// Sum Numbers
function sum (numbers) {
  return numbers.reduce((acc,c)=> acc+c,0)
  
  
};

/*
//Find Maximum and Minimum Values of a List

var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list)
}

/*
//reverse Sequence
const reverseSeq = n => {
  let myArr = []
  
  for (let i = n; i >= 1; i--){
    myArr.push(i)
  }
  
  return myArr
};

/*

// Opposites Attract
function lovefunc(flower1, flower2){
  
  if (   (flower1%2 == 0 && flower2%2 == 1) 
      || (flower1%2 == 1 && flower2%2 == 0) ) {
    return true
  } else {
    return false  
  }
}

// Spread syntax is very useful when coding because as we can easily create copies of arrays or objects. Useful for functional programming. 
// Rest syntax offers shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and putting it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring.

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

//array spread
// let arr = [7, 5, 4]

// let [a,b,c] = arr

//object destructuring
let myObj = {
  aa: 1,
  bb: 2,
  cc: 3
}

let {aa,bb,cc} = myObj;

//testing

/*
//powers of 2
//p given a non negative integer
//r return an array with the values of 2 raised to the power of 0 up to the given
// integer
//e n = 2 > [1,2,4]
//p


function powersOfTwo(n){
  //create an empty array to push the values
  let twoPowers = []
  for (i = 0; i <= n; i++) {
    twoPowers.push(2**i)
  }
  return twoPowers
}

/*
//Calculate BMI
//p: weight integer, height ^2 float
//r: return string BMI 'Normal', etc.
//e: 90, 1.7 >> BMI 27.68   returns 'Overweight'
//p: let BMI = 80/(height^2)
//else if statements. if less than 18.5 return 'Underweight'
// else ...

function bmi(weight, height) {

  let bmi = weight/(height**2)
  
  if(bmi <= 18.5) {
    return 'Underweight'
  } else if (bmi <= 25) {
    return 'Normal'
  } else if (bmi <= 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

//Is he gonna survive?
//p: bullets in postive integers, same for dragons
//r: return true or false
//e: if there are 10 bullets you can slay max 5 dragons. if you have 8 bullets but
// 6 dragons, return false
//p: bullets / 2 > or equal dragons then return true if not false

function hero(bullets, dragons){
  return bullets / 2 >= dragons ? true : false
  }

  
/*
//Beginner Series #1 School Paperwork
//p n and m can be below or above 0
//r return number
//e if n = 6 and m = 10 then 6x10 = 60, return 60 , if any below 0 return 0
//p check if n or m are 0 or below, return 0, else return product, can use ternary

function paperwork(n, m) {
  return n <= 0 || m <= 0 ? 0 : n*m
}


/*

//Jenny's secret message
function greet(name){
  
  if(name === "Johnny")
    return "Hello, my love!"
  else {
    return "Hello, " + name + "!";
  }
}


/*
//Is n divisible by x and y?
//p: all positive and non zero
//r: return true or false
//e: 12, 2, 6 would return true because 12%2 = 0 and 12%6 = 0
//p: ternary conditional 12 % 2 == 0 && 12 % 6... 
function isDivisible(n, x, y) {
  return n%x == 0 && n%y == 0 ? true : false;
}

/*

//Plural
function plural(n) {
  return n == 1 ? false : true;
}

/*
//Training JS #5: Basic data types--Object
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

/*
//Training JS #4: Basic data types--Array
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}


//Testing2


//Sum of differences in array
//Sum of differences in array
//p: array of numbers
//r: return number that represents difference bet consec pairs in 
//the array in descending order
//e: [4, 2, 7] -> (7-2) + (2-4) = 3
//p: order array in descending order
// sum variable = 0
//check if length is 1 or less, return 0
//if not, loop through array -> arr[i] - arr[i+1]
// 0, 1, 2
//0 -> 7 - 2 + 0
//1 -> 2 - 4 + 5
//2 -> skip



function sumOfDifferences(arr) {
  let sum = 0;
  arr.sort((a,b)=> b-a)
  

  if(arr.length <= 1){
    return 0
  } else {
    for (let i = 0; i < arr.length - 1; i ++) {
      sum = sum + (arr[i]-arr[i+1])
    }
  }
  return sum
}

/*
//Merge two sorted arrays into one
//PREP
//P: two arrays that may be empty. Only integers.
//R: Return an array that merges Arr1 and Arr2. No duplicates, in ascending order.
//E: [1,2,5], [3,5,7] -> [1,2,3,5,7]
//P: Loop thorugh arr2 and and if it's not in Arr1, push it to Arr1.
//: return sorted Arr1

let arrOne = [1,2,5];
let arrTwo = [3,4,5];

function mergeArrays(arr1, arr2) {
  arr2.forEach(x => !arr1.includes(x) ? arr1.push(x) : undefined);
  return (arr1.sort((a, b) => a - b));   
    }
  
//arr.map(char => pairs.hasOwnProperty(char) ? pairs[char] : char)
  
console.log(mergeArrays(arrOne,arrTwo)); 




/*
//Define a card suit
//prep
//p: any card as argument
//r: return the suit in lowercase
//e: ('3♣') -> return 'clubs'
//p: switch case, check -1 for sign

function defineSuit(card) {
  
  switch (card.slice(-1)){
      
  case '♣': 
    return 'clubs'
    break;
  case '♦': 
    return 'diamonds'
    break;
  case '♥': 
    return 'hearts'
    break;
  case '♠': 
    return 'spades'
    break;
  }
}

console.log(defineSuit('3♣'))

//
//PREP
//P: integers from a to b where a<b
//R: return an array with allintegers from a to b, inclusive
//E: 5,10 return [5,6,7,8,9,10]
//P: for loop to push a through b to an empty array
// start at a and end when <= b

//What is between?
function between(a, b) {
  let numArr =[];
  for (let i = a; i <= b; i++){
    numArr.push(i)
  }
  return numArr;
}

/*


//Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
  }
}


//Convert a Boolean to a String
//PREP
//p: only valid inputs... covert a given boolean into its string representation
//r: return the string equivalent
//e: true => 'true'
//p: ternary condition, if true return 'true' : 'false'

function booleanToString(b){
  return b ? 'true' : 'false'
}
*/