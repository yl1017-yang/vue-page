<template>

  <v-card color="header_bg" flat>
    <v-card-title class="text-center justify-center py-6">
      <router-link to="/vue-page/">
        <h1 class="font-weight-bold text-h3 header_title">
        YANG
        </h1>
      </router-link>
    </v-card-title>

    <v-tabs background-color="transparent" fixed-tabs class="nav">
      <v-tabs-slider></v-tabs-slider>
      <router-link to="/vue-page/">
        <v-tab class="text-h6">HOME</v-tab>
      </router-link>
      <router-link to="/vue-page/views/about">
        <v-tab class="text-h6">ABOUT</v-tab>
      </router-link>
      <router-link to="/vue-page/views/product">
        <v-tab class="text-h6">PRODUCT</v-tab>
      </router-link>
      <router-link to="/vue-page/views/list">
        <v-tab class="text-h6">NEWS</v-tab>
      </router-link>
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