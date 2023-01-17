"use strict";
// writing basic functions
Object.defineProperty(exports, "__esModule", { value: true });
const log = console.log;
function sayHello(name) {
    return `Hello ${name}!`;
}
function logError(errmsg) {
    console.log(errmsg);
}
// log(["sayHello"], sayHello("Sam"));
// log(["logError"], logError("logging the error message"));
// log(["handleError"], handleError("something is wrong"));
// defining a function type
function helloWorld(fn) {
    log("Hello world");
}
/**
 * NEVER TYPE
 *
 * The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
 */
function handleError(errmsg) {
    throw new Error(errmsg);
}
function sayNothing() {
    return {};
}
function saySomething() {
    return { name: "Abhishek", age: 22 };
}
// this is the weired behaviour.
// function weiredBehaviour({ noun: string, isMarried: boolean }): void {}
let params = {
    noun: "Abhishek",
    isMarried: false,
    email: "raj.abhishek0025@gmail.com",
};
const createMovies = (params) => {
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
let arr = {
    arr: ["sam", "nelson"],
};
let numArr = [1, 2, 3];
arr.arr.push("some random thing");
log(arr, numArr);
// CONTEXTUAL TYPING
const names = ["sam", "ram", "gay"];
const namesArray = [1, 2, 3].forEach((item) => {
    return Math.sqrt(item);
});
log(namesArray, names);
// same above can't be done with type, you can not re-open type
const person = (param) => {
    return param;
};
const women = (param) => {
    return param;
};
person({ name: "Abhishek Raj", age: 22 });
women({ name: "Abhishek Raj", age: 22, isDelicate: true });
const sam = {
    isVirgin: false,
};
//  Type assertions
const myCanvas = document.getElementById("main_canvas");
// A thing to remember
let str = "Something";
str = "Something added to it.";
const _str = "Something";
let con;
con = { width: 0 };
con = "auto";
// con = 'automatic';
let _null;
let _undefined;
