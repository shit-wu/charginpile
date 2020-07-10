<template>
  <div class="token">
    <div class="wrapper">
      <div class="card">
        <div class="title">Token</div>
        <div class="configure">
          <div class="input">
            <el-input
              placeholder="请输入密码"
              v-model="token"
              show-password
              @keyup.enter.native="login()"
            ></el-input>
          </div>
          <el-button type="warning" plain @click="login()">进入</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../../store/index";
import { mapMutations } from "vuex";

export default {
  name: "Token",
  data() {
    return {
      token: ""
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
      axios({
        method: "get",
        url: "/api/token",
        headers: {
          Authorization: "Bearer" + this.token
        }
      })
        .then(res => {
          console.log(res.data.data);
          this.changeLogin({ Authorization: this.token });
          this.$router.push("/management");
          console.log(sessionStorage.getItem("Authorization"));
          alert("登陆成功");
        })
        .catch(err => {
          alert("连接错误");
          this.token = "";
          console.log("连接数据库失败！");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 90px;
  width: 50%;
  margin: 0 auto;
}
.card {
  background-color: #545c64;
  border-radius: 25px;
}
.title {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
}
.tokeninput {
  width: 60%;
  margin: 0 auto;
  padding-bottom: 20px;
}
.configure {
  text-align: center;
  padding-bottom: 20px;
}
.input {
  width: 50%;
  margin: 0 auto;
  padding-bottom: 20px;
}
.el-button {
  background-color: #ffd04b;
  outline: none;
}
</style>