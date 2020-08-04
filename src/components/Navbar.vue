<template>
  <div>
    <v-app-bar class="toolbar" color="black" fixed flat>
      <strong
        ><h2>
          <span class="title">zo<span style="color: red;">yu</span></span>
        </h2></strong
      >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        color="red"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-list dense>
        <v-list-item @click="someMethod" link v-if="username==null">
          <v-list-item-action><v-icon>mdi-login</v-icon></v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign in with Google</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="username!==null">
          <v-list-item-action>
            <v-icon>mdi-face</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title >{{username}}(edit)</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logout" v-if="username!==null">
          
          <v-list-item-content>
            <v-list-item-title >Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>list</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>My Posts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ['username'],
  data: () => ({
    drawer: null,
  }),
  methods: {
    someMethod() {
      this.$emit("send-message");
    },
    logout(){
      localStorage.clear()
    }
  },
};
</script>

<style scoped>
.title {
  display: inline;
  color: #ffffff;
  font-family: "Nanum Gothic", sans-serif;
}
</style>
