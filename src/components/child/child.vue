<template>
  <div>
    <h1>child</h1>
    父组件传递过来的数据：{{ msg }}
    <button @click="send">子传父</button>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Child",
  props: {
    msg: {
      //数据类型校验
      //必须要写type
      //props接收的数据也不能直接改
      type: String,
      //是否必传 默认为false
      require: false,
      //设置默认值
      default: "默认值",
    },
  },
  setup(props, ctx) {
    let childMsg = ref("我是子组件的数据");
    let send = () => {
      ctx.emit("aaa", childMsg.value);
    };
    //父组件传递过来的参数
    console.log(props);
    return {
      childMsg,
      send,
    };
    //  onMounted(() => {
    //    ctx.emit('send',{
    //   msg: childMsg.value,
    //    num: childMsg.value
    //  })
    //  })
  },
});
</script>