<template>
  <div id="chart">
    <v-card class="mt-4 mx-auto">
      <v-sheet class="v-sheet--offset mx-auto" color="cyan" max-width="calc(100% - 32px)">
        <v-sparkline
          :labels="labels"
          :label-size="labelSize"
          :value="value"
          color="cyan"
          line-width="2"
          padding="16"
        ></v-sparkline>
      </v-sheet>

      <v-card-text class="pt-0">
        <v-divider class="my-2"></v-divider>
        <div class="title">
          <span class="caption grey--text font-weight-light">最近充电桩使用情况</span>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Chart",
  data() {
    return {
      labelSize: 12,
      labels: ["3月", "４月", "5月", "6月", "7月", "8月", "9月", "10月"],
      value: [200, 675, 410, 390, 310, 460, 250, 240]
    };
  }
};
</script>

<style scoped>
.chart {
  margin: 0;
}
.mt-4 {
  width: 50vw;
  margin: 0 auto;
}
.title {
  padding-top: 20px;
  text-align: center;
}
.caption {
  font-size: 30px;
}
</style>