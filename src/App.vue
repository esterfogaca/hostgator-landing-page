<template>
  <div id="app">
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Header,
  }
};
</script>

<style lang="scss">
html {
  font-size: 5vw;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
