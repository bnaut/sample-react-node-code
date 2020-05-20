const { matchParamRegex, validator, controller } = require('../src/app');

describe('match', () => {
  it('should match positive integers', () => {
    expect(matchParamRegex.test(0)).toEqual(true);
    expect(matchParamRegex.test(1)).toEqual(true);
    expect(matchParamRegex.test(2)).toEqual(true);
    expect(matchParamRegex.test(10)).toEqual(true);
    expect(matchParamRegex.test(254444)).toEqual(true);
    expect(matchParamRegex.test('1')).toEqual(true);
    expect(matchParamRegex.test('01')).toEqual(true);
    expect(matchParamRegex.test('00001')).toEqual(true);
    expect(matchParamRegex.test(-1)).toEqual(false);
    expect(matchParamRegex.test(0.5)).toEqual(false);
    expect(matchParamRegex.test(-0.5)).toEqual(false);
    expect(matchParamRegex.test(null)).toEqual(false);
    expect(matchParamRegex.test(false)).toEqual(false);
    expect(matchParamRegex.test([])).toEqual(false);
  });
});

