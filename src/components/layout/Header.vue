<template>
    <div>
      <v-app-bar
        app
        color="primary"
        dark
      >
      <h1>YANG</h1>

      <v-spacer></v-spacer>

      <header>
        <nav>
          <ul>
            <li><router-link to="/vue-page/">HOME</router-link></li>
            <li><router-link to="/vue-page/views/about">ABOUT</router-link></li>
          </ul>
        </nav>
      </header>
    </v-app-bar>
    </div>
    
</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>

</style>