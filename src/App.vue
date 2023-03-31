<template>
  <h2>Hello Ngọc Anh</h2>
  <router-view />
  <app-nav />
</template>
<script>
import AppNav from "./components/AppNav.vue";
export default {
  name: "App",
  components: {
    AppNav,
  },
  created() {
    console.log(document.querySelector("h2"));
  },
  mounted() {
    console.log(document.querySelector("h2"));
  },
};
</script>
