function sumFibs(num) {
    let fib = [0, 1];
    let sum = 1;
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        if (fib[i] % 2 !== 0 && fib[i] <= num) {
            sum += fib[i];
        }
    }
    return sum;
  }

  console.log(sumFibs(10));