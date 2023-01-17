type User = {
  user: string;
  id: number | string;
};

type Admin = {
  username: string;
  id: number | string;
};

let bob: User | Admin;

bob = { user: "Bob", id: 123 };
bob = { username: "Bob@", id: 123 };

// related to array
// my array can have both the kinds of data type
const array: (number | string)[] = ["1", "2", "3", 4, 5, 6];
