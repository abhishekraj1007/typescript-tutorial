let welcome: string = "Welocme ! Lets learn typescript !!";

// prepare an array for me

interface ArrayItems {
  [index: number]: number;
  name?: string;
}

const numbers: ArrayItems = [1, 2, 3, 4];

// intersections types

interface Circle {
  radius: number;
}

interface Color {
  color: string;
}

type ColorfulCircle = Circle & Color;

function drawCircle(circle: ColorfulCircle): void {
  console.log(circle.color, circle.radius);
}

drawCircle({ radius: 34, color: "red" });

// ......................
interface Box<T> {
  contents: T;
}

interface Apple {
  // something
}

type AppleBox = Box<Apple>;

let appleBox: AppleBox = { contents: "something" };

console.log(appleBox);

export {};
