<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/app_footer.vue'

const route = useRoute()

// onMounted — аналог mounted()
onMounted(() => {
  document.title = route.meta.title || 'ЛЮДИ ВЕЛИКОЙ ОТЕЧЕСТВЕННОЙ ВОЙНЫ'
})

// watch — аналог watch: { '$route': ... }
watch(
  () => route.meta.title,
  (newTitle) => {
    document.title = newTitle || 'ЛЮДИ ВЕЛИКОЙ ОТЕЧЕСТВЕННОЙ ВОЙНЫ'
  },
  { immediate: true } // чтобы сработало сразу при монтировании
)
</script>
<template>
  <router-view />

  <Footer />
</template>
