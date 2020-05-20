/** 
 * A modified binary search to return the index
 * of the largest value less than `limit`
 * 
 * Original binary search implementation from
 * https://code.tutsplus.com/tutorials/the-binary-search-algorithm-in-javascript--cms-30003
 * 
 * @param {*} limit
 * @param {*} values
 */
const customBinarySearch = (values, limit) => {
  let first = 0; //left endpoint
  let last = values.length - 1; //right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last)/2);
    if (values[middle] < limit && values[middle+1] >= limit) {
      found = true;
      position = middle;
    } else if (values[middle] >= limit) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

module.exports = customBinarySearch;