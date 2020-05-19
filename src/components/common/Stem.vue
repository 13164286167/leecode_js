<template>
    <div class="font24">
        <div v-for="stem in arrayData" :key="stem.id">
           <StemContent :content="stem"></StemContent>
        </div>
    </div>
</template>
<script>
import arrayAnswer from "../../leecodejs/array/index"
import StemContent from "./StemContent"
export default {
    name:"Stem",
    props:['arrayData'],
    components:{StemContent},
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