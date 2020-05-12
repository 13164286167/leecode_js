/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    for(let i = nums.length - 1; i>=0; i--){
        let num = nums[i];
        if(nums.indexOf(num) !== i){
            nums.splice(i,1)
        }
    }
    return nums.length;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkPermutation = function(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }else{
        return Array.from(s1).sort().join("") === Array.from(s2).sort().join("")
    }
 };
 
export default [removeDuplicates,checkPermutation]