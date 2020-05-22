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


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let length = nums.length;
     let sum = 0;
     for(let i = length - 1; i >= 0; i--){
         sum += nums[i]
     }
     let leftSum = 0;
     for(let i = 0; i<length; i++){
         let item = nums[i];
         if(leftSum === sum - leftSum - item){
             return i;
         }
         leftSum += item;
         
     }
     return -1;
 };
 

 /**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 前序遍历 preorder = [3,9,20,15,7]
    // 中序遍历 inorder = [9,3,15,20,7]
    function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
    }
    let build = ((inorder) => {
            if(!inorder || !inorder.length){return null;}
            let pivot = preorder.shift();
            let pivotIndex = inorder.indexOf(pivot);
            let root = new TreeNode(pivot);
            root.left = build(inorder.slice(0,pivotIndex))
            root.right = build(inorder.slice(pivotIndex+1))
            return root;
        })
    return build(inorder)
};

export default [removeDuplicates,checkPermutation,rotateMatrix,singleNumber,replaceSpaces,pivotIndex,buildTree]