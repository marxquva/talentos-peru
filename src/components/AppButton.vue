<script setup>
const props = defineProps({
  label: String,
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'flat',
  },
  block: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <v-btn
    :color="color"
    :variant="variant"
    :block="block"
    class="text-white"
    @click="$emit('click')"
  >
    {{ label }}
  </v-btn>
</template>
