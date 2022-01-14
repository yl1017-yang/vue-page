<template>
    <div>
        상단네비바 테스트

        <button class="c-Button c-Button--close">X</button>
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