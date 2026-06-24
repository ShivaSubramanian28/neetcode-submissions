class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = new Map()
        for (let i =0; i< nums.length; i++)
        {
            const complementValue = target - nums[i]
            if (maps.has(complementValue)){
                return [maps.get(complementValue), i]
            }
            maps.set(nums[i], i)
        }
    }
}
