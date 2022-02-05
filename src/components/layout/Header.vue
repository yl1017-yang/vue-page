<template>

  <v-app-bar absolute color="#444" min-height="50" dark flat fixed dense class="d-flex justify-space-between align-space-between " >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title><router-link to="/vue-page/">YANG</router-link></v-toolbar-title>
    <v-spacer></v-spacer>
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