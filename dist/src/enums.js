"use strict";
// Enums : enumerated types
// You should always use enums when a variable (especially a method parameter) can only take one out of a small set of possible values
Object.defineProperty(exports, "__esModule", { value: true });
// using the below syntax creates unnecessary javasript code
// use const + enum syntax
var UserType;
(function (UserType) {
    UserType[UserType["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    UserType[UserType["ADMIN"] = 1] = "ADMIN";
    UserType[UserType["USER"] = 2] = "USER";
})(UserType || (UserType = {}));
const user = UserType.ADMIN;
console.log(user);
const seat = 1 /* SeatAlloc.AISLE */;
console.log(seat);
