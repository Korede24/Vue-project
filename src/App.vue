<template >
    <Navbar :isAuthenticated="false"/>
  <!-- <nav>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/composition">Composition</router-link></li>
  </nav> -->

  

<h1 class="text-yellow-400 text-3xl">Welcome to Vue Router Tutorial</h1>



  <router-view />
</template>
<script>
// export default {
//     data() {
//         return {
//             count: 0
//         }
//     },
// }
import Navbar from './components/Navbar.vue';
export default {
components: {Navbar},
};
</script>
<style lang="">

</style>