<template>
  <v-container>
    <v-card flat>
      <b class="d-flex flex-row align-center justify-space-between pa-3 mb-3">
        <div>Rank</div>

        <div>Player</div>

        <div>Score</div>
      </b>
    </v-card>
    <v-card
      v-for="(game, index) in games"
      :key="index"
      class="d-flex flex-row align-center justify-space-between pa-3 mb-3"
      outlined
    >
      <div># {{ index + 1 }}</div>

      <div>{{ game.playerName }}</div>

      <div>{{ game.score }}</div></v-card
    >
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Game, gameGridSize } from "../types/Game";
import { useFirestore } from "../firebase";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Scoreboard",
  data: () => ({
    games: [] as any[],
  }),

  methods: {},

  created() {
    const { getGames } = useFirestore();
    getGames().then((games) => {
      this.games = games;
    });
  },
});
</script>
