<template>
  <div class="container">
    <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
    <!-- <div v-if="isComplete > 0" class="btn"> -->
    <button @click="clear">清除已完成</button>
    <!-- </div> -->
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });
    let num = ref(0);
    let clear = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false
      });
      ctx.emit("clear", arr);
    };
    return {
      clear,
      num,
      isComplete,
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>