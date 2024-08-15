<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <div class="common-layout">
    <el-container>
      <el-main>
        <iframe
          v-if="mapUrl.value !== ''"
          :src="mapUrl"
          width="100%"
          height="100%"
        ></iframe>
      </el-main>
      <el-aside width="300px"
        ><el-button type="success">更新</el-button></el-aside
      >
    </el-container>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import breadcrumb from "@/components/breadcrumb.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const mapUrl = ref("");

function newMapUrl(deviceId, geo, timestamp, more) {
  let date = new Date(timestamp);
  let url = new URL("https://map.baidu.com/");
  let params = url.searchParams;
  params.set("title", `设备ID:${deviceId}`);

  let content = `坐标:${geo.Lat},${geo.Lon}\n时间:${date.toLocaleString(
    "zh-CN",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  )}\n`;

  for (const key in more) {
    if (more.hasOwnProperty(key)) {
      content += `${key}:${more[key]}\n`;
    }
  }

  params.set("content", content);
  params.set("autoOpen", "true");
  params.set("latlng", `${geo.Lat},${geo.Lon}`);
  params.set("l", "");

  return url.toString();
}

onMounted(() => {
  mapUrl.value = newMapUrl(
    route.query.deviceId,
    { Lat: route.query.lat, Lon: route.query.lon },
    Number(route.query.time),
    route.query.more ? JSON.parse(route.query.more) : {}
  );
  console.log(mapUrl.value);
});

const item = ref({
  first: "设备状态",
});

const show = ref(false);
const infoWindowClose = () => {
  show.value = false;
};
const infoWindowOpen = () => {
  show.value = true;
};
</script>

<style scoped>
.el-main {
  height: 694.333px;
  padding: 0;
}
.map {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 694.333px;
}
</style>
