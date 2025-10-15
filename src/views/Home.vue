<script setup>
import { ref, computed } from 'vue'
import swal from '@/plugins/swal'

import Navbar from '../components/Navbar.vue'
import SearchBar from '../components/SearchBar.vue'
import JobCard from '../components/JobCard.vue'
import FilterModal from '../components/FilterModal.vue'

const ubicaciones = ['Lima', 'Arequipa', 'Cusco', 'Lambayeque']
const modalidades = ['Remoto', 'Presencial', 'Híbrido']
const areas = ['Tecnología', 'Marketing', 'Ventas', 'Diseño']

const filtros = ref({ ubicacion: null, modo: null, area: null })
const search = ref('')

const ofertas = ref([
  { titulo: 'Desarrollador Front-End', empresa: 'TechCorp', ubicacion: 'Lima', modo: 'Remoto', area: 'Tecnología', descripcion: 'Buscamos un desarrollador con experiencia en Vue 3, Vuetify y buenas prácticas de UI/UX.' },
  { titulo: 'Analista de Marketing', empresa: 'MarketPro', ubicacion: 'Arequipa', modo: 'Presencial', area: 'Marketing', descripcion: 'Responsable de analizar campañas digitales y proponer estrategias de optimización en redes sociales.' },
  { titulo: 'Diseñador UX/UI', empresa: 'Creativa', ubicacion: 'Lambayeque', modo: 'Híbrido', area: 'Diseño', descripcion: 'Diseña experiencias atractivas y accesibles para usuarios, colaborando con equipos de desarrollo ágil.' },
  {
    titulo: 'Analista Programador',
    empresa: 'InnovaTech',
    ubicacion: 'Cusco',
    modo: 'Presencial',
    area: 'Tecnología',
    descripcion: 'Encargado del análisis, diseño y desarrollo de aplicaciones internas utilizando frameworks modernos y bases de datos SQL.'
  },
  {
    titulo: 'Desarrollador Full Stack',
    empresa: 'DevSolutions',
    ubicacion: 'Lima',
    modo: 'Híbrido',
    area: 'Tecnología',
    descripcion: 'Participa en el desarrollo de proyectos web end-to-end usando Node.js, Vue y APIs REST, asegurando alta calidad y rendimiento.'
  },
])

const filtrarTrabajo = computed(() => {
  return ofertas.value.filter(oferta =>
    (!filtros.value.ubicacion || oferta.ubicacion === filtros.value.ubicacion) &&
    (!filtros.value.modo || oferta.modo === filtros.value.modo) &&
    (!filtros.value.area || oferta.area === filtros.value.area)
  )
})

function aplicarFiltros(f, s) {
  filtros.value = f
  search.value = s
}

function postularTrabajo(oferta) {
  swal.fire({
    title: '¡Postulación exitosa!',
    text: `Has postulado al puesto: ${oferta.titulo}`,
    icon: 'success',
    confirmButtonText: 'Aceptar',
  })


}
</script>
<template>
  <v-app>
    <Navbar />

    <v-main app class="pa-6 mt-16">
      
      <SearchBar
        :ubicaciones="ubicaciones"
        :modalidades="modalidades"
        :areas="areas"
        @search="aplicarFiltros"
      />

      <v-row dense>
        <v-col
          v-for="(oferta, i) in filtrarTrabajo"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <JobCard
            :titulo="oferta.titulo"
            :empresa="oferta.empresa"
            :ubicacion="oferta.ubicacion"
            :modo="oferta.modo"
            :descripcion="oferta.descripcion"
            @apply="postularTrabajo"
          />
        </v-col>
      </v-row>
    </v-main>

    <FilterModal ref="filterModal" :ubicaciones="ubicaciones" :modalidades="modalidades" :areas="areas" @apply="aplicarFiltros" />
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: #f5f5f5;
}
</style>