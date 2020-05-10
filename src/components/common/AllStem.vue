<template>
    <div class="font24">
        <!-- <div v-for="stem in arrayData" :key="stem.id">
            <slot :name="'array'+stem.id" :arrayData="arrayData">随便放slot1</slot>
        </div>




         <Stem :arrayData="arrayData">
            <div slot="array" slot-scope="slotData">
                {{slotData.arrayData}}
            </div>
        </Stem> -->
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
    data(){
        return{
        }
    }
}
</script>
<style scope>
    .font24{
        font-size: 24px;
    }
</style>