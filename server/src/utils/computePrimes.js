const BitSet = require('bitset');

const computePrimes = (max) => {
  let bs = new BitSet;
  bs.set(0, 1);
  bs.set(1, 1);
  for (let i = 2; i < Math.sqrt(max); i++) {
    if (!bs.get(i)) {
      for (let j = Math.pow(i, 2); j < max; j += i) {
       bs.set(j, 1);
      }
    }
  }
  const primes = [];
  for (let i = 0; i < max; i++) {
    if (!bs.get(i)) {
      primes.push(i);
    }
  }
  return primes;
}

module.exports = computePrimes;
