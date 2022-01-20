/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums.length/2
    let countHash = {}
    
    for(let i=0; i<nums.length; i++){
        if (countHash[nums[i]]){
            countHash[nums[i]]++
        } else {
            countHash[nums[i]] = 1
        }
    }
    
    return Object.keys(countHash).find(key => countHash[key] > majority)
    
};