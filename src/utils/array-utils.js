export function sortAndOrderArrayOfObjects(array, key, order) {
  if (!array) return [];

  const newArray = array.map((object)=> {
    return { ...object };
  });

  let orderMultiplier = -1;
  if (order === 'asc') orderMultiplier = 1;
  
  function compareFunction (objA, objB) {

    if (objA[key] < objB[key]) {
      return -1 * orderMultiplier;
    } else if ((objA[key] > objB[key])) {
      return 1 * orderMultiplier;
    } else {
      return 0;
    }
  }
  newArray.sort(compareFunction);
  return newArray;
};

export function sortAndOrderArrayOfObjectsByLengthOfGivenValue (array, key, order) {
  if (!array) return [];

  const newArray = array.map((object)=> {
    return { ...object };
  });

  let orderMultiplier = -1;
  if (order === 'asc') orderMultiplier = 1;
  
  function compareFunction (objA, objB) {

    if (objA[key].toString().length < objB[key].toString().length) {
      return -1 * orderMultiplier;
    } else if ((objA[key].toString().length > objB[key].toString().length)) {
      return 1 * orderMultiplier;
    } else {
      return 0;
    }
  }
  newArray.sort(compareFunction);
  return newArray;
};