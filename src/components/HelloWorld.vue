<template>
  <div>
    <ArrayContent></ArrayContent>
  </div>
</template>
<script>
import ArrayContent from './array/ArrayContent'
export default {
  name: 'HelloWorld',
  components:{ArrayContent},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
