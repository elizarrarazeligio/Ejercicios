/* Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
It can resolve any value. */

const millis = 1000;

function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis, millis);
  });
}

sleep(millis).then((res) => {
  console.log(res);
});
