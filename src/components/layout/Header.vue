<template>
    <div>
        <h2>logo</h2>
        
        <ul>
          <li><router-link to="/vue-page/">Home</router-link></li>
          <li><router-link to="/vue-page/views/about">about</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "header",
}
</script>

<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>