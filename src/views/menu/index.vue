<template>
  <div class="container">
    <el-container style="height: 100%">
      <el-header>
        <span class="header-center">欢迎来到水界守护者</span>
        <div class="header-right">
          <el-icon><Message /></el-icon>
          <el-avatar :size="24" :src="circleUrl" :class="block" />
          <el-dropdown>
            <span class="el-dropdown-link"> 更多 </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click="onLogout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo" router>
            <el-menu-item index="/home">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/overview">
              <el-icon><Document /></el-icon>
              <span>系统概览</span>
            </el-menu-item>
            <el-menu-item index="/device">
              <el-icon><Open /></el-icon>
              <span>设备管理</span>
            </el-menu-item>
            <el-menu-item index="/Systemlogs">
              <el-icon><Collection /></el-icon>
              <span>操作日志</span>
            </el-menu-item>
            <el-menu-item index="/user">
              <el-icon><User /></el-icon>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="/aftersales">
              <el-icon><Service /></el-icon>
              <span>联系我们</span>
            </el-menu-item>
            <el-menu-item index="/set">
              <el-icon><Setting /></el-icon>
              <span>系统设置</span>
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-main> <RouterView></RouterView> </el-main>
      </el-container>
      <el-footer><a>Copyright © 2022-2024 永远的神 版权所有</a></el-footer>
    </el-container>
  </div>
</template>
<script setup>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();

const onLogout = () => {
  localStorage.removeItem("token");
  route.replace("/login");
};

const state = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

const { circleUrl } = toRefs(state);
</script>

<style scoped>
.el-header {
  display: flex;
  height: 55px;
  background: #b3c0d1;
  color: #333;
  align-items: center;
  justify-content: space-between;

  .header-center {
    font-size: 20px;
  }
  .header-right {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-menu-item {
  background: #d3dce6;
}

:deep(.el-sub-menu__title) {
  background: #d3dce6;
}
:deep(.el-menu-item-group) {
  background: #d3dce6;
}
.custom-link {
  text-decoration: none;
  color: #000;
}
</style>
