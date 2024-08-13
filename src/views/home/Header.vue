<template>
  <header>
    <div style="flex: 1; text-align: center; font-size: 34px; color: #425049">
      <span>欢迎来到水界守护者</span>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="40" :src="avatar" :class="['avatar-info']">
            </el-avatar>
          </div>
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon><User /></el-icon>
            个人中心
          </el-dropdown-item>
          <el-dropdown-item
            ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      avatar: require("@/assets/images/001.jpg"),
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
/*设定头像图片样式*/
.avatar-info {
  margin-top: 10px;
  margin-right: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.custom-link {
  text-decoration: none;
  color: black;
}
</style>
