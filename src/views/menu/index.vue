<template>
  <div class="container">
    <el-container style="height: 100%">
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo" router>
            <el-menu-item index="/home">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><Document /></el-icon>
              <span>系统概览</span>
            </el-menu-item>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Odometer /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item-group title="设备状态">
                <el-menu-item index="3-1">在线设备</el-menu-item>
                <el-menu-item index="3-2">离线设备</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="可视化">
                <el-menu-item index="3-3">位置地图</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="4">
              <el-icon><Open /></el-icon>
              <span>操作日志</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon><Setting /></el-icon>
              <span>系统设置</span>
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-main> <RouterView></RouterView> </el-main>
      </el-container>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>
<script setup>
import Header from "../home/Header.vue";
import Footer from "../home/Footer.vue";
</script>

<style scoped>
.el-header,
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
</style>
