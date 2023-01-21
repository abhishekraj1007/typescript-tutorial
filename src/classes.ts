class Person {
  public name: string;
  public age: number;
  private income: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.income = 10000;
  }

  display(): void {
    console.log(
      `Hello my name is ${this.name} and i am ${this.age} years old.`
    );
  }

  get _income(): number {
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

type UserType = {
  id: number;
  role: string;
  type: string;
};

// This is a better approach
class User {
  private id: number = Math.floor(Math.random() * 100);
  constructor(public role: string, public type: string) {
    this.role = role;
    this.type = type;
  }

  get _user(): UserType {
    return {
      id: this.id,
      role: this.role,
      type: this.type,
    };
  }

  //   This property is only available within the class
  private userSalary(): number {
    return 200000;
  }
}

const user = new User("ADMIN", "EMPLOYEE");
user._user;
// user.userSalary

// let's play with class some More

class Counter {
  protected count: number;
  constructor(count: number) {
    this.count = count;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  set incrementBy(value: number) {
    this.count += value;
  }
}

class DisplayCounter extends Counter {
  get displayCount(): number {
    return this.count;
  }
}

const counter = new DisplayCounter(100);

// introduction to abstract classes

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //   This is the abstract method and can't have implementation
  abstract getSepia(): void;

  //   we can even write implementation of a method in ABSTRACT CLASS
  checkEven(num: number): boolean {
    return num % 2 === 0;
  }
}

/** You can not crerate object from the abstract class */

// const tp = new TakePhoto("test", "test");

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }

  getSepia(): void {
    console.log("I am getting the sepia");
  }
}

const insta = new Instagram("text", "text", 2);

insta.checkEven(34);


class GenericClass <T> {
  constructor (public age : T) {
    this.age = age
  }
}

export {};
