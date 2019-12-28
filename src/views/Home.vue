<template>
  <div class="home">
    <h1>Hello Yellow Bus</h1>
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
