<script setup lang="ts">

</script>

<template>
  <form class="page auth-page">
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>

<style lang="scss">
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>