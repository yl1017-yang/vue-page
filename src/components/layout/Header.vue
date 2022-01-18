<template>
    <div>
        <h2>logo</h2>
        
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/views/about">about</router-link></li>
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