// writing basic functions

const log = console.log;

function sayHello(name: string): string {
  return `Hello ${name}!`;
}

function logError(errmsg: string): void {
  console.log(errmsg);
}

// log(["sayHello"], sayHello("Sam"));
// log(["logError"], logError("logging the error message"));
// log(["handleError"], handleError("something is wrong"));

// defining a function type
function helloWorld(fn: () => void) {
  log("Hello world");
}

/**
 * NEVER TYPE
 *
 * The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
 */

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

function sayNothing(): {} {
  return {};
}

function saySomething(): { name: string; age: number } {
  return { name: "Abhishek", age: 22 };
}

// this is the weired behaviour.
// function weiredBehaviour({ noun: string, isMarried: boolean }): void {}

let params = {
  noun: "Abhishek",
  isMarried: false,
  email: "raj.abhishek0025@gmail.com",
};

// weiredBehaviour(params);

type Movie = {
  readonly id?: number;
  title: string;
  duration: number;
  startCast: string[];
};

const createMovies = (params: Movie): Movie => {
  const { id, title, duration, startCast } = params;
  return {
    id: Math.floor(Math.random() * 100),
    title,
    duration,
    startCast,
  };
};

const movie = createMovies({
  title: "Titanic",
  duration: 240,
  startCast: ["Sam", "Nelson"],
});

// movie.id = 124; // Cannot assign to 'id' because it is a read-only property

type TestArray = {
  readonly arr: string[];
};

type TestNumber = readonly number[];

let arr: TestArray = {
  arr: ["sam", "nelson"],
};

let numArr: TestNumber = [1, 2, 3];

arr.arr.push("some random thing");

log(arr, numArr);

// CONTEXTUAL TYPING

const names = ["sam", "ram", "gay"];

const namesArray = [1, 2, 3].forEach((item) => {
  return Math.sqrt(item);
});

log(namesArray, names);

// difference between interface and a type

interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Woman extends Person {
  isDelicate: boolean;
}

// same above can't be done with type, you can not re-open type

const person = (param: Person): Person => {
  return param;
};

const women = (param: Woman): Woman => {
  return param;
};

person({ name: "Abhishek Raj", age: 22 });

women({ name: "Abhishek Raj", age: 22, isDelicate: true });

// extending a type

type Human = {
  gender: string;
};

type man = Omit<Human, "gender"> & {
  isVirgin: boolean;
};

const sam: man = {
  isVirgin: false,
};

//  Type assertions

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// A thing to remember

let str = "Something";
str = "Something added to it.";

const _str = "Something";
// _str = "Something will not be added !!";

// It’s not much use to have a variable that can only have one value!
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

interface config {
  width: number;
}

let con: config | "auto";

con = { width: 0 };
con = "auto";
// con = 'automatic';

let _null: null;
let _undefined: undefined;

// remember, null and undefined are types aswell in TYPE SCRIPT

export {};
