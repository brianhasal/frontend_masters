const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];




// function insertionSort(nums) {
//   for (let count = 0; count < nums.length; count++) {
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] > nums[i + 1]) {
//         let temp = nums[i];
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//       }
//     };
//   };
//   return nums
// }

// console.log(insertionSort(nums));

nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];


function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
    let j; // the inner counter

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }

    // do the insertion
    nums[j + 1] = numberToInsert;
  }
  return nums;
}