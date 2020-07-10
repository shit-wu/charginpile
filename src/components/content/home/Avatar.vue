<template>
  <div id="avatar">
    <div class="wrapper">
      <el-row type="flex">
        <el-col :lg="{span:7}" :md="{span:10}">
          <img class="avatar" src="@/assets/img/Lighting.svg" alt />
        </el-col>
        <el-col :span="10" :offset="3" class="hidden-md-and-down">
          <div class="username">505</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: #545c64;
}
.avatar {
  width: 100%;
}
.username {
  font-size: 25px;
  color: #ffffff;
}
</style>