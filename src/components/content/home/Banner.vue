<template>
  <div id="banner">
    <div class="wrapper">
      <el-row type="flex" justify="end">
        <el-col :lg="{span:5}" :md="{span:5}">
          <div class="logo">
            <h1>505电网管理系统</h1>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 49px;
  background-color: #545c64;
  opacity: 0.9;
}
.logo {
  text-align: center;
}
.logo h1 {
  color: #ffd04b;
}
</style>