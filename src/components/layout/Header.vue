<template>
    <div>
        상단네비바 테스트
        
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/views/">main2</router-link></li>
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