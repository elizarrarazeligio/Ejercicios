const prom1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(-10);
  }, 20);
});

const prom2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 10);
});

prom1.then((res) => {
  console.log(res);
});

prom2.then((res) => {
  console.log(res);
});

const addTwoPromises = (prom1, prom2) => {
  const promArray = [prom1, prom2];
  return Promise.all(promArray).then((res) => {
    return res.reduce((accum, curr) => {
      return accum + curr;
    });
  });
};

addTwoPromises(prom1, prom2).then((res) => {
  console.log(res);
});
