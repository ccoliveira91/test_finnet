function isPrimeNumber(num: number): boolean {
  let divisors = 0;

  for (let count = 1; count <= num; count++) {
    if (num % count === 0) {
      divisors++;
    }
  }

  return divisors === 2;
}

// Teste da função
console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(91));
console.log(isPrimeNumber(1009));
