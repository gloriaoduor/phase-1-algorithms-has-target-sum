
function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) { 

      const difference = target - array[i];

      for (let j = i + 1; j < array.length; j++) {

        if (array[j] === difference) 
        return true;
      }
    }
  
    return false;
  }

/* 
  Write the Big O time complexity of your function here
  has runtime of O(n^2)
*/

/* 
  Add your pseudocode here
  Initialize function hasTargetSum
    for elements in the array
      subtract the element from the target
        if difference is equal to an element in the array
          return true
        else 
          return false
*/

/*
  Add written explanation of your solution here

  //I need  to define a function called hasTargetSum which will
// recieve two argument , an array and a target both integers
// The function should loop through the array looking for a pair of values
//that will add up to the target value
//if they are available, then the function returns true, if not, 
//it returns false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 7, 5], 10));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 20, 40], 9));
}

module.exports = hasTargetSum;
