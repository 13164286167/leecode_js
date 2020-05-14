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
let  checkPermutation = function(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }else{
        return Array.from(s1).sort().join("") === Array.from(s2).sort().join("")
    }
 };
 


 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

let rotateMatrix = function(matrix) {
    const n = matrix.length
    for(let i = 0; i < n; i++) {
      for(let j = i + 1; j < n; j++) {
      //   const temp = matrix[i][j]
      //   matrix[i][j] = matrix[j][i]
      //   matrix[j][i] = temp
       matrix[i][j] = matrix[i][j] ^ matrix[j][i]
       matrix[j][i] = matrix[i][j] ^ matrix[j][i]
       matrix[i][j] = matrix[i][j] ^ matrix[j][i]
      }
      matrix[i] = matrix[i].reverse()
    }
  };

  /**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    return nums.reduce((pre,next)=>{
        return pre^next
    })
    // let res = 0;
    // for(let i = nums.length-1;i>=0;i--){
    //     res = res^nums[i]
    // }
    // return res;
};

/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
let replaceSpaces = function(S, length) {
    return S.slice(0,length).replace(/ /g,"%20");
};
export default [removeDuplicates,checkPermutation,rotateMatrix,singleNumber,replaceSpaces]