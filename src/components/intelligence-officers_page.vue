<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([])
const isLoading = ref(true)

async function fetchData() {
  const res = await fetch('https://f35b386a591e2f62.mokky.dev/intelligenceOfficers')
  products.value = await res.json()
  isLoading.value = false
}
fetchData()

function goToDetail(id) {
  router.push({ name: 'card_detailIntelligenceOfficers', params: { id } })
}
</script>
<!-- <div class="max-w-302 hidden"></div>
  <div class="max-w-304 hidden"></div>
  <div class="max-w-315 hidden"></div>
  <div class="max-w-373 hidden"></div>
    <div class="max-w-161 hidden"></div>
  <div class="max-w-230 hidden"></div>
    <div class="max-w-217 hidden"></div>
    <div class="max-w-382 hidden"></div>
      <div class="max-w-295 hidden"></div>
<div class="max-w-352 hidden"></div>
  <div class="max-w-240 hidden"></div>
      <div class="max-w-312 hidden"></div>
            <div class="max-w-344 hidden"></div>
                 <div class="max-w-283 hidden"></div>
        -->

<template>
  <div class="block max-w-1640 mx-auto">
    <div class="flex gap-[30px] text-4xl font-bold items-center font-ptsans">
      <a href="/gpw_peoples/">Главная</a><span class="bg-black rounded-50 w-18 h-18 block mt-2"></span>
      <p>Сотрудники разведки и контрразведки</p>
    </div>
    <div class="mt-100">
      <div class="grid grid-cols-2 gap-[40px]">
        <div
          v-for="product in products"
          :key="product.id"
          @click="goToDetail(product.id)"
          class="relative text-left cursor-pointer"
        >
          <!-- Картинка -->
          <img :src="product.image?.small" :alt="product.name" class="w-800 h-595 rounded-50" />
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
