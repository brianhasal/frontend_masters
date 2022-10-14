
let input = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

let input2 = [4, 3, 2, 1, 7, 6, 5, 8, 9, 10];

let input3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];



function bubbleSort(nums) {
  let swapped = true;
  for (var i = 0; i < nums.length; i++) {
    swapped = false;
    let j = (i + 1);
    while (j < nums.length) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        swapped = true;
      } else {
        j += 1;
      }
    };
    if (swapped === false) {
      return nums;
    }
  }
  return nums;
}

console.log(bubbleSort(input));
console.log(bubbleSort(input2));
console.log(bubbleSort(input3));



