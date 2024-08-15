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
        <!-- 按钮 -->
        <div class="botton-wrapped">
          <el-button
            @click="
              () => {
                onReportNow(deviceId);
              }
            "
            type="primary"
            >立即上报</el-button
          >
        </div>
      </div>
      <div style="width: 600px; height: auto; max-height: 350px">
        <canvas id="chart"></canvas>
      </div>
      <div style="width: 600px; height: auto; max-height: 350px">
        <canvas style="width: 100px; height: 100px" id="pH"></canvas>
      </div>
      <div style="width: 600px; height: auto; max-height: 350px">
        <canvas style="width: 100px; height: 100px" id="oxygen"></canvas>
      </div>
      <div style="width: 600px; height: auto; max-height: 350px">
        <canvas style="width: 100px; height: 100px" id="tds"></canvas>
      </div>
      <div style="width: 600px; height: auto; max-height: 350px">
        <canvas style="width: 100px; height: 100px" id="tsw"></canvas>
      </div>
      <!-- 表格内容 -->
      <div class="table-content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="record.deviceId" label="设备id" />
          <el-table-column prop="record.createdAt" label="时间戳" />
          <el-table-column prop="level" label="污染等级" />
          <el-table-column label="坐标">
            <template #default="{ row }">
              {{ row.record.data.geoPoint.lat }},{{
                row.record.data.geoPoint.lon
              }}
            </template>
          </el-table-column>
          <el-table-column prop="record.data.ph" label="PH" />
          <el-table-column prop="record.data.oxygen" label="含氧量" />
          <el-table-column prop="record.data.tds" label="tds" />
          <el-table-column prop="record.data.tsw" label="tsw" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <button
                @click="
                  () => {
                    router.push({
                      path: '/map',
                      query: {
                        deviceId: row.record.deviceId,
                        lat: row.record.data.geoPoint.lat,
                        lon: row.record.data.geoPoint.lon,
                        time: row.record.createdAt,
                        guess: encodeURIComponent(JSON.stringify(row.guess)),
                        level: row.level,
                        record: encodeURIComponent(
                          JSON.stringify(row.record.data)
                        ),
                      },
                    });
                  }
                "
              >
                查看详情
              </button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 底部 -->
    <div class="table-footer">
      <el-pagination
        :page-size="20"
        layout="prev, pager, next"
        :total="total"
        v-model:current-page="currentPage"
      />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
import { Search } from "@element-plus/icons-vue";
import breadcrumb from "@/components/breadcrumb.vue";
import { deteList, reportNow } from "@/api/dete";
import { useRoute } from "vue-router";
import { useDebounceFn } from "@vueuse/core";
import { ElMessage } from "element-plus";
import router from "@/router";
import Chart from "chart.js/auto";
const route = useRoute();
const item = ref({
  first: "测试",
});
const deviceId = ref(route.query.deviceId || "2");
const tableData = ref([]);
const currentPage = ref(1);
const total = ref(0);
let chartInstance = undefined;
let phChartInstance = undefined;
let oxygenChartInstance = undefined;
let tdsChartInstance = undefined;
let tswChartInstance = undefined;
const getValue = useDebounceFn(() => {
  deteList(deviceId.value, currentPage.value).then(({ data }) => {
    tableData.value = data.data.records;
    total.value = data.data.total;
    // console.log(tableData.value);
    if (!tableData.value) return;
    chartInstance.data.labels = tableData.value.map((q) =>
      new Date(q.record.createdAt).toLocaleString()
    );
    chartInstance.data.datasets = [
      {
        label: "污染等级",
        data: tableData.value.map((q) => q.level || 0),
        borderColor: "rgb(230, 230, 250)",
        backgroundColor: "rgba(230, 230, 250, 0.2)",
      },
      {
        label: "pH",
        data: tableData.value.map((q) => q.record.data.ph),
        borderColor: "rgb(255, 192, 203)",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
    ];
    chartInstance.update("none");

    phChartInstance.data.labels = tableData.value.map((q) =>
      new Date(q.record.createdAt).toLocaleString()
    );
    phChartInstance.data.datasets = [
      {
        label: "pH",
        data: tableData.value.map((q) => q.record.data.ph),
        borderColor: "rgb(255, 192, 203)",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
    ];
    phChartInstance.update();

    oxygenChartInstance.data.labels = tableData.value.map((q) =>
      new Date(q.record.createdAt).toLocaleString()
    );
    oxygenChartInstance.data.datasets = [
      {
        label: "oxygen",
        data: tableData.value.map((q) => q.record.data.oxygen),
        borderColor: "rgb(255, 192, 203)",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
    ];
    oxygenChartInstance.update();

    tdsChartInstance.data.labels = tableData.value.map((q) =>
      new Date(q.record.createdAt).toLocaleString()
    );
    tdsChartInstance.data.datasets = [
      {
        label: "tds",
        data: tableData.value.map((q) => q.record.data.tds),
        borderColor: "rgb(255, 192, 203)",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
    ];
    tdsChartInstance.update();

    tswChartInstance.data.labels = tableData.value.map((q) =>
      new Date(q.record.createdAt).toLocaleString()
    );
    tswChartInstance.data.datasets = [
      {
        label: "tsw",
        data: tableData.value.map((q) => q.record.data.tsw),
        borderColor: "rgb(255, 192, 203)",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
    ];
    tswChartInstance.update();
  });
}, 1000);
const stop = watch(deviceId, getValue);
const stop2 = watch(currentPage, getValue);
const stop3 = setInterval(() => {
  getValue();
}, 10000);
onUnmounted(() => {
  stop();
  stop2();
  clearInterval(stop3);
});

const newChart = (html, title = "Chart") => {
  return new Chart(html, {
    type: "line",
    data: {
      labels: [],
      datasets: [],
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
            text: "Time",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
        },
      },
    },
  });
};
onMounted(() => {
  const chart = document.getElementById("chart");
  chartInstance = newChart(chart, "Default");

  const pHChart = document.getElementById("pH");
  phChartInstance = newChart(pHChart, "pH");

  const oxygenChart = document.getElementById("oxygen");
  oxygenChartInstance = newChart(oxygenChart, "oxygen");

  const tswChart = document.getElementById("tsw");
  tswChartInstance = newChart(tswChart, "tsw");

  const tdsChart = document.getElementById("tds");
  tdsChartInstance = newChart(tdsChart, "tds");

  getValue();
});

const onReportNow = (id) => {
  reportNow(id).then((data) => {
    ElMessage({
      message: "上报成功",
      type: "success",
    });
    setTimeout(getValue, 3000);
  });
};
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
