<template>
  <div id="home">
    <Banner />
    <el-row type="flex">
      <div class="wrapper">
        <el-col :span="5">
          <div class="left-drawer">
            <Avatar />
            <Menu />
          </div>
        </el-col>
        <el-col :span="19">
          <div class="right-content">
            <router-view></router-view>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import Banner from "./Banner";
import Avatar from "./Avatar";
import Menu from "./Menu";

export default {
  name: "Home",
  components: {
    Banner,
    Avatar,
    Menu
  }
};
</script>

<style scoped>
.wrapper {
  width: 80vw;
  margin: 0 auto;
}
.left-drawer {
  background-color: #f6f6f6;
  height: 70vh;
}
.right-content {
  /* background-color: #5905a7; */
  /* width: 80%; */
  height: 70vh;
  /* background-color: #ffffff; */
}
</style>