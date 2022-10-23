/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

//number = 1391, place = 0, longestNumber = 4
//returns 1

function getDigit(number, place, longestNumber) {
  let strNo = number.toString();
  let length = strNo.length;
  if (length < longestNumber) {
    let difference = (longestNumber - length);
    strNo = (("0".repeat(difference)) + strNo);
  };
  let strArray = strNo.split("");
  let arrRev = strArray.reverse();
  let strRev = arrRev.join("");
  return strRev[place];
}


function getLongestNumber(inputNo) {
  const strNo = inputNo.toString;
  return strNo.length;
}



function radixSort(array) {
  // code goes here

  //find longest number (DONE)

  //create how many buckets you need (an array of 10 arrays)

  //for loop for how many iterations you need to do
    // while loop
    // enqueue (throwing something into an array) the numbers into their buckets

    //for loop for each bucket
    //dequeue all of the results

}

const nums = [20,
  51,
  3,
  801,
  415,
  62,
  4,
  17,
  19,
  11,
  1,
  100,
  1244,
  104,
  944,
  854,
  34,
  3000,
  3001,
  1200,
  633
];


