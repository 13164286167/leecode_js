<template>
    <div class="font24">
        <div v-for="stem in arrayData" :key="stem.id">
            <h1>{{stem.id+1}}{{stem.stemTitle}}</h1>
            <h2>{{stem.stemContent}}</h2>
            <button @click="isShowAnswer">显示答案</button>
            <h3 v-show="isShow">{{stem.answerCode}}</h3>
        </div>
    </div>
</template>
<script>
import arrayAnswer from "../../leecodejs/array/index"
export default {
    name:"Stem",
    props:['arrayData'],
    mounted(){
        console.log(this.arrayData)
    },
    methods:{
        isShowAnswer(){
            this.isShow = !this.isShow;
        }
    },
    data(){
        return{
            isShow:false
        }
    }
}
</script>
<style scope>
    .font24{
        font-size: 24px;
    }
</style>