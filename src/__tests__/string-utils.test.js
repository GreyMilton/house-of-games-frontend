const { capitaliseAndReplaceDashes } = require('../utils/string-utils')

describe('capitaliseAndReplaceDashes', () => {
  test('returns an empty string when input and empty string', () => {
    expect(capitaliseAndReplaceDashes('')).toBe('');
  });
  test('returns an empty string when passed nothing', () =>{
    expect(capitaliseAndReplaceDashes()).toBe('');
  })
  test('returns a single character string of a space when passed a single character string of a dash', () =>{
    expect(capitaliseAndReplaceDashes('-')).toBe(' ');
  })
  test('returns a single character string converted to uppercase if it is lowercase, or remains uppercase if it is already uppercase', () =>{
    expect(capitaliseAndReplaceDashes('a')).toBe('A');
    expect(capitaliseAndReplaceDashes('r')).toBe('R');
    expect(capitaliseAndReplaceDashes('t')).toBe('T');
    expect(capitaliseAndReplaceDashes('Z')).toBe('Z');
    expect(capitaliseAndReplaceDashes('B')).toBe('B');
  })
  test('returns a single character string of a space when passed a single character string of a space', () =>{
    expect(capitaliseAndReplaceDashes(' ')).toBe(' ');
  })
});