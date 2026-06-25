class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const maps = new Map()
        let isAnagram = true
        if (s.length !== t.length) return false
        for (const character of s){
           if (maps.has(character)){
            maps.set(character, maps.get(character) + 1)
           }
           else {
            maps.set(character, 1)
           }
        }
        for (const char of t){
            if (maps.has(char)){
                maps.set(char, maps.get(char) - 1)
            }
            else{
                maps.set(char, 1)
            }
        }
        for (const value of maps.values()){
            if (value !=0){
                isAnagram = false
                break
            }
           
        }
        return isAnagram
    }
}
