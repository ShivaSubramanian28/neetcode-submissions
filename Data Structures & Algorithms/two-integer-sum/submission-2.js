class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = new Map()
        for ( let num = 0 ; num < nums.length ; num++){
            const complementValue = target - nums[num];
            if (maps.has(complementValue)){
                return [maps.get(complementValue), num]
            }
            maps.set(nums[num], num)
        }
    }
}
