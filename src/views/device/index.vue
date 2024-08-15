<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <div>total: {{ deviceList?.total || 0 }}</div>
  <div v-if="deviceList" v-for="device in deviceList?.devices">
    {{ device }}
    <button
      @click="
        () => {
          onReportNow(device.id);
        }
      "
    >
      立即上报
    </button>
    <button
      @click="
        () => {
          router.push(`/overview?deviceId=${device.id}`);
        }
      "
    >
      查看数据
    </button>
    <button
      @click="
        () => {
          router.push(`/boatControl?deviceId=${device.id}`);
        }
      "
    >
      控制小船
    </button>
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
