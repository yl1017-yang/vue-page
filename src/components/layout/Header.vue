<template>

  <v-card color="header_bg" flat>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h3 header_title">
        <router-link to="/vue-page/">YANG</router-link>
      </h1>
    </v-card-title>

    <v-tabs background-color="transparent" fixed-tabs>
      <v-tabs-slider></v-tabs-slider>
      <v-tab class="text-h6"><router-link to="/vue-page/">HOME</router-link></v-tab>
      <v-tab class="text-h6"><router-link to="/vue-page/views/about">ABOUT</router-link></v-tab>
    </v-tabs>


  
  </v-card>

</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>

</style>