function iampromise(param) {
  return new Promise((resolve, reject) => {
    if (typeof param === "string") {
      resolve("I am string");
    } else {
      reject("I am not string");
    }
  });
}

iampromise({})
  .then(
    (res) => console.log(res),
    // (err) => {
    //   console.log("I am from second param..");
    //   return console.log(err);
    // }
  )
  .catch((error) => {
    console.log("I am from error block");
    console.log(error);
  });

// iampromise(23)
//   .then((res) => console.log(res))
//   .catch((error) => {
//     console.log(error);
//   });
