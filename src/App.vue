<template>
  <v-app
    class="overflow-hidden"
    style="position: relative;"
  >
    <Navbar/>
    <v-content fluid class="fill-height">
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>
