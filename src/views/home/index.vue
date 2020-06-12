<template>
  <div>
    <div>{{ num }}</div>
    <div @click="add">按钮</div>
  </div>
</template>

<script>
import { getHome } from "@/api/http.js";
export default {
  data() {
    return {
      num: 1
    };
  },
  created() {
    this.initHome();
  },
  methods: {
    add() {
      this.num++;
    },
    async initHome() {
      const res = await getHome();
      this.num = res.data.num;
    }
  }
};
</script>

<style lang="scss" scoped></style>
