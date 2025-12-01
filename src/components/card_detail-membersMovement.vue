<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const item = ref({})
const product = ref({})

onMounted(async () => {
  try {
    const response = await fetch('https://f35b386a591e2f62.mokky.dev/membersPartisanMovement')
    const data = await response.json()
    item.value = data.find((el) => el.id === parseInt(route.params.id))

    if (!item.value) {
      throw new Error('Элемент не найден')
    }

    // Устанавливаем title из поля name
    document.title = item.value.name || 'УЧАСТНИКИ ПАРТИЗАНСКОГО И ПОДПОЛЬНОГО ДВИЖЕНИЯ'

    product.value = {
      styles: item.value.styles || {},
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
    document.title = 'Ошибка загрузки'
  }
})

const goToBack = () => {
  try {
    // Указываем имя маршрута и якорь
    router.push({
      name: 'membersMovement',
      // hash: '#operation1942'
    })
  } catch (error) {
    console.error('Ошибка перехода:', error)
  }
}
</script>
<!-- <div class="max-w-520 mb-93 hidden"></div>
 <div class="mb-127 hidden"></div>
  <div class="max-w-545 mb-144.5 hidden"></div>
    <div class="max-w-522 mb-69 hidden"></div> -->

<template>
  <div class="w-1665 mx-auto pt-179">
    <div class="flex justify-between">
      <div v-if="item.image && (item.image.large || typeof item.image === 'string')">
        <img
          :src="typeof item.image === 'string' ? item.image : item.image.large"
          alt="Изображение"
          class="max-w-1080 object-cover"
        />
      </div>
      <div>
        <h1
          class="text-44 font-ptsans leading-57 mb-10"
          :class="item.styles ? item.styles.large : ''"
        >
          {{ item.name }}
        </h1>
        <p
          class="max-w-520 font-montserrat text-2xl leading-29 mb-10 pre-wrap"
          :class="item.styles ? item.styles.gap : ''"
        >
          {{ item.description }}
        </p>
        <button
          @click="goToBack"
          class="bg-E41D1D text-white flex gap-5 items-center font-montserrat text-2xl py-31 w-520 justify-center rounded-50"
        >
          <img src="/public/arrow-back.svg" alt="arrow-back" />
          Назад
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pre-wrap {
  white-space: pre-wrap; /* сохраняет переносы строк */
  word-break: break-word;
}
</style>
