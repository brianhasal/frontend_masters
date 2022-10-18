let input = [4, 9, 3, 6];

function quickSort(nums) {
  // base case, array of length 0 or 1
  if (nums.length <= 1){
    return nums;
  }

  // choose pivot
  let pivot = nums[(nums.length - 1)];

  // separate into left and right arrays
  let leftArray = nums.filter((digit) => digit < pivot);
  let rightArray = nums.filter((digit) => digit > pivot);

  // call quickSort on left and right arrays
  let left = quickSort(leftArray);
  let right = quickSort(rightArray);
  
  // return left.concat(pivot, right)
  return left.concat(pivot, right);
}

console.log(quickSort(input));