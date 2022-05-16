//7Kyu


//Chain me
chain = (input, fs) => fs.reduce((acc,x) => x(acc), input);