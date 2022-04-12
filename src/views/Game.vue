<template>
  <v-container class="d-flex flex-column align-center justify-space-between">
    <v-card-title class="my-5"> Score: {{ game.getScore() }} </v-card-title>
    <v-card class="pa-3 my-5">
      <v-row v-for="rowIndex in gameGridSize" :key="rowIndex" class="pa-0 ma-0">
        <v-col
          v-for="box in game.getRow(rowIndex - 1)"
          :key="box.id"
          class="pa-0 ma-0"
        >
          <v-card
            outlined
            tile
            :height="boxSideLength"
            :width="boxSideLength"
            :color="game.getBoxColor(box)"
            :v-ripple="game.isBoxClickable(box)"
            @click="box.click()"
            :disabled="!game.isBoxClickable(box)"
            class="ma-1"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-btn class="my-5" @click="playAgain" v-if="gameIsSolved">
      Play Again
    </v-btn>
    <v-dialog transition="dialog-bottom-transition" v-model="dialog">
      <v-card>
        <v-card-title> You found the letter! 🎉 </v-card-title>
        <v-card-text>
          The letter
          <b>{{ this.game.getSolution().pattern.name.toUpperCase() }}</b>
          was the right solution! Your final score is
          <b> {{ this.game.getScore() }}</b
          >.
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v-card-title>
      <v-select
        v-model="selectSolution"
        :items="solutions"
        label="Select solution to display"
        item-text="name"
        item-value="boxes"
      >
      </v-select>
    </v-card-title>
    <v-card class="pa-3 mt-5" v-if="selectSolution">
      <v-row v-for="row in selectSolution" :key="row.name">
        <v-col v-for="(box, index) in row" :key="index">
          <v-card
            outlined
            tile
            height="100"
            width="100"
            :color="box ? 'black' : 'white'"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-card> -->
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Game, gameGridSize } from "../types/game";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Game",
  data: () => ({
    game: new Game(),
    dialog: false,
  }),

  methods: {
    playAgain() {
      this.game = new Game();
      this.dialog = false;
    },
  },

  watch: {
    gameIsSolved: function () {
      if (this.gameIsSolved) {
        this.dialog = true;
      }
    },
  },

  computed: {
    gameIsSolved() {
      return this.game.isSolved();
    },
    screenHeight() {
      return this.$vuetify.breakpoint.height;
    },
    boxSideLength() {
      //acounting for ma-1 = 4px
      return (
        (0.68 *
          (Math.min(
            this.$vuetify.breakpoint.width,
            this.$vuetify.breakpoint.height
          ) -
            this.gameGridSize * 8 +
            8)) /
        this.gameGridSize
      );
    },

    gameGridSize: () => gameGridSize,
    // letterSize: () => letterSize,
  },
});
</script>
