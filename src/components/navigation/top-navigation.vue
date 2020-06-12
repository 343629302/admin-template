<template>
  <div class="top-navigation-warpper">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbList"
          :key="index"
        >
          <a
            href="javascript:void(0);"
            v-if="item.to"
            @click="routerJump(item.to)"
            >{{ item.title }}</a
          >
          <span v-else>{{ item.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <div class="notifier">
        <span class="el-icon-bell"></span>
        <span class="dot" :class="{ new: hasNew }"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasNew: false,
      breadcrumbList: []
    };
  },
  created() {
    //初始化的时候获取初始化的路由。触发方法。初始化面包屑
    const router = this.$router.currentRoute;
    this.breadcrumbRouter(router);
  },
  methods: {
    //点击面包屑的时候跳转路由
    outerJump(path) {
      const router = this.$router;
      if (
        router.path === path ||
        (router.currentRoute.matched[0].path === path &&
          router.currentRoute.matched[0].redirect === router.currentRoute.path)
      ) {
        return;
      }
      router.replace(path);
    },
    //返回面包屑的地址
    breadcrumbRouter(router) {
      this.breadcrumbList = [];
      if (router.path === "/homepage/index") {
        this.breadcrumbList.push({
          title: "主页"
        });
      } else {
        this.breadcrumbList.push({
          title: "主页",
          to: "/homepage/index"
        });
        router.matched.forEach(item => {
          if (item.meta.title) {
            if (item.path === router.path) {
              this.breadcrumbList.push({
                title: item.meta.title
              });
            } else {
              this.breadcrumbList.push({
                title: item.meta.title,
                to: item.path
              });
            }
          }
        });
      }
    }
  },
  watch: {
    //当路由改变的时候触发获取修改面包屑
    $route(router) {
      this.breadcrumbRouter(router);
    }
  }
};
</script>

<style lang="scss" scoped>
.top-navigation-warpper {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    height: 100%;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    .ico {
      width: 50px;
    }
    .el-breadcrumb {
      a {
        &:hover {
          color: #409eff;
        }
      }
    }
  }
  .right {
    height: 100%;
    line-height: 60px;
    .notifier {
      width: 50px;
      text-align: center;
      position: relative;
      cursor: pointer;
      .el-icon-bell {
        font-size: 18px;
      }
      .dot {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #f44336;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        display: none;
        &.new {
          display: block;
        }
      }
    }
  }
}
</style>
