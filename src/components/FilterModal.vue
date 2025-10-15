<script setup>
import { ref } from 'vue'

const props = defineProps({
  ubicaciones: Array,
  modalidades: Array,
  areas: Array,
})

const emit = defineEmits(['apply'])

const show = ref(false)
const filtros = ref({
  ubicacion: null,
  mode: null,
  area: null,
})

function aplicarFiltros() {
  emit('apply', filtros.value)
  show.value = false
}

defineExpose({ show })
</script>
<template>
  <v-dialog v-model="show" fullscreen transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>Filtros</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-select v-model="filtros.ubicacion" :items="ubicaciones" label="Ubicación" variant="outlined" dense />
        <v-select v-model="filtros.modo" :items="modalidades" label="Modalidad" variant="outlined" dense />
        <v-select v-model="filtros.area" :items="areas" label="Área laboral" variant="outlined" dense />
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" block class="text-white" @click="aplicarFiltros">Aplicar filtros</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
