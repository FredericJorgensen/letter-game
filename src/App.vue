<template>
  <v-app>
    <v-main>
      <v-app-bar elevation="4"
        ><v-app-bar-nav-icon disabled></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Find the letter of the day</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-app-bar-nav-icon
            @click="
              () => {
                dialogMode = 'scoreboard';
                dialog = true;
              }
            "
          >
            <template slot="default">
              <v-icon> mdi-podium </v-icon>
            </template>
          </v-app-bar-nav-icon>
          <v-app-bar-nav-icon
            @click="
              () => {
                dialogMode = 'help';
                dialog = true;
              }
            "
          >
            <template slot="default">
              <v-icon> mdi-help-circle </v-icon>
            </template>
          </v-app-bar-nav-icon>
        </div>
      </v-app-bar>
      <!-- <Game /> -->
      <router-view />
      <v-dialog transition="dialog-bottom-transition" v-model="dialog">
        <v-card>
          <v-card-title>
            {{
              dialogMode === "help" ? "Game Explanation" : "Scoreboard"
            }}</v-card-title
          >
          <v-card-text v-if="dialogMode === 'help'">
            The goal of this game is to find a letter on the grid.
            <br />
            <br />Click a white tile ⬜ to see if part of the letter is hidden
            under there. <br />If it turns red 🟥, there is no letter under
            there. If it turns green 🟩, there is.
            <br />
            <br />
            Continue, until you have found the whole letter.
          </v-card-text>
          <scoreboard v-else />
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
import { useFirestore } from "./firebase";
import Scoreboard from "./views/Scoreboard.vue";

export default Vue.extend({
  name: "App",

  components: { Scoreboard },
  data: () => ({
    dialog: false,
    dialogMode: "help",
    //
  }),
});
</script>
