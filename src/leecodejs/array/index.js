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
export default {
    "0":removeDuplicates
}