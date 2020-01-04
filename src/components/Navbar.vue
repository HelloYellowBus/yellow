<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
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
        <v-list-item link>
          <v-list-item-content>
						<router-link to="/login">
							<v-list-item-title>Login</v-list-item-title>
						</router-link>
					</v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
						<router-link to="/signup">
							<v-list-item-title>Signup</v-list-item-title>
						</router-link>
					</v-list-item-content>
        </v-list-item>
				<v-list-item link>
					<v-list-item-content>
						<router-link to="/main">
            <v-list-item-title>MyBus</v-list-item-title>
						</router-link>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-content>
						<router-link to="/about">
            <v-list-item-title>About</v-list-item-title>
						</router-link>
					</v-list-item-content>      
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null
    };
  }
};
</script>