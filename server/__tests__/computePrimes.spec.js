const computePrimes = require('../src/utils/computePrimes');

describe('computePrimes', () => {
  it('should compute the median primes of the set of primes n', () => {
    expect(computePrimes(0)).toEqual([]);
    expect(computePrimes(1)).toEqual([]);
    expect(computePrimes(2)).toEqual([]);
    expect(computePrimes(3)).toEqual([2]);
    expect(computePrimes(10)).toEqual([2,3,5,7]);
    expect(computePrimes(18)).toEqual([2,3,5,7,11,13,17]);
    expect(computePrimes(13)).toEqual([2,3,5,7,11]);
    expect(computePrimes('a')).toEqual([]);
    expect(computePrimes(-1)).toEqual([]);
    expect(computePrimes([])).toEqual([]);
    expect(computePrimes(null)).toEqual([]);
    // expect(computePrimes(1000000000)).toBeTruthy();
  });
});
