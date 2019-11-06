<template>
  <div id="app">
    <Navbar />
    <Header />
    <RadioBar />
    <ProductCard />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import ProductCard from "./components/ProductCard.vue";
import RadioBar from "./components/RadioBar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Header,
    ProductCard,
    RadioBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-size: 5vw;
  color: #333333;

  @media screen and (min-width: 768px) {
    font-size: 2.085vw;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
}

body {
  margin: 0;
  background-color: #f1f6fb;
  overflow-x: hidden;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
