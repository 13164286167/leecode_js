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

/**
 * 解法有瑕疵  双高
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let indexs;
    let length = s.length;
    let dt = -1;
    let dp = new Array(length).fill("").map(()=>{
        return new Array(length).fill(false)
    })
    for(let i = 0; i < length; i++){
        for(let j = 0; j <= i ; j++ ){
            if((s[i] === s[j])&&(i - j < 2 || dp[j+1][i-1])){
                dp[j][i] = true;
                if(i-j > dt){
                    dt = i - j;
                    indexs = [j,i+1]
                }
            }
        }
    }
    return dt > -1  ? s.slice(indexs[0],indexs[1]) : ""
};
export default [validPalindrome,longestPalindrome]