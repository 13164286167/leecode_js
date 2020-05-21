import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArrayContent from '@/components/array/ArrayContent'
import StringContent from '@/components/string/StringContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      children:[
        {
          path: '/',
          name: 'StringContent',
          component: StringContent
        },
        {
          path: 'array',
          name: 'ArrayContent',
          component: ArrayContent
        },
        {
          path: 'string',
          name: 'StringContent',
          component: StringContent
        }
      ],
      component: HelloWorld
    },
    // {
    //   path: '/array',
    //   name: 'ArrayContent',
    //   component: ArrayContent
    // },
  ]
})
