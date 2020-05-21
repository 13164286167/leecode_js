<template>
    <div>
        <h3>{{content.id+1}}.{{content.stemTitle}}</h3>
        <h5>{{content.stemContent}}</h5>
        <button @click="isShowAnswer">{{showMsg}}</button>
        <h5 v-show="isShow">{{content.answerCode}}</h5>
    </div>
</template>

<script>
export default {
    name:"StemContent",
    props:['content'],
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