type Response = {
  data: Array<string>;
  status: string;
  isSuccess: boolean;
};

type Error = {
  error: string;
  isError: true;
};

function getSomething(param: Response | Error) {
  if ("isSuccess" in param) {
    console.log("API call succesfull", param.isSuccess);
  } else {
    console.log("API call error !!", param.isError);
  }
}

getSomething({ error: "yes", isError: true });

// isntance of

function logValue(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(date.toUpperCase());
  }
}

// type predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    console.log(pet.swim());
  } else {
    console.log(pet.fly());
  }
}
export {};
