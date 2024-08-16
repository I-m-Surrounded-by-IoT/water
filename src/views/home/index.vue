<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <!-- 首页 -->
  <div class="home-warpped">
    <!-- 轮播图 -->
    <div class="swiper-warpped">
      <el-carousel :interval="4000" type="card" height="320px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 栅格布局 -->
    <div class="layout-warpped">
      <el-row :gutter="20">
        <el-col :span="6"
          ><div class="porject-information">
            <span>项目介绍</span>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="porject-information">
            <span>项目介绍</span>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="porject-information">
            <span>项目介绍</span>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="porject-information">
            <span>项目介绍</span>
          </div></el-col
        >
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="twotable-warpped">
      <div class="table1">
        <span>警告列表</span>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
      <div class="table2">
        <span>故障列表</span>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import breadcrumb from "@/components/breadcrumb.vue";

const item = ref({
  first: "Home",
});
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped>
.home-warpped {
  padding: 8px;
  height: calc(100vh - 101px);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  .swiper-warpped {
    padding: 0 20px;
    background: #fff;
    margin-bottom: 8px;
  }
  .layout-warpped {
    padding: 8px;
    margin-bottom: 8px;
    background: #fff;
    .porject-information {
      background: #f5f5f5;
      height: 200px;
      padding: 8px;
      cursor: pointer;
      span {
        border-bottom: 1px solid #409eff;
        font-size: 14px;
      }
    }
    .porject-information:hover {
      cursor: pointer;
      background-color: #eef5ff;
    }
  }
  .twotable-warpped {
    height: 232px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    .table1 {
      height: 240px;
      width: 48%;
      display: flex;
      flex-direction: column;
    }

    .table2 {
      height: 240px;
      width: 48%;
      display: flex;
      flex-direction: column;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
