const binarySearch = require('../src/utils/search');

describe('binarySearch', () => {
  it('should return the index of the largest number less than n', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(-1);
    expect(binarySearch([1, 2], 1)).toBe(-1);
    expect(binarySearch([1, 2], 2)).toBe(0);
    expect(binarySearch([1, 5, 10, 12], 1)).toBe(-1);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(4);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(6);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 103)).toBe(-1);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], -10)).toBe(-1);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 97], 'a')).toBe(-1);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 97], null)).toBe(-1);
  });
});
