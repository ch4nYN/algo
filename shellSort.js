var arr = [ 321321313, 34 ,5, 323333, 11, 50, 6000, 3409, 233399, 555, 269, 69 ,1, 55, 6723942];

var insertionSort = function(arr) {
  var i, j;
  for (i = 1; i < arr.length; i++) {
    for (j = i; j > 0 && arr[j-1] > arr[j]; j--) {
      var temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
    }
  }
  return arr;
}

var shellSort = function(arr) {
  var outer, inner;
  var h = 1;
  while (h < arr.length/3) {
    h = h*3 + 1;
  }
  while (h >= 1) {
    for (outer = h; outer < arr.length; outer++) {
      for (inner = outer; inner >= h && arr[inner-h] > arr[inner]; inner = inner-h) {
        var temp = arr[inner];
        arr[inner] = arr[inner-h];
        arr[inner-h] = temp;
      }
    }
    h = Math.round(h/3);
  }
  return arr;
}
console.log(shellSort(arr));  