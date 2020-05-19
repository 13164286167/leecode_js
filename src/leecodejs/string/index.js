/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function isHuiWen(s,l,r){
        for(let i = l,j = r; i < j ; ++i,--j){
            if(s[i] != s[j])return false;
        }
        return true
    }
    let length = s.length;
    let left = 0;
    let right = length -1;
    while(left < right){
        if(s[left] != s[right]){
            return isHuiWen(s,left + 1,right) || isHuiWen(s,left,right - 1)
        }
        ++left;
        --right;
    }
    return true;
};

export default [validPalindrome]