<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([])
const isLoading = ref(true)

async function fetchData() {
  const res = await fetch('https://f35b386a591e2f62.mokky.dev/main_page')
  products.value = await res.json()
  isLoading.value = false
}
fetchData()

function goToPage(product) {
  if (product.link) {
    router.push(product.link)
  }
}
</script>
<!-- <div class="max-w-343 hidden"></div>
  <div class="max-w-318 hidden"></div>
  <div class="max-w-540 hidden"></div>
  <div class="max-w-295 hidden"></div>
  <div class="max-w-556 hidden"></div>
    <div class="max-w-382 hidden"></div>
        <div class="max-w-579 hidden"></div>
      <div class="max-w-214 hidden"></div>
        <div class="max-w-352 hidden"></div>-->

<template>
  <div class="block max-w-1640 mx-auto">
    <h2 class="font-ptsans text-5xl max-w-520 leading-62">Выберите категорию ветеранов ВОВ</h2>
    <div class="mt-100">
      <div class="grid grid-cols-2 gap-[40px]">
        <div
          v-for="product in products"
          :key="product.id"
          @click="goToPage(product)"
          class="relative text-left cursor-pointer"
        >
          <!-- Картинка -->
          <img :src="product.image" :alt="product.name" class="w-800 h-595 rounded-50" />
          <!-- Текст поверх изображения -->
          <span
            class="absolute font-montserrat text-2xl text-white bottom-50 left-10"
            :class="product.styles?.nameStyle"
          >
            {{ product.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
