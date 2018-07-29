const arr = [3, 50, 30, 4, 332, 11, 2, 4, 539, 39, 551, 201, 12, 1] ;

//returns the index of the target value (0 - arr.length), null if not found
//uses linear search which uses O(N) time complexity

var linearSearch = function(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 3));