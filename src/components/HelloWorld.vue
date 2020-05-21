<template>
  <div>
    <router-link to="array">数组</router-link>
    <router-link to="string">字符串</router-link>
    <keep-alive include="['string']" exclude="['array']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import ArrayContent from './array/ArrayContent'
import StringContent from './string/StringContent'
export default {
  name: 'HelloWorld',
  components:{ArrayContent,StringContent},
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
