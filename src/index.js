// Program to find shortest distance between two numbers
// Leetcode :243.

const arr = ["practice", "makes", "perfect", "coding", "makes"];

// word1= coding word2=practice

function shortestDistance(arr, word1, word2) {
  let index1 = -1;
  let index2 = -1;
  let minDist = 1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word1) {
      index1 = i;
      console.log(index1);
    }

    if (arr[i] == word2) {
      index2 = i;
      console.log(index2);
    }
    if (index1 != -1 && index2 != -1) {
      minDist = Math.min(minDist, Math.abs(index1 - index2));
    }
  }
  return minDist;
}

var res = shortestDistance(arr, "practice", "coding");
console.log(res);
