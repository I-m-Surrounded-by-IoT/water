<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <div class="common-layout">
    <el-container>
      <el-main style="display: auto">
        <iframe
          v-if="mapUrl.value !== ''"
          :src="mapUrl"
          width="100%"
          height="100%"
        ></iframe>
      </el-main>
    </el-container>
  </div>
  <div class="container">
    <div class="canvas-wrapper">
      <canvas id="temperature" width="100" height="100"></canvas>
      <canvas id="pH" width="100" height="100"></canvas>
      <canvas id="Oxygen" width="100" height="100"></canvas>
      <canvas id="Tsw" width="100" height="100"></canvas>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import breadcrumb from "@/components/breadcrumb.vue";
import { useRoute } from "vue-router";
import Chart from "chart.js/auto";

const route = useRoute();
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

const newChart = (html, title = "Chart", labels, datasets) => {
  return new Chart(html, {
    type: "line",
    data: {
      labels,
      datasets,
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "时间",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "预测数据走向",
          },
        },
      },
    },
  });
};

onMounted(() => {
  mapUrl.value = newMapUrl(
    route.query.deviceId,
    {
      Lat: Number(route.query.lat).toFixed(5),
      Lon: Number(route.query.lon).toFixed(5),
    },
    Number(route.query.time),
    route.query.level || 0
  );
  const record = route.query.record
    ? JSON.parse(decodeURIComponent(route.query.record))
    : {};
  const guess = route.query.guess
    ? JSON.parse(decodeURIComponent(route.query.guess))
    : {};
  console.log(record);
  console.log(guess);

  // ----------
  if (!guess.qualities) return;
  const labels = guess.qualities.map((q) =>
    new Date(q.timestamp).toLocaleString()
  );
  newChart(document.getElementById("temperature"), "Temperature", labels, [
    {
      label: "Temperature",
      data: guess.qualities.map((q) => q.temperature) /* 火红色 */,
      borderColor: "rgb(178, 34, 34)",
      backgroundColor: "rgba(178, 34, 34, 0.2)",
    },
  ]);
  newChart(document.getElementById("pH"), "pH", labels, [
    {
      label: "pH",
      data: guess.qualities.map((q) => q.ph) /* 粉色 */,
      borderColor: "rgb(255, 192, 203)",
      backgroundColor: "rgba(255, 192, 203, 0.2)",
    },
  ]);
  newChart(document.getElementById("Oxygen"), "Oxygen", labels, [
    {
      label: "Oxygen",
      data: guess.qualities.map((q) => q.oxygen) /* 蓝色 */,
      borderColor: "rgb(135, 206, 250)",
      backgroundColor: "rgba(135, 206, 250, 0.2)",
    },
  ]);
  newChart(document.getElementById("Tsw"), "Tsw", labels, [
    {
      label: "Tsw",
      data: guess.qualities.map((q) => q.tsw) /* 黄色 */,
      borderColor: "rgb(204, 255, 0)",
      backgroundColor: "rgba(204, 255, 0, 0.2)",
    },
  ]);
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
  overflow-x: hidden;
  overflow-y: hidden;
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
.container {
  display: flex;
}

.canvas-wrapper {
  width: 600px;
  height: auto;
  max-height: 350px;
  display: flex;
  justify-content: space-between;
}
</style>
