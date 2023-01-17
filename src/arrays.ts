// 1 D Array
const someNumbers: number[] = [];

someNumbers.fill(100, 10);

console.log(someNumbers);

// string array

const words: string[] = [];

words.fill("i am awesome", 10);

console.log(words);

// 2 dimensional array

const _2dArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];


// this array is immutable now
const fixedArray: readonly number[] = [1, 2, 3];

// fixedArray.push(23);

export {};
