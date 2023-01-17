"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCallbacks = void 0;
const getAsynchronnousData = (delay) => new Promise((resolve, reject) => {
    if (!delay) {
        return reject(0);
    }
    else {
        setTimeout(() => {
            return resolve("Done !!");
        }, delay);
    }
});
getAsynchronnousData(2000)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
//   async callbacks
const asyncCallbacks = (param, callback) => {
    setTimeout(() => {
        callback(10);
    }, param);
};
exports.asyncCallbacks = asyncCallbacks;
(0, exports.asyncCallbacks)(2000, (num) => {
    console.log(num);
    return [num, 1, 2, 3, 4];
});
// not null assertion operator
function liveDangerously(x) {
    if (x) {
        console.log(x.toFixed(2));
    }
}
liveDangerously(2.34567);
liveDangerously(null);
function liveDangerously_v2(x) {
    console.log(x === null || x === void 0 ? void 0 : x.toUpperCase());
}
liveDangerously_v2("Hello there");
