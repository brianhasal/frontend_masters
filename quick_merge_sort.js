const mergeSort = (nums) => {
   // set base case
   if (nums.length === 1) {
    return nums;
  };

  // theirs
  // if (nums.length < 2) {
  //   return nums;
  // }

  

  // set variables
  let length = nums.length;
  let middle = Math.floor(length / 2);
  let leftSide = nums.slice(0, middle);
  let rightSide = nums.slice(middle);
  // console.log(nums);
  // console.log(leftSide);
  // console.log(rightSide);

  // run merge function that accepts two sorted arrays and returns one sorted array
  return merge(mergeSort(leftSide), mergeSort(rightSide));

  function merge(left, right) {
    let out_array = [];
    while (left.length && right.length) {
      if (left[0] >= right[0]) {
        out_array.push(right.shift());
      } else {
        out_array.push(left.shift());
      }
    }
    return out_array.concat(left, right);
  };
};

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
