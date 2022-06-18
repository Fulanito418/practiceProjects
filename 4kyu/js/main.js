console.log('hello from js')





//p
//r
//e
//p
//
//store length of array
//push everything in the first array (0)
//take last value of remaing arrays


// let arrTest = 
// [[1,2,3,4],
// [5,6,7,8],
// [9,10,11,12],
// [13,14,15,16]];
let arrTest = 
[[1, 2, 3, 4, 5], 
[6, 7, 8, 9, 10], 
[11, 12, 13, 14, 15], 
[16, 17, 18, 19, 20], 
[21, 22, 23, 24, 25]]


snail = function(array) {
    
    let snailArr = []
    let arrLength = arrTest[0].length

//This code only takes the edges of the 2d array********************************************************    
    //pushes top edge
    arrTest[0].forEach(x=>snailArr.push(x))

    //pushes right edge
    for(i=1; i<arrLength; i++){
        snailArr.push(arrTest[i][arrLength-1])
    }
    

    //pushed bottom edge
    for (let i = arrLength-2; i >= 0; i--) {
    snailArr.push(arrTest[arrLength-1][i])
    }

    //pushes left edge
    for (let i = arrLength-2; i > 0; i--) {
        snailArr.push(arrTest[i][0])
        }

for(j=1;j<5;j++){
    console.log(i)
    //first inner push to the right
    if(snailArr.length < arrTest[0].length**2){
        for(let i = j; i <= arrLength-(j+1); i++ ) {
            snailArr.push(arrTest[j][i])
        }
    }
    
    //inner push down
    if(snailArr.length < arrTest[0].length**2){
        for(i=2; i<arrLength-1; i++){
            snailArr.push(arrTest[i][arrLength-2])
        }
    }
    //inner push left
    if(snailArr.length < arrTest[0].length**2){
        for (let i = arrLength-3; i > 0; i--) {
            snailArr.push(arrTest[arrLength-2][i])
            }
    }
    //inner push up 
    if(snailArr.length < arrTest[0].length**2){
        for (let i = arrLength-3; i > 1; i--) {
            snailArr.push(arrTest[i][1])
            }
    }


}


    

    console.log(snailArr)
    console.log(snailArr.length)
    console.log(arrTest[0].length**2);

  }

snail()






// ******submit to code wars

// snail = function(array) {
    
//     let snailArr = []
//     let arrLength = array[0].length

// //This code only takes the edges of the 2d array********************************************************    
//     //pushes top edge
//     array[0].forEach(x=>snailArr.push(x))

//     //pushes right edge
//     for(i=1; i<arrLength; i++){
//         snailArr.push(array[i][arrLength-1])
//     }
    

//     //pushed bottom edge
//     for (let i = arrLength-2; i >= 0; i--) {
//     snailArr.push(array[arrLength-1][i])
//     }

//     //pushes left edge
//     for (let i = arrLength-2; i > 0; i--) {
//         snailArr.push(array[i][0])
//         }

    






//     //first inner push to the right
//     for(let i = 1; i <= arrLength-2; i++ ) {
//         snailArr.push(array[1][i])
//     }
//     //inner push down
//     if(snailArr.length < array[0].length**2){
//         for(i=2; i<arrLength-1; i++){
//             snailArr.push(array[i][arrLength-2])
//         }
//     }
//     //inner push left
//     if(snailArr.length < array[0].length**2){
//         for (let i = arrLength-3; i > 0; i--) {
//             snailArr.push(array[arrLength-2][i])
//             }
//     }
//     //inner push up 
//     if(snailArr.length < array[0].length**2){
//         for (let i = arrLength-3; i > 0; i--) {
//             snailArr.push(array[i][0])
//             }
//     }
    

//     console.log(snailArr)
//     console.log(snailArr.length)
//     console.log(array[0].length**2);

//   }
