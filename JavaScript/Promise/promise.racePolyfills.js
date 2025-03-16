let p1 = function quickResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Qickly Resolved");
    }, 500);
  });
};

let p2 = function slowResolveOrFastReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("slowly resolved"), 2000);
    // setTimeout(()=>reject(new Error("Quick Rejected!")))
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length == 0) {
      throw new Error("Invalid value passed");
    }
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

//doesn't matter it is resolved or reject it will give u first result i.e which will execute first
//whatever promise will serve first
Promise.myRace([p1(), p2()])
  .then((data) => {
    console.log("result ", data);
  })
  .catch((error) => console.log("Error ", error));
