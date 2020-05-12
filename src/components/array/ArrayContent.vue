<template>
    <div>
        <Stem :arrayData="arrayData">
            <div slot="array" slot-scope="slotData">
                {{slotData.arrayData}}
            </div>
        </Stem>
    </div>
</template>
<script>
import Stem from '../common/Stem'
import arrayAnswer from "../../leecodejs/array/index"
console.log(arrayAnswer)
export default {
    name:"ArrayContent",
    components:{Stem},
    data(){
        return{
             arrayData:[
                {
                    id:0,
                    stemTitle:`删除排序数组中的重复项`,
                    stemContent:`给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。`,
                    answerCode:String(arrayAnswer[0])
                },
                {
                    id:1,
                    stemTitle:` 判定是否互为字符重排`,
                    stemContent:`给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。`,
                    answerCode:String(arrayAnswer[1])
                },
                {
                    id:2,
                    stemTitle:` 旋转矩阵`,
                    stemContent:`给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。`,
                    answerCode:String(arrayAnswer[2])
                }
            ]
        }
    }

}
</script>