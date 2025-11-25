<template lang="">
  <nav>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/composition">Composition</router-link></li>
  </nav>
  <router-view />
</template>
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
}
</script>
<style lang="">
    
</style>