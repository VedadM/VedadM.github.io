<template>
  <div id="app">
    <router-view name="header-top"></router-view>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}
</style>
