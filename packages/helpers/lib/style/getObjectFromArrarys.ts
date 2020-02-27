export function getObjectFromArrays(arr1, arr2) {
  const map = {};
  arr1.forEach((item, index) => {
    map[item] = arr2[index];
  });
  return map;
}
