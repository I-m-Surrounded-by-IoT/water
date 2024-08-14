<template>
  <div class="Systmlogs">
    <el-container>
      <el-header>系统控制</el-header>
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
        <el-aside width="200px">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);
const infoWindowClose = () => {
  show.value = false;
};
const infoWindowOpen = () => {
  show.value = true;
};
</script>

<style scoped>
.el-header {
  display: flex;
  height: 55px;
  background: #b3c0d1;
  color: #333;
  align-items: center;
}
.el-main {
  height: 669.333px;
  padding: 1 2px;
}
.map {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 669.333px;
}
</style>
