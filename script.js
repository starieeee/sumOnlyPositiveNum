function positiveSum(arr) {
  if (arr.length === 0)
  {
    return 0;
  }
  else {
    // a is sum, b is num
    return arr.reduce((a,b) => b > 0 ? a+b : a,0);
  }
}
console.log(positiveSum([1, -4, 7, 12]));
