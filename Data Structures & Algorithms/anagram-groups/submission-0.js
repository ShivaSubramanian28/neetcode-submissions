class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const maps = new Map()
        for(let value of strs){
            var sortString = Array.from(value).sort().join("")
            if (!maps.has(sortString))
            {
                maps.set(sortString, [])
            }
            maps.get(sortString).push(value)
        }
        return [...maps.values()]
    }
}
