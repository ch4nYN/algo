var arr = [3, 1, 50, 4, 33, 2, 5, 50, 100, 99, 69, 1, 3];

var bruteforceSort = function(arr) {
  for (var i = 0; i< arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
}
console.log(bruteforceSort(arr));