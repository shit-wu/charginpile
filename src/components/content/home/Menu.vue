<template>
  <div id="menu">
    <div class="wrapper">
      <el-menu
        default-active="5"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="management()">
          <i class="el-icon-menu"></i>
          <span slot="title">充电桩管理</span>
        </el-menu-item>

        <el-menu-item index="2" @click="position()">
          <i class="el-icon-location"></i>
          <span slot="title">充电桩分布</span>
        </el-menu-item>

        <el-menu-item index="3" @click="register()">
          <i class="el-icon-upload"></i>
          <span slot="title">充电桩注册</span>
        </el-menu-item>

        <el-menu-item index="4" @click="chart()">
          <i class="el-icon-document"></i>
          <span slot="title">图表分析</span>
        </el-menu-item>

        <el-menu-item index="5" @click="token()">
          <i class="el-icon-user-solid"></i>
          <span slot="title">Token管理</span>
        </el-menu-item>

        <el-menu-item index="6" disabled="true">
          <i class="el-icon-setting"></i>
          <span slot="title">敬请期待...</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    management() {
      this.$router.push("/Management");
    },
    position() {
      this.$router.push("/Position");
    },
    register() {
      this.$router.push("/Register");
    },
    chart() {
      this.$router.push("/Chart");
    },
    token() {
      this.$router.push("/Token");
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 51vh;
  background-color: #545c64;
}
</style>