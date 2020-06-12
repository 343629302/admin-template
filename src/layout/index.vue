<template>
  <div class="global-layout">
    <el-container>
      <el-aside width="auto">
        <left-navigation ref="leftNavigation"></left-navigation>
      </el-aside>
      <el-container>
        <el-header>
          <top-navigation></top-navigation>
        </el-header>
        <el-main>
          <keep-alive>
            <transition
              name="fade-transform"
              mode="out-in"
              v-if="$route.meta.keepAlive"
            >
              <router-view :key="key" />
            </transition>
          </keep-alive>
          <transition
            name="fade-transform"
            mode="out-in"
            v-if="!$route.meta.keepAlive"
          >
            <router-view :key="key" />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftNavigation from "@/components/navigation/left-navigation.vue";
import TopNavigation from "@/components/navigation/top-navigation.vue";

export default {
  components: {
    LeftNavigation,
    TopNavigation
  },
  methods: {},
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>

<style lang="scss">
@import url("~@/styles/transition.scss");
.el-container {
  height: 100vh;
  .el-main {
    background-color: #eee;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
