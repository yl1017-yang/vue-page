<template>
  <v-app id="app">
    <Header />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
@import "./assets/common.css";
@import "./assets/layout.css";
</style>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  methods: {
      changeRTL () {
        this.$vuetify.rtl = true
      },
    },

  data: () => ({
    //
  }),
};
</script>