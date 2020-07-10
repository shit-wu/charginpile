<template>
  <div id="position">
    <baidu-map
      style=" height: 600px;"
      :center="map_center"
      :zoom="my_zoom"
      :scroll-wheel-zoom="my_scroll_wheel_zoom"
      class="baidu-map-view"
      @ready="map_handler"
      ak="EztHlWfG9QoGMCjSTDLm9PE9zRXDQtUD"
    ></baidu-map>
  </div>
</template>

<script>
// import BMap from "BMap";
import { BaiduMap, BmScale, BmGeolocation } from "vue-baidu-map";

export default {
  name: "Position",
  components: {
    BaiduMap,
    BmScale,
    BmGeolocation
  },
  data() {
    return {
      my_scroll_wheel_zoom: true,
      map_center: "浙江省杭州市西湖区留和路318号",
      my_zoom: 15,
      e: [
        120.03169,
        30.22612,
        120.035608,
        30.225124,
        120.030638,
        30.229613,
        120.026588,
        30.220086,
        120.033825,
        30.22572,
        120.031516,
        30.227947,
        120.03405,
        30.229492,
        120.031966,
        30.22737,
        120.031229,
        30.225591,
        120.031876,
        30.22386,
        120.027366,
        30.223735,
        120.028534,
        30.221285,
        120.028534,
        30.221285,
        120.031157,
        30.222471
      ]
    };
  },
  methods: {
    map_handler({ BMap, map }) {
      this.BMap = BMap;
      this.map = map;
      for (var i = 0; i < this.e.length; i++) {
        const point = new this.BMap.Point(this.e[i], this.e[i + 1]);
        const marker = new this.BMap.Marker(point); // 设置点击位置
        map.addOverlay(marker); // 添加指定点
      }
    }
  },
  mounted: function() {
    this.map_handler();
  }
};
</script>

<style scoped>
</style>