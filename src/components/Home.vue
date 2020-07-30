<template>
  <v-app>
    <Navbar></Navbar>
    <v-card style="margin-top: 4.5rem;" class="mx-auto" width="40%">
      <v-card-title>Hello</v-card-title></v-card
    >
  </v-app>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
  props: {
    source: String,
  },
  data: () => ({}),
};
</script>

<style scoped></style>
