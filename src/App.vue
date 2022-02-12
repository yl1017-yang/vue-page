<template>
  <v-app id="app">
    <Header />

    <router-view />

    <Footer />
  </v-app>
</template>
<style>

</style>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
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