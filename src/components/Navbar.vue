<template>
  <div>
<<<<<<< HEAD
    <v-app-bar color="primary accent-4" dark>
=======
    <v-app-bar dark style="background:linear-gradient(to right, #00d2ff, #3a7bd5)">
>>>>>>> f37d8fe3cb1771e97d15afce64bf178babe3d630
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hello Yellow Bus</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
						Hellow Yellow Bus
					</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item link v-if="!checklogin">
          <v-list-item-content>
						<router-link to="/login" class="navtxt">
							<v-list-item-title>Login</v-list-item-title>
						</router-link>
					</v-list-item-content>
        </v-list-item>
        <v-list-item link v-if='!checklogin'>
          <v-list-item-content>
						<router-link to="/signup" class="navtxt">
							<v-list-item-title>Signup</v-list-item-title>
						</router-link>
					</v-list-item-content>
        </v-list-item>
				<v-list-item link>
					<v-list-item-content>
						<router-link to="/main" class="navtxt">
            <v-list-item-title>MyBus</v-list-item-title>
						</router-link>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-content>
						<router-link to="/about" class="navtxt">
            <v-list-item-title>About</v-list-item-title>
						</router-link>
					</v-list-item-content>      
        </v-list-item>
      </v-list>
      <v-list-item link v-if="checklogin" @click="logout">
        <v-list-item-content>
          <v-list-item-title>
            Logout
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
  .navtxt {
    text-decoration: none;
    color:black
  }
</style>

<script>
import firebase from 'firebase'
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  computed: {
    checklogin: function() {
      const user = firebase.auth().currentUser
      console.log(user)
      return user
    }
  },
  Updated: function () {
    this.checklogin
  }
};
</script>