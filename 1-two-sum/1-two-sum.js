/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//check for sum of items in array (start with nested loop, improve bc this is O(n^2))
//push indices into output array for pairs that add up and equal the target

// var twoSum = function(nums, target) {
//     let pairIndices = []
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 pairIndices.push(i, j)
//             }
//         }
//     }
    
//     return pairIndices
       
// };

//try the complement approach?
//create a set to contain indices as keys and complements as values
//loop over nums array and push complements (target - nums[i]) into set along with their index IF it does not already exist in set
//if it exists, find index of "match" and current index and push into an array (return this array)

var twoSum = function(nums, target) {
    let complements = {}
    let pairIndices = []
    
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(diff in complements){
            pairIndices.push(complements[diff], i)
        }
        complements[nums[i]] = i 
    }
     
    //  console.log(complements)
    return pairIndices
        
};

