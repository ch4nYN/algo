var arr = [3, 5, 77, 59, 49, 33, 1, 30 ,11 ,69 ,23 ,302 ,33, 2019, 33];


const insertionSort = function(arr) {
  var temp, outer, inner;
  for (outer = 1; outer < arr.length; outer++) {
    for (inner = outer; inner > 0 && arr[inner - 1] > arr[inner]; inner--) {
      temp = arr[inner];
      arr[inner] = arr[inner-1];
      arr[inner-1] = temp;
    }
  }
  return arr;
}

console.log(insertionSort(arr))