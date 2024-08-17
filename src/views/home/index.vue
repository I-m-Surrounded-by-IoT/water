<template>
  <breadcrumb ref="breadcrumb" :item="item"></breadcrumb>
  <!-- 首页 -->
  <div class="home-warpped">
    <!-- 轮播图 -->
    <div class="swiper-warpped">
      <el-carousel :interval="4000" type="card" height="320px">
        <el-carousel-item v-for="item in images" :key="item.id">
          <img
            :src="item.src"
            alt="轮播图"
            style="width: 100%; height: 320px"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 栅格布局 -->
    <div class="layout-warpped">
      <el-row :gutter="20">
        <el-col :span="6"
          ><div class="porject-information">
            <span>系统背景</span>
            <p>
              随着城市化进程加快和环境污染问题日益突出，水质安全成为社会关注焦点。
              党的十八大以来，习近平总书记高度重视水环境、水生态、水资源、水安全，总书记指出，要坚持“节水优先、空间均衡、系统治理、两手发力”的治水思路，提高水资源集约节约利用水平。
            </p>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="porject-information">
            <span>系统简介</span>
            <p>
              系统借助先进的人工智能技术，赋予了水质数据预测未来的能力，为水质管理提供科学依据，化被动为主动。
              系统利用机器学习模型，深入挖掘历史水质数据，不仅能识别出季节性变化、周期性波动等规律，为水质管理的长期规划提供参考，还能敏锐地捕捉到数据中的异常点。
            </p>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="porject-information">
            <span>使用手册</span>
            <div class="text1">
              <h2>水质检测系统使用手册</h2>
              <p>本手册旨在帮助您快速了解并使用水质检测系统。</p>
              <h3>第一步：准备工作</h3>
              <ol>
                <li>确保系统已正确安装并连接电源。</li>
                <li>连接好设备。</li>
              </ol>
              <h3>第二步：进行检测</h3>
              <ol>
                <li>打开系统电源开关。</li>
                <li>根据系统提示，将设备放置水质检测点。</li>
                <li>等待一段时间，系统会将自动进行检测并显示结果。</li>
              </ol>
              <h3>第三步：结果解读</h3>
              <ol>
                <li>系统将显示各项水质指标的数值，并根据预设标准进行判断。</li>
              </ol>
              <h3>第四步：维护保养</h3>
              <ol>
                <li>定期清洁系统设备，避免过度污染影响检测结果。</li>
                <li>定期校准系统，确保检测精度。</li>
              </ol>
              <h3>更多信息</h3>
              <p>
                请扫描二维码或访问官网了解更多详细信息，包括：详细操作步骤、故障排除、常见问题解答等。
              </p>
              <h3>联系我们</h3>
              <p>如有任何疑问，请联系我们的客服团队。</p>
              <p><strong>祝您使用愉快！</strong></p>
            </div>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="porject-information">
            <span>联系我们</span>
            <h3>立即联系我们，了解更多信息：</h3>
            <ul>
              <li>电话： 18271482709</li>
              <li>邮箱： 319788742@qq.com</li>
            </ul>
          </div></el-col
        >
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="twotable-warpped">
      <div class="table1">
        <span>警告列表</span>
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="time" label="警告时间" width="180" />
          <el-table-column prop="name" label="地点" width="180" />
          <el-table-column prop="times" label="运行时间" width="180" />
          <el-table-column prop="address" label="警告原因" />
        </el-table>
      </div>
      <div class="table2">
        <span>处理日志</span>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="time" label="处理时间" width="180" />
          <el-table-column prop="name" label="地点" width="180" />
          <el-table-column prop="address" label="处理举措" width="180" />
          <el-table-column prop="eds" label="处理结果" />
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
const images = [
  { id: 1, src: require("@/assets/images/002.jpg") },
  { id: 2, src: require("@/assets/images/003.jpg") },
  { id: 3, src: require("@/assets/images/004.jpg") },
  { id: 4, src: require("@/assets/images/005.jpg") },
  { id: 5, src: require("@/assets/images/006.jpg") },
  { id: 6, src: require("@/assets/images/007.jpg") },
];
const tableData1 = [
  {
    time: "2024-8-15",
    name: "桂花池检测点1",
    times: "3357minute",
    address: "设备电量不足",
  },
  {
    time: "2024-8-13",
    name: "谭华林检测点2",
    times: "3581minute",
    address: "通信超时",
  },
];
const tableData2 = [
  {
    time: "2024-8-15",
    name: "检测点1",
    address: "更换电源",
    eds: "已恢复",
  },
  {
    time: "2024-8-13",
    name: "检测点2",
    address: "重启设备",
    eds: "已恢复",
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
ul {
  list-style-type: none;
  text-align: left;
}
ol {
  text-align: left;
}
.text1 {
  overflow-y: auto;
  max-height: 180px; /* Example: Set maximum height to 200px */
}
</style>
