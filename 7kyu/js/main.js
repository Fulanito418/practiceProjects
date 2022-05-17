//7Kyu


//Don't give me five!
//P: positive or negative numbers, start and end inclusive, start is smaller than end
//R: return the count of numbers without a 5 in them
//E: 4,5,6,7,8,9,10,11,12,13,14,15 would return 10 because you don't count 5 and 15
//P: using a for loop, start to end, count all the numbers using a count variable
// change number to array then check to see if it includes 5

function dontGiveMeFive(start, end)
{
  let count = 0;
  for (let i = start; i <= end; i++){
    if(String(i).includes(5)){
      count += 0
    } else {
      count += 1
    }
  }
  return count
}

/*
//Chain me
chain = (input, fs) => fs.reduce((acc,x) => x(acc), input);