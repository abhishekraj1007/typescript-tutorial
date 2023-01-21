const identityOne = <T>(arg: T): T => {
  return arg;
};

identityOne(23);

identityOne("23");

interface Culture {
  people: string;
  religion: string;
}

identityOne<Culture>({ people: "yes", religion: "hindu" });

const getSearchProducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};

//  <T,> -> This is not JSX syntax but rather the syntax for generics

getSearchProducts([1, 2, 3, 4, 5]);

interface User {
  name: string;
  age: number;
  isEmployed: boolean;
}

// here when we write that U extends User, we are basically foricng U to be of type User
const getUserOnId = <T, U extends User>(id: T, users: U[]): U => {
  // after some operation return a user
  return users[0];
};

getUserOnId(1, [{ name: "Abhishek", age: 22, isEmployed: true }]);

export {};
