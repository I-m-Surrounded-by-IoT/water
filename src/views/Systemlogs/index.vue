<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <div class="common-layout">
    <el-container>
      <el-main>
        <baidu-map
          class="map"
          :zoom="16"
          :center="{ lng: 114.399724, lat: 30.525502 }"
          :scroll-wheel-zoom="true"
          ><bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
          <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
          <bm-copyright
            anchor="BMAP_ANCHOR_TOP_RIGHT"
            :copyright="[
              {
                id: 1,
                content: 'Copyright Message',
                bounds: { ne: { lng: 110, lat: 40 }, sw: { lng: 0, lat: 0 } },
              },
              { id: 2, content: '<a>永远的神 版权所有</a>' },
            ]"
          >
          </bm-copyright>
          <!-- 点击一个点就有一个弹框 -->
          <bm-marker
            :position="{ lng: 114.400746, lat: 30.527161 }"
            @click="infoWindowOpen"
          >
            <bm-info-window
              :show="show"
              @close="infoWindowClose"
              @open="infoWindowOpen"
              >我爱武汉</bm-info-window
            >
          </bm-marker>
        </baidu-map>
      </el-main>
      <el-aside width="300px"
        ><el-button type="success">更新</el-button></el-aside
      >
    </el-container>
  </div>
</template>
<script setup>
import { ref } from "vue";

import breadcrumb from "@/components/breadcrumb.vue";

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
