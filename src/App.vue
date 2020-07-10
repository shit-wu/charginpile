<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./components/content/home/Home";

export default {
  name: "App",

  components: {
    Home
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
