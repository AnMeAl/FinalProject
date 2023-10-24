<template>
  <NavComp/>
  <router-view></router-view>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom right, rgb(245, 195, 130), rgb(250, 250, 250), rgb(225, 125, 125), rgb(125, 220, 225), rgb(225, 140, 225));
  margin: 0;
  height: 1000px;
  width: 100vw;
}
</style>
