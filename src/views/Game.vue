<template>
  <v-container class="d-flex flex-column align-center">
    <v-card-title> Score: {{ game.score }} </v-card-title>
    <v-card class="pa-3">
      <v-row v-for="rowIndex in gridSize" :key="rowIndex">
        <v-col v-for="box in game.board.getRow(rowIndex - 1)" :key="box.id">
          <v-card
            outlined
            tile
            height="100"
            width="100"
            :color="game.getBoxColor(box.id)"
            :v-ripple="game.isBoxClickable(box)"
            @click="game.clickBox(box.id)"
            :disabled="!game.isBoxClickable(box)"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-3 mt-5">
      <v-card-title>
        <v-select
          v-model="selectSolution"
          :items="solutions"
          label="Select solution to display"
          item-text="name"
        >
        </v-select>
      </v-card-title>
      <v-row v-for="rowIndex in letterSize" :key="rowIndex">
        <v-col
          v-for="box in displaySolution.board.getRow(rowIndex - 1)"
          :key="box.id"
        >
          <v-card
            outlined
            tile
            height="100"
            width="100"
            :color="displaySolution.getBoxColor(box.id)"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-snackbar v-model="snackbar"> Great, you did it! </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Game,
  gridSize,
  DisplaySolution,
  solutions,
  letterSize,
} from "../types/Game";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Game",
  data: () => ({
    game: new Game(),
    selectSolution: solutions[0],
  }),

  computed: {
    snackbar() {
      return this.game.isSolved();
    },

    solutions() {
      return solutions;
    },

    displaySolution() {
      return new DisplaySolution(this.selectSolution);
    },

    gridSize: () => gridSize,
    letterSize: () => letterSize,
  },
});
</script>
