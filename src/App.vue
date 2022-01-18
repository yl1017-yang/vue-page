<template>
  <div id="app">
    <Header />
    
    <router-view/>
  </div>
</template>
<style>
  @import "./assets/common.css";
  @import "./assets/layout.css";
</style>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {

}
</style>
