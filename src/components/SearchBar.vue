<script setup>
import { ref } from 'vue'
import AppButton from './AppButton.vue'

const props = defineProps({
  ubicaciones: Array,
  modalidades: Array,
  areas: Array,
})

const search = ref('')
const filtros = ref({
  ubicacion: null,
  modo: null,
  area: null,
})
</script>

<template>
  <v-card class="pa-4 mb-6" elevation="2" color="background">
    <v-row dense>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="search"
          label="Busca por cargo o palabra clave"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          dense
        />
      </v-col>

      <v-col cols="12" sm="4" md="2">
        <v-select v-model="filtros.ubicacion" :items="ubicaciones" label="Ubicación" variant="outlined" dense />
      </v-col>

      <v-col cols="12" sm="4" md="2">
        <v-select v-model="filtros.modo" :items="modalidades" label="Modalidad" variant="outlined" dense />
      </v-col>

      <v-col cols="12" sm="4" md="2">
        <v-select v-model="filtros.area" :items="areas" label="Área laboral" variant="outlined" dense />
      </v-col>

      <v-col cols="12" sm="4" md="2">
        <AppButton label="Buscar" color="primary" block @click="$emit('search', filtros, search)" />
      </v-col>
    </v-row>
  </v-card>
</template>