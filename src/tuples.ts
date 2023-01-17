// tuples

// precise order of items

const preciseOrder: [number, number, boolean] = [123, 456, true];

type GetUser = [string, number];

let user: GetUser = ["Sam", 123];

// push method should not be allowed
preciseOrder.push(123);
