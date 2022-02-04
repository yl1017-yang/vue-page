<template>
    
  <v-app-bar
    absolute
    color="#444"
    dark
    flat
    fixed
    height="50"
  >
    <v-app-bar-title>YANG</v-app-bar-title>
    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab><router-link to="/vue-page/">HOME</router-link></v-tab>
        <v-tab><router-link to="/vue-page/views/about">ABOUT</router-link></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>

    
</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>

</style>