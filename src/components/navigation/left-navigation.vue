<template>
  <div class="left-navigation-warpper">
    <el-scrollbar>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical"
        text-color="#fff"
        background-color="#333"
        active-text-color="#fff"
        router
      >
        <div v-for="(item, index) in routers" :key="index" class="menu-warpper">
          <el-menu-item :index="item.path" v-if="item.children.length < 2">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
          <el-submenu :index="item.path" v-else popper-append-to-body>
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </template>
            <el-menu-item
              :index="sonItem.path"
              v-for="(sonItem, sonIndx) in item.children"
              :key="sonIndx"
              >{{ sonItem.meta.title }}</el-menu-item
            >
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    //获取当前的路由路由
    routers() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style lang="scss" scoped>
.left-navigation-warpper {
  height: 100vh !important;
  .el-scrollbar {
    height: 100%;
    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
      .el-menu-vertical {
        height: 100vh !important;
        overflow-y: visible;
        &:not(.el-menu--collapse) {
          width: 200px;
        }
        height: 100%;
        .menu-warpper {
          & > li {
            text-align: left;
            i:nth-of-type(1) {
              margin-right: 20px;
            }
          }
        }
      }
      .el-menu--collapse {
        .menu-warpper {
          span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
          .el-submenu__icon-arrow {
            display: none;
          }
        }
      }
    }
  }
}
</style>
