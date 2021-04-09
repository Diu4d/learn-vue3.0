<template>
  <button @click="start">开始任务</button>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'
export default defineComponent({
  name:'start',
  setup() {
    let router = useRouter()
    //全局路由对象
    let route = useRoute()
    //当前路由对象
    let name = ref('jack')
    let num = ref(10)
    let obj = ref({
      msg:'start'
    })
    let start = () => {
      router.push({
        // path:'/home',
        path:'/home',
        // query:{
        //   //query传递过来的参数都是字符串的类型
        //   name:name.value,
        //   num:num.value,
        //   obj:JSON.stringify(obj)
        // },
        params: {
          name:name.value,
          num:num.value,
          obj:JSON.stringify(obj)
        }
        //query传参可以用name和path
        // 而parmas只能用path进行传参且不会在地址栏显示并且刷新后不显示
      })
    }
    return {
      start
    }
  }
})
</script>