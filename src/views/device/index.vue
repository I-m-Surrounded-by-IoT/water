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
            v-model="deviceId"
            size="large"
            placeholder="输入账号进行搜索"
            :prefix-icon="Search"
          >
          </el-input>
        </div>
      </div>
      <!-- 表格内容 -->
      <div class="table-content">
        <el-table :data="deviceList.devices" border style="width: 100%">
          <el-table-column prop="id" label="设备id" />
          <el-table-column prop="createdAt" label="注册时间" />
          <el-table-column prop="mac" label="MAC" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <button
                @click="
                  () => {
                    onReportNow(row.id);
                  }
                "
              >
                立即上报
              </button>
              <button
                @click="
                  () => {
                    router.push(`/overview?deviceId=${row.id}`);
                  }
                "
              >
                查看数据
              </button>
              <button
                @click="
                  () => {
                    router.push(`/aftersales?deviceId=${row.id}`);
                  }
                "
              >
                控制小船
              </button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getDeviceList } from "@/api/device";
import { reportNow } from "@/api/dete";
import { onMounted, ref } from "vue";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

import breadcrumb from "@/components/breadcrumb.vue";

const deviceList = ref({});
onMounted(() => {
  getDeviceList().then(({ data }) => {
    deviceList.value = data.data;
  });
});

const onReportNow = (id) => {
  reportNow(id)
    .then((data) => {
      console.log("立即上报成功");
      ElNotification({
        title: "成功",
        message: "上报成功",
        duration: 0,
      });
    })
    .catch((e) => {
      console.log("立即上报失败", e);
      ElNotification({
        title: "失败",
        message: "上报失败" + e,
        duration: 0,
      });
    });
};

const item = ref({
  first: "设备管理",
});
</script>

<style scoped></style>
