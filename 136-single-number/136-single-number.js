/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numHash = {}
    
    for (let i=0; i<nums.length; i++){
        if(numHash[nums[i]]){
            numHash[nums[i]]++
        } else {
            numHash[nums[i]] = 1
        }
    }
    
    for (let i=0; i<nums.length; i++){
        if(numHash[nums[i]] === 1){
            return nums[i]
        }
    }
    
};