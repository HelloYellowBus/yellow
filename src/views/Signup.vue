<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Sign up form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="email" name="email" type="email" />
            <v-text-field v-model="password" label="Password" name="password" type="password" />
          </v-form>
        </v-card-text>
        <v-card-text>or go back to <router-link to="/login">login</router-link>.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="signup()">Sign up</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signup() {
      console.log(this.email, this.password)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          this.$router.replace('main')
        }).catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>