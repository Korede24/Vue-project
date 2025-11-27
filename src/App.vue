<template >
    <Navbar :isAuthenticated="isAuthenticated"/>
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
//             count: 0,
//             isAuthenticated: localStorage.getItem("isLoggedIn")
//         }
//     },
  
// }
import Navbar from './components/Navbar.vue';
export default {
components: {Navbar},
 data() {
        return {
            count: 0,
            isAuthenticated: JSON.parse(localStorage.getItem("isLoggedIn")) 

            
        }
    },
  mounted(){
    console.log(typeof(this.isAuthenticated));
    console.log(this.isAuthenticated);
    
    
      if (this.isAuthenticated) {
        this.isAuthenticated= true
      }else{
        this.isAuthenticated= false

      }

  },
};
</script>
<style lang="">

</style>