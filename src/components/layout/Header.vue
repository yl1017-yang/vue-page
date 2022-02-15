<template>

  <v-card color="header_bg" flat>
    <v-card-title class="text-center justify-center py-6">
      <router-link to="/vue-page/">
        <h1 class="font-weight-bold header_title">
          YANG
        </h1>
      </router-link>
    </v-card-title>

    <v-tabs background-color="transparent" fixed-tabs class="nav">
      <v-tabs-slider></v-tabs-slider>
      <router-link to="/vue-page/">
        <v-tab>HOME</v-tab>
      </router-link>
      <router-link to="/vue-page/views/about">
        <v-tab>ABOUT</v-tab>
      </router-link>
      <router-link to="/vue-page/views/product">
        <v-tab>PRODUCT</v-tab>
      </router-link>
      <router-link to="/vue-page/views/list">
        <v-tab>NEWS</v-tab>
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