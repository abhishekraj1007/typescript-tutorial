"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.income = 10000;
    }
    display() {
        console.log(`Hello my name is ${this.name} and i am ${this.age} years old.`);
    }
    get _income() {
        return this.income;
    }
    //   there is no return type
    set _income(value) {
        if (typeof value === "number") {
            this.income = value;
        }
    }
}
const p = new Person("Sam", 22);
p._income = 2000;
console.log(p._income);
// This is a better approach
class User {
    constructor(role, type) {
        this.role = role;
        this.type = type;
        this.id = Math.floor(Math.random() * 100);
        this.role = role;
        this.type = type;
    }
    get _user() {
        return {
            id: this.id,
            role: this.role,
            type: this.type,
        };
    }
    //   This property is only available within the class
    userSalary() {
        return 200000;
    }
}
const user = new User("ADMIN", "EMPLOYEE");
user._user;
// user.userSalary
// let's play with class some More
class Counter {
    constructor(count) {
        this.count = count;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
    set incrementBy(value) {
        this.count += value;
    }
}
class DisplayCounter extends Counter {
    get displayCount() {
        return this.count;
    }
}
const counter = new DisplayCounter(100);
// introduction to abstract classes
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //   we can even write implementation of a method in ABSTRACT CLASS
    checkEven(num) {
        return num % 2 === 0;
    }
}
/** You can not crerate object from the abstract class */
// const tp = new TakePhoto("test", "test");
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("I am getting the sepia");
    }
}
const insta = new Instagram("text", "text", 2);
insta.checkEven(34);
