<template>
    <div>
        <Stem :arrayData="arrayData"></Stem>
        
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
                    level:"简单",
                    answerCode:String(arrayAnswer[0])
                },
                {
                    id:1,
                    stemTitle:` 判定是否互为字符重排`,
                    stemContent:`给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。`,
                    level:"简单",
                    answerCode:String(arrayAnswer[1])
                },
                {
                    id:2,
                    stemTitle:` 旋转矩阵`,
                    level:"中等",
                    stemContent:`给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。`,
                    answerCode:String(arrayAnswer[2])
                },
                {
                    id:3,
                    stemTitle:` 只出现一次的数字`,
                    stemContent:`给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。`,
                    level:"简单",
                    answerCode:String(arrayAnswer[3])
                },
                {
                    id:4,
                    stemTitle:` URL化`,
                    level:"简单",
                    stemContent:`URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。`,
                    answerCode:String(arrayAnswer[4])
                },
                {
                    id:5,
                    stemTitle:` 寻找数组的中心索引`,
                    level:"简单",
                    stemContent:`给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。\n我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。\n如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。`,
                    answerCode:String(arrayAnswer[5])
                },
                {
                    id:6,
                    stemTitle:` 105.从前序与中序遍历序列构造二叉树`,
                    level:"中等",
                    stemContent:`根据一棵树的前序遍历与中序遍历构造二叉树。注意:你可以假设树中没有重复的元素。`,
                    answerCode:String(arrayAnswer[6])
                },
                {
                    id:7,
                    stemTitle:`146. LRU缓存机制`,
                    level:"中等",
                    stemContent:`运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。`,
                    answerCode:String(arrayAnswer[7])
                },
                {
                    id:8,
                    stemTitle:`101. 对称二叉树`,
                    level:"简单",
                    stemContent:`给定一个二叉树，检查它是否是镜像对称的。`,
                    answerCode:String(arrayAnswer[8])
                },
            ]
        }
    }

}
</script>