console.log('hello from js')


//p: given an array that is n x n
//r: return all of the elements in given array but in clockwise "snail"
//e:
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
//p:
//push everything in array0
//then push the last element in array 1 and 2
//push remaining elements in last array (array 2)
//keep counter for the number of turns needed

snail = function(array) {
    console.log(array[0])
    console.log(array[1])
  }

snail([[1,2,3],
    [4,5,6],
    [7,8,9]])