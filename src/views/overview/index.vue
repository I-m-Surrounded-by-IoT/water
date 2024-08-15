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
      <!-- 表格内容 -->
      <div class="table-content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="deviceId" label="设备id" />
          <el-table-column prop="createdAt" label="时间戳" />
          <el-table-column label="坐标">
            <template #default="{ row }">
              {{ row.data.geoPoint.lat }},{{ row.data.geoPoint.lon }}
            </template>
          </el-table-column>
          <el-table-column prop="data.ph" label="PH" />
          <el-table-column prop="data.oxygen" label="含氧量" />
          <el-table-column prop="data.tds" label="tds" />
          <el-table-column prop="data.tsw" label="tsw" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <button
                @click="
                  () => {
                    router.push({
                      path: '/Systemlogs',
                      query: {
                        deviceId: row.deviceId,
                        lat: row.data.geoPoint.lat,
                        lon: row.data.geoPoint.lon,
                        time: row.createdAt,
                        more: encodeURIComponent(
                          JSON.stringify({
                            ...row.data,
                            geoPoint: undefined,
                          })
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
const route = useRoute();
const item = ref({
  first: "测试",
});
const deviceId = ref(route.query.deviceId || "2");
const tableData = ref([]);
const currentPage = ref(1);
const total = ref(0);
const getValue = useDebounceFn(() => {
  deteList(deviceId.value, currentPage.value).then(({ data }) => {
    tableData.value = data.data.records;
    total.value = data.data.total;
    console.log(tableData.value);
  });
}, 1000);
const stop = watch(deviceId, getValue);
const stop2 = watch(currentPage, getValue);
const stop3 = setInterval(() => {
  getValue();
}, 3000);
onUnmounted(() => {
  stop();
  stop2();
  clearInterval(stop3);
});
onMounted(getValue);

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
