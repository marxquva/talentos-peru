<script setup>
import AppButton from './AppButton.vue'

const props = defineProps({
  titulo: String,
  emmpresa: String,
  ubicacion: String,
  modo: String,
  descripcion: String
})

function getModoColor(modo) {
  switch (modo) {
    case 'Remoto': return 'green-darken-2'
    case 'Presencial': return 'blue-darken-2'
    case 'Híbrido': return 'orange-darken-2'
    default: return 'grey'
  }
}

function shortDescription(texto) {
  if (!texto) return ''
  return texto.length > 120 ? texto.slice(0, 117) + '...' : texto
}

</script>

<template>
  <v-card class="pa-4" elevation="2">
    <h3 class="text-h6 font-weight-bold">{{ titulo }}</h3>
    <p class="text-grey">{{ emmpresa }}</p>
    <p class="text-body-2 text-truncate mb-2">
      {{ shortDescription(descripcion) }}
    </p>

    <div class="d-flex align-center justify-space-between">
      <div>
        <v-icon size="small" class="mr-1">mdi-map-marker</v-icon>
        <span>{{ ubicacion }}</span>
      </div>

      <v-chip size="small" :color="getModoColor(modo)" text-color="white">
        {{ modo }}
      </v-chip>
    </div>

    <AppButton
      label="Postular"
      color="primary"
      block
      class="mt-4"
      @click="$emit('apply', { titulo, emmpresa })"
    />
  </v-card>
</template>