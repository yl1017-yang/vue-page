<template>
    <div>
      <header>
        <h1>YANG</h1>
        <nav>
          <ul>
            <li><router-link to="/vue-page/">HOME</router-link></li>
            <li><router-link to="/vue-page/views/about">ABOUT</router-link></li>
          </ul>
        </nav>
      </header>
    </div>
</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>

</style>