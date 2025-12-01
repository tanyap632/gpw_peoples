<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
  customClass: {
    type: String,
    default: '',
  },
})
const defaultClass = 'w-520 h-455 rounded-50'
const finalClass = computed(() => {
  return [defaultClass, props.customClass].filter(Boolean).join(' ')
})
</script>

<template>
  <div @click="$emit('click')" class="cursor-pointer">
    <img :src="src" :alt="alt" :class="finalClass" />
  </div>
</template>
