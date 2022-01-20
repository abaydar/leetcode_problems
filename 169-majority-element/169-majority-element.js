/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums.length/2
    let countHash = {}
    
    for(let i=0; i<nums.length; i++){
        countHash[nums[i]] ? countHash[nums[i]]++ : countHash[nums[i]] = 1
        
        if (countHash[nums[i]] > majority){
            return nums[i]
        }
        
    }
    
   
    
};