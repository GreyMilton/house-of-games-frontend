const { sortAndOrderArrayOfObjects, sortAndOrderArrayOfObjectsByLengthOfGivenValue } = require('../utils/array-utils')

describe('sortAndOrderArrayOfObjects', () => {
  test('returns an empty array when passed an empty array', () => {
    expect(sortAndOrderArrayOfObjects([])).toEqual([]);
    expect(sortAndOrderArrayOfObjects([], 'created_at', 'asc')).toEqual([]);
    expect(sortAndOrderArrayOfObjects([], 'votes', 'desc')).toEqual([]);
  });
  test('returns an empty array when passed nothing, or undefined instead of an array', () => {
    expect(sortAndOrderArrayOfObjects()).toEqual([]);
    expect(sortAndOrderArrayOfObjects(undefined, 'created_at', 'asc')).toEqual([]);
    expect(sortAndOrderArrayOfObjects(undefined, 'votes', 'desc')).toEqual([]);
  });
  test('returns a copy of the same array when passed a single element (object) array', () => {
    expect(sortAndOrderArrayOfObjects([ {body: "dsajhflkjsadhf", votes: 234, created_at: "33333333"}], 'body', 'asc')).toEqual([{body: "dsajhflkjsadhf", votes: 234, created_at: "33333333"}]);
  });
  test('doesn\'t mutate the passed array', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const expected1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    sortAndOrderArrayOfObjects(array1, 'author', 'desc');
    expect(array1).toEqual(expected1)
  });
  test('doesn\'t return the same array as passed', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'votes', 'asc');
    expect(actual1).not.toBe(array1);
  });
  test('doesn\'t return an array with the same objects as the old array', () => {
    const object1 = {
      body: "dsajhflkjsadhf",
      votes: 234,
      created_at: "33333333",
      review_id: 888888,
      comment_id: 9999999,
      author: "Henrietta"
    }
    const array1 = [
      object1,
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'votes', 'asc');
    expect(actual1[0]).not.toBe(object1);
    expect(actual1[0]).not.toBe(array1[0]);
  });
  test('returns an array copy in ascending order of passed key\'s value, when passed an array of 2 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of passed key\'s value, when passed an array of 2 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in ascending order of passed key\'s value, when passed an array of 3 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of passed key\'s value, when passed an array of 3 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in ascending order of passed key\'s value, when passed an array of 4 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of passed key\'s value, when passed an array of 4 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in ascending order of passed key\'s value, when passed an array of 5 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of passed key\'s value, when passed an array of 5 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjects(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjects(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjects(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjects(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
    ];
    expect(actual4).toEqual(expected4);
  });
});

describe('sortAndOrderArrayOfObjectsByLengthOfGivenValue', () => {
  test('returns an empty array when passed an empty array', () => {
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue([])).toEqual([]);
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue([], 'body', 'asc')).toEqual([]);
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue([], 'author', 'desc')).toEqual([]);
  });
  test('returns an empty array when passed nothing, or undefined instead of an array', () => {
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue()).toEqual([]);
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue(undefined, 'created_at', 'asc')).toEqual([]);
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue(undefined, 'votes', 'desc')).toEqual([]);
  });
  test('returns a copy of the same array when passed a single element (object) array', () => {
    expect(sortAndOrderArrayOfObjectsByLengthOfGivenValue([ {body: "dsajhflkjsadhf", votes: 234, created_at: "33333333"}], 'body', 'asc')).toEqual([{body: "dsajhflkjsadhf", votes: 234, created_at: "33333333"}]);
  });
  test('doesn\'t mutate the passed array', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const expected1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'author', 'desc');
    expect(array1).toEqual(expected1)
  });
  test('doesn\'t return the same array as passed', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 234,
        created_at: "33333333",
        review_id: 888888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'asc');
    expect(actual1).not.toBe(array1);
  });
  test('doesn\'t return an array with the same objects as the old array', () => {
    const object1 = {
      body: "dsajhflkjsadhf",
      votes: 234,
      created_at: "33333333",
      review_id: 888888,
      comment_id: 9999999,
      author: "Henrietta"
    }
    const array1 = [
      object1,
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'asc');
    expect(actual1[0]).not.toBe(object1);
    expect(actual1[0]).not.toBe(array1[0]);
  });
  test('returns an array copy in ascending order of length of passed key\'s value, when passed an array of 2 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'author', 'asc');
    const expected2 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
  });
  test('returns an array copy in descending order of length of passed key\'s value, when passed an array of 2 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'author', 'desc');
    const expected2 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in ascending order of length of passed key\'s value, when passed an array of 3 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of length of passed key\'s value, when passed an array of 3 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "dsajhflkjsadhf",
        votes: 2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in ascending order of length of passed key\'s value, when passed an array of 4 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of length of passed key\'s value, when passed an array of 4 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in ascending order of length of passed key\'s value, when passed an array of 5 objects, key, and order \'asc\'', () => {
    const array1 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'asc');
    const expected1 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'asc');
    const expected2 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'asc');
    const expected3 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'asc');
    const expected4 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
  test('returns an array copy in descending order of length of passed key\'s value, when passed an array of 5 objects, key, and order \'desc\'', () => {
    const array1 = [
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      }
    ];
    const actual1 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'body', 'desc');
    const expected1 = [
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
    ];
    expect(actual1).toEqual(expected1);
    const actual2 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'votes', 'desc');
    const expected2 = [
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual2).toEqual(expected2);
    const actual3 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'created_at', 'desc');
    const expected3 = [
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual3).toEqual(expected3);
    const actual4 = sortAndOrderArrayOfObjectsByLengthOfGivenValue(array1, 'review_id', 'desc');
    const expected4 = [
      {
        body: "poipoipoi",
        votes: 98,
        created_at: "1111111",
        review_id: 2222222222,
        comment_id: 3333333,
        author: "Sammy"
      },
      {
        body: "oijkljarekjhg",
        votes: 213,
        created_at: "87236408276",
        review_id: 876234,
        comment_id: 9999,
        author: "Bob"
      },
      {
        body: "dsajhflkjsadhf",
        votes:2111,
        created_at: "33333333",
        review_id: 8888,
        comment_id: 9999999,
        author: "Henrietta"
      },
      {
        body: "ccccccc bvbvbv bvbv",
        votes: 2,
        created_at: "5",
        review_id: 45,
        comment_id: 1,
        author: "Justin"
      },
      {
        body: "bvbvbvbvbvbv bvbvbv bvbv",
        votes: 1,
        created_at: "4",
        review_id: 78,
        comment_id: 3,
        author: "Zamzawiggle"
      }
    ];
    expect(actual4).toEqual(expected4);
  });
});