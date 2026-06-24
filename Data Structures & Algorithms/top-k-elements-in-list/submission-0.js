class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const maps = new Map()
        for(let value of nums)
        {
            if (maps.has(value)){
                maps.set(value, maps.get(value)+ 1)
            }
            else {
                maps.set(value, 1)
            }
        }
        const arr = [...maps.entries()]
        arr.sort((a, b)=> b[1] - a[1])
        return arr.slice(0, k).map(entry=> entry[0])
    }
}
