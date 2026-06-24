class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var string = "";
        for (let value of strs) {
            string += `${value.length}#${value}`;
        }
        return string
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result =[]
        for (let i = 0; i < str.length; ) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + length);
            result.push(word);
            i = j + 1 + length;
        }
        return result
    }
}
