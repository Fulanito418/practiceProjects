console.log('hello from js')


//p
//r
//e
//p
//
//store length of array
//push everything in the first array (0)
//take last value of remaing arrays


let arrTest = 
[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]];

snail = function(array) {
    
    let snailArr = []
    let arrLength = arrTest[0].length

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







    console.log(snailArr)
  }

snail()
