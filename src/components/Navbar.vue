<script setup>
import { ref } from 'vue'
const idioma = ref('ES')
</script>
<template>
  <v-app-bar app class="navbar-gradient">
    <v-container class="d-flex align-center justify-space-between">
      <h2 class="text-white font-weight-bold">Talentos Perú</h2>

      <div class="d-flex align-center">
        <v-select
          v-model="idioma"
          :items="['ES', 'EN']"
          hide-details
          dense
          variant="outlined"
          style="max-width: 90px"
        />
        <v-avatar class="ml-4" color="grey-lighten-2" size="40">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>

