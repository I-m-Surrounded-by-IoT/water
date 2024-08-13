<template>
  <div class="container">
    <el-container style="height: 100%">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            background-color="#545c64"
            text-color="#ffffff"
            active-text-color="#ffd04b"
            default-active="1"
          >
            <el-sub-menu index="1">
              <template #title>
                <span
                  ><el-icon><House /></el-icon>Home</span
                >
              </template>
              <el-menu-item index="1-1">设备1</el-menu-item>
              <el-menu-item index="1-2">设备2</el-menu-item>
              <el-sub-menu index="1-3">
                <template #title>设备3</template>
                <el-menu-item index="1-3-1">运行情况</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2"
              ><el-icon><document /></el-icon>地图</el-menu-item
            >
            <el-menu-item index="3"
              ><el-icon><setting /></el-icon>设置</el-menu-item
            >
          </el-menu></el-aside
        >
        <el-main> <RouterView></RouterView> </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script setup></script>

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
</style>
