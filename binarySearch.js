//returns the index of the target value (0 - arr.length), null if not found
//uses binary search which uses O(log(n)) time complexity
var arr = [1, 3, 10 , 22, 59, 69, 99, 100];

var binarySearch = function(arr, searchKey) {
  var lower = 0;
  var upper = arr.length - 1;
  var curIn;
  while(true) {
    curIn = Math.round((lower + upper) / 2);
    if (arr[curIn] === searchKey) {
      return curIn;
    } else if (lower > upper) {
      return null;
    } else {
      if (arr[curIn] < searchKey) {
        lower = curIn + 1;
      } else {
        upper = curIn - 1;
      }
    }
  }
}

console.log(binarySearch(arr, 1));