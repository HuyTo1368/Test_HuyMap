<template>
  <div id="app">
    <!-- <LoginComponent /> -->
     <LayoutIndex />
  </div>
</template>

<script>
// import LoginComponent from './view/Login/index.vue'
import LayoutIndex from './view/Layout/LayoutIndex.vue';
export default {
  name: 'App',
  components: {
    // LoginComponent
    LayoutIndex
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: GoogleSans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
    font-family: GoogleSans;
    src: url(../src/assets/font/notosans-regular.2cb88a13.woff2);
}

@font-face {
    font-family: GoogleSans Blod;
    src: url(../src/assets/font/notosans-bold.3ede5aff.woff2);
}
</style>
