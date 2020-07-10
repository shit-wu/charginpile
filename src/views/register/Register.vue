<template>
  <div class="register">
    <div class="wrapper">
      <div class="card">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="URL">
            <el-input v-model="formLabelAlign.url"></el-input>
          </el-form-item>
          <el-form-item label="别名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="position-x">
            <el-input v-model="formLabelAlign.position_x"></el-input>
          </el-form-item>
          <el-form-item label="position-y">
            <el-input v-model="formLabelAlign.position_y"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="submit" @click="Submit">立即注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "Register",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        url: "",
        name: "",
        position_x: null,
        position_y: null
      }
    };
  },
  methods: {
    Submit() {
      if (
        this.formLabelAlign.url != "" &&
        this.formLabelAlign.name != "" &&
        this.formLabelAlign.position_x != null &&
        this.formLabelAlign.position_y != null
      ) {
        axios({
          method: "post",
          url: "/api/supplier/register",
          data: this.formLabelAlign,
          transformRequest: {
            function(data) {
              return JSON.stringify(data);
            }
          },
          headers: {
            Authorization:
              "Bearer" + " " + sessionStorage.getItem("Authorization"),
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            alert("注册成功!");
            this.formLabelAlign.url = "";
            this.formLabelAlign.name = "";
            this.formLabelAlign.position_x = null;
            this.formLabelAlign.position_y = null;
          })
          .catch(err => {
            alert("注册失败!");
          });
      } else {
        console.log(this.formLabelAlign.url);
        console.log(this.formLabelAlign.name);
        console.log(this.formLabelAlign.position_x);
        console.log(this.formLabelAlign.position_y);
        this.formLabelAlign.url = "";
        this.formLabelAlign.name = "";
        this.formLabelAlign.position_x = null;
        this.formLabelAlign.position_y = null;
        alert("请输入完整信息");
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.card {
  padding-top: 100px;
  color: #ffffff;
  width: 50%;
  margin: 0 auto;
}
.el-form-item {
  color: #ffffff;
}
.submit {
  background-color: #545c64;
  color: #ffd04b;
}
</style>