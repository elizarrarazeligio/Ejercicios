function computeFibonacciElement(n) {
  if (n <= 2) return 1;

  const f = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[f.length - 1];
}

console.log(computeFibonacciElement(10));
