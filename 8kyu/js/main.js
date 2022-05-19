//8Kyu

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