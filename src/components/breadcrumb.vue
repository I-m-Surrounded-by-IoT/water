<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{ props.item.first }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="props.item.second">{{
        props.item.second
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup>
const props = defineProps(["item"]);
</script>

<style scoped>
.bread-crumb {
  height: 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
:deep(.el-breadcrumb__item) {
  height: 30px;
  font-size: 14px;
  line-height: 30px;
}
:deep(.el-breadcrumb__inner) {
  font-weight: 500;
}
</style>
