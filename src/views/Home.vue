<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del='del'></nav-main>
    <nav-footer :list="list" @clear='clear'></nav-footer>
    <!-- <button @click="add">{{add}}</button> -->
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import navHeader from "@/components/navHeader/navHeader";
import navMain from "@/components/navMain/navMain";
import navFooter from "@/components/navFooter/navFooter";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup(props, ctx) {
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");
    let store = useStore();
    //添加任务
    let add = (val) => {
      value.value = val;
      let flag = true;
      if (value.value == "") {
        alert("请输入内容");
        flag = false;
      }
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已存在");
        }
      });
      if (flag) {
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
        // let list = []
        // let all = {
        //   title:value.value,
        //   complete:false
        // }
        // list.push(all)
        // localStorage.setItem('list',list)
      }
    };
    //删除任务
    let del = (val) => {
      store.commit('delTodo', val)
    }
    //清除已完成任务
    let clear = (val) => {
      store.commit('clear', val)
    }
    

    // let num1 = ref(10);
    // let num2 = ref(20);
    // let add = computed(() => {
    //   return num1.value + num2.value;
    // });
    // return {
    //   num1,
    //   num2,
    //   add,
    // };
    return {
      add,
      value,
      list,
      del,
      clear
    };
  },
});
</script>
