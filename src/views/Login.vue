<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-1">
        <v-toolbar color="white" flat>
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="email" name="email" type="email" />
            <v-text-field v-model="password" label="Password" name="password" type="password" />
          </v-form>
        </v-card-text>
        <v-card-text>You don't have an accocunt? You can <router-link to="/signup">create one</router-link>.</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="white" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      console.log(this.email, this.password)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
          console.log(user)
          console.log(firebase.auth().currentUser)
          this.$router.replace('main')
        }).catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>