<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
</template>
<script setup>
import { ref } from "vue";
import breadcrumb from "@/components/breadcrumb.vue";

const item = ref({
  first: "系统设置",
});
</script>

<style scoped></style>
