const mergeSort = (nums) => {
  // set base case
  if (length === 1) {
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



 };

mergeSort([8, 2, 1]);
