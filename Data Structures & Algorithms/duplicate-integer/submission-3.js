class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sets = new Set(nums);
        if (sets.size != nums.length) {
            return true;
        }
        return false;
    }
}
