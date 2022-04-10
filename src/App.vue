<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="4"
        ><v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Find the letter</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-app-bar-nav-icon>
            <template slot="default">
              <v-icon> mdi-podium </v-icon>
            </template>
          </v-app-bar-nav-icon>
          <v-app-bar-nav-icon>
            <template slot="default">
              <v-icon> mdi-help-circle </v-icon>
            </template>
          </v-app-bar-nav-icon>
        </div>
      </v-app-bar>
      <!-- <Game /> -->
      <router-view />
    </v-main>
  </v-app>
  <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div> -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
});
</script>
