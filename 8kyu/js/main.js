//8Kyu

//
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