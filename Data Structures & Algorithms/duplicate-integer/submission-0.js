class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for( let i = 0 ; i< nums.length; i++){
            seen.add(nums[i])
        }
        if (seen.size === nums.length){
            return false
        }
        else{
            return true
        }
    }
}
