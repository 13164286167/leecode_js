<template>
    <div class="font24">
        <div v-for="stem in arrayData" :key="stem.id">
            <h3>{{stem.id+1}}{{stem.stemTitle}}</h3>
            <h5>{{stem.stemContent}}</h5>
            <button @click="isShowAnswer">{{showMsg}}</button>
            <h5 v-show="isShow">{{stem.answerCode}}</h5>
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
    computed: {
        showMsg(){
            return this.isShow ? "隐藏答案" : "显示答案";
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