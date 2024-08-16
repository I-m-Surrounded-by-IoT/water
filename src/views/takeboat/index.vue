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
  </div>
</template>

<script setup>
import { ref } from "vue";
import breadcrumb from "@/components/breadcrumb.vue";
import { takeBoatForword, takeBoatLeft, takeBoatRight } from "@/api/dete";
import { useRoute } from "vue-router";

const route = useRoute();
const deviceId = ref(route.query.deviceId || 2);

const item = ref({
  first: "控制小船",
});
</script>

<style scoped>
.boat-container {
  background-image: url("@/assets/images/001.jpg");
  height: 724.333px;
}
</style>
