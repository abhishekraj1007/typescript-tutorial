const getAsynchronnousData = (delay: number | undefined) =>
  new Promise((resolve, reject) => {
    if (!delay) {
      return reject(0);
    } else {
      setTimeout(() => {
        return resolve("Done !!");
      }, delay);
    }
  });

getAsynchronnousData(2000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//   async callbacks

export const asyncCallbacks = (
  param: number,
  callback: (num: number) => number[]
) => {
  setTimeout(() => {
    callback(10);
  }, param);
};

asyncCallbacks(2000, (num) => {
  console.log(num);
  return [num, 1, 2, 3, 4];
});

// not null assertion operator

function liveDangerously(x: number | null) {
  if (x) {
    console.log(x.toFixed(2));
  }
}

liveDangerously(2.34567);
liveDangerously(null);

function liveDangerously_v2(x: string | null) {
  console.log(x?.toUpperCase());
}

liveDangerously_v2("Hello there");



export {};
