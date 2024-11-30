<template>
  <div class="boat-container">
    <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
    <button
      style="margin-bottom: 10px"
      @click="
        () => {
          takeBoatForword(deviceId);
        }
      "
    >
      前进
    </button>
    <div>
      <button
        @click="
          () => {
            takeBoatLeft(deviceId);
          }
        "
      >
        左转
      </button>
      <button
        @click="
          () => {
            takeBoatRight(deviceId);
          }
        "
      >
        右转
      </button>
    </div>
    <iframe
      v-if="mapUrl.value !== ''"
      :src="mapUrl"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import breadcrumb from "@/components/breadcrumb.vue";
import {
  takeBoatForword,
  takeBoatLeft,
  takeBoatRight,
  getDetail,
} from "@/api/dete";
import { useRoute } from "vue-router";

const route = useRoute();
const deviceId = ref(route.query.deviceId || 2);

const item = ref({
  first: "控制小船",
});

const mapUrl = ref("");

function newMapUrl(deviceId, geo, timestamp, level) {
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
  )}\n污染等级:${level}`;
  params.set("content", content);
  params.set("autoOpen", "true");

  return `${url.toString()}&latlng=${geo.Lon},${geo.Lat}&l`;
}

onMounted(async () => {
  const data = await getDetail(deviceId.value);
  console.log(data.data.data.data);
  mapUrl.value = newMapUrl(
    data.data.data.deviceId,
    {
      Lat: Number(data.data.data.data.geoPoint.lat).toFixed(5),
      Lon: Number(data.data.data.data.geoPoint.lon).toFixed(5),
    },
    Number(data.data.data.data.timestamp),
    0
  );
});
</script>

<style scoped>
.boat-container {
  height: 724.333px;
}
</style>
