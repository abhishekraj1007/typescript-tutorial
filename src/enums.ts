// Enums : enumerated types
// You should always use enums when a variable (especially a method parameter) can only take one out of a small set of possible values


// using the below syntax creates unnecessary javasript code
// use const + enum syntax
enum UserType {
  SUPER_ADMIN = 0,
  ADMIN,
  USER,
}

const user = UserType.ADMIN;

console.log(user);


const enum SeatAlloc {
    WINDOW,
    AISLE,
    SIDE
}

const seat = SeatAlloc.AISLE;
console.log(seat);

export {};
