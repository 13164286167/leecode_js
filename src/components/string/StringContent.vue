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
                }
                
            ]
        }
    }

}
</script>