<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <div class="table-wrapped">
    <!-- 顶部 -->
    <div class="table-top">
      <!-- 表格顶部 -->
      <div class="table-header">
        <!-- 搜索框 -->
        <div class="serch-wrapped">
          <el-input
            v-model="adminAccount"
            size="large"
            placeholder="输入账号进行搜索"
            :prefix-icon="Search"
          >
          </el-input>
        </div>
        <!-- 按钮 -->
        <div class="botton-wrapped">
          <el-button type="primary">立即上报</el-button>
        </div>
      </div>
      <!-- 表格内容 -->
      <div class="table-content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" />
          <el-table-column prop="account" label="账号" />
          <el-table-column prop="deviceId" label="编号" />
          <el-table-column prop="mac" label="设备mac" />
          <el-table-column prop="acreatedAt" label="createdAt" />
          <!-- 插槽 -->
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="success">开机</el-button>
              <el-button type="danger">关机</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 底部 -->
    <div class="table-footer">
      <el-pagination
        :page-size="20"
        :pager-count="9"
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

import breadcrumb from "@/components/breadcrumb.vue";

const item = ref({
  first: "系统概览",
});
const adminAccount = ref("");
const tableData = ref([
  {
    id: 1,
  },
]);
</script>

<style scoped>
.table-wrapped {
  padding: 8px;
  height: calc(90vh - 100px);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .table-top {
    .table-header {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      height: 40px;
      background: #fff;
    }
    .el-input__wrapper {
      height: 32px;
    }
    .el-button--primary {
      height: 32px;
    }
  }
  .table-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
