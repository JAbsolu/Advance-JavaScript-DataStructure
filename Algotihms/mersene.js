/**
 * @param {n} where n represents the exponent in 2^n - 1
 * @returns whether the result of 2^n - 1 is a mersenne number or not
 */

const mersenne = (n) => {
  // use the formula of M base n = 2^n - 1 to get result
  const is_mersenne = (2 ** n) - 1;

  // Store the result of whether the result of 2^n -1 is a prime or not
  const result_is_prime = is_prime(is_mersenne)

  // print out the result of whether the number is a mersenne number or not
  if (result_is_prime) {
    console.log(`\n 2^${n} = ${is_mersenne}, It is a mersenne number.`);
    return true;
  }

  // if the first if block never return then the result of 2^n - 1 was not a mersenne number
  console.log(`\n 2^${n} = ${is_mersenne}, It is not a mersenne number.`);
  return false;
}


/**
 * @param {n} where n is an integer
 * @returns a boolean based on whether n is prime or not
 */
const is_prime = (n) => {
  // if n is 1 then it is not a prime, even though it is only divisible by 1 and itself
  if (n === 1) return false;
  
  // starting the divisor at 2 since its not necessary to divide by 1
  let divisor = 2;

  while (divisor <= n) {
    // if n is divisible by the divisor and the divisor is not n, then n is not a prime number
    if (n % divisor === 0 && divisor != n) {
      return false;
    }
    // Add 1 to the divisor
    divisor += 1;
  }
  // If false was never returned, then n was a prime number, return true
  return true;
}

// Test primes array
const test_primes = [3, 5, 7, 13, 17, 19, 31, 41];

//Generate tests
for (let test of test_primes) {
  mersenne(test);
}