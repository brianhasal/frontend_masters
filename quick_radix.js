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
  const strNo = inputNo.toString();
  return strNo.length;
}



function radixSort(array) {
  // code goes here

  //find longest number (DONE)
  let longestNo = 0;
  for (let num of array) {
    let temp = getLongestNumber(num);
    // console.log(temp);
    if (temp > longestNo) {
      longestNo = temp;
    }
  };


  //create how many buckets you need (an array of 10 arrays)

  let arrayStack = [[], [], [], [], [], [], [], [], [], []];

  let placeCount = 0;

  for (let bucket = 0; bucket < array.length; bucket++) {
    //this section loads numbers into buckets
    while (array.length > 0) {
      let tempNo = array.splice(0);
      let digitOut = getDigit(tempNo, placeCount, longestNo);
      switch (digitIn) {
        case "0":
          arrayStack[bucket].append(tempNo);
          break;
        case "1":
          arrayStack[1].append(tempNo);
          break;
        case "2":
          arrayStack[2].append(tempNo);
          break;
        case "3":
          arrayStack[3].append(tempNo);
          break;
        case "4":
          arrayStack[4].append(tempNo);
          break;
        case "5":
          arrayStack[5].append(tempNo);
          break;
        case "6":
          arrayStack[6].append(tempNo);
          break;
        case "7":
          arrayStack[7].append(tempNo);
          break;
        case "8":
          arrayStack[8].append(tempNo);
          break;
        case "9":
          arrayStack[9].append(tempNo);
          break;
      }
    }
  }

  return arrayStack;
  // AT THIS POINT, THE ARRAYSTACK ARRAY IS FULL
  // SEND EACH ARRAY'S NUMBERS OUT FROM THE FRONTUNTIL THEY'RE FULL

  //for loop for how many iterations you need to do
    // while loop
    // enqueue (throwing something into an array) the numbers into their buckets

    //for loop for each bucket
    //dequeue all of the results

};

console.log(radixSort([1, 2, 345]));

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


