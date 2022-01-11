/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    for(let i=0; i<strs[0].length; i++){
        let char = strs[0][i] //checking the ith element of the first string
        for(let j=0; j<strs.length; j++){
            if (strs[j][i] !== char) return prefix // if a character doesn't match the current letter in the first string, return the prefix
        }
        prefix = prefix + char // if characters do match, add it to the prefix
    }
    return prefix
};