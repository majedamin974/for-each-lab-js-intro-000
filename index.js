let array = [1,2,3,4,5,6];

function iterativeLog(arr) {
  arr.forEach((element, index)=> {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let arr = [10, 20, 30];
  arr.forEach(callback);
  return arr;
}

function addTen(el, index, arr) {
  arr[index] = el + 10;
}

function doToArray(arr, callback) {
  arr.forEach(el => callback);
}

doToArray(array, addTen);
console.log(array);
