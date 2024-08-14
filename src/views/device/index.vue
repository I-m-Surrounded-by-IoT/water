<template>
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
  </div>
</template>
<script setup>
import { getDeviceList, reportNow } from "@/api/device";
import { onMounted, ref } from "vue";
import { ElNotification } from "element-plus";
const deviceList = ref({});
onMounted(() => {
  getDeviceList().then(({ data }) => {
    deviceList.value = data.data;
  });
});

const onReportNow = (id) => {
  reportNow(id)
    .then((data) => {
      //   throw new Error("我草泥马");
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
</script>

<style scoped></style>
