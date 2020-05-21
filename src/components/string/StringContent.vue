<template>
    <div>
        <Stem :arrayData="arrayData">
        </Stem>
        <router-view></router-view>
    </div>
</template>
<script>
import Stem from '../common/Stem'
import stringAnswer from "../../leecodejs/array/index"
console.log(stringAnswer)
export default {
    name:"ArrayContent",
    components:{Stem},
    data(){
        return{
             arrayData:[
                {
                    id:0,
                    stemTitle:`680.验证回文字符串 Ⅱ`,
                    stemContent:`给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。`,
                    level:"简单",
                    answerCode:String(stringAnswer[0])
                },
                {
                    id:1,
                    stemTitle:`5.最长回文子串`,
                    stemContent:`给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。`,
                    level:"中等",
                    answerCode:String(stringAnswer[0])
                }
                
            ]
        }
    }

}
</script>