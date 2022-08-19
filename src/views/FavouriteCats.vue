<script setup>
import CatImage from '@/components/CatImage.vue'
import { useCatStore } from '@/stores/cats'
import { computed } from 'vue'
import { likeCat } from '@/use/index'

const catStore = useCatStore()
const favouriteCats = computed(() => catStore.favouriteCats)

catStore.fetchCats()
</script>

<template>
  <main class="page">
    <div class="container">
      <h1 class="cats__empty" v-if="favouriteCats.length === 0">
        Вы еще не добавили ни одного котика
      </h1>
      <div class="cats" v-else>
        <CatImage v-for="cat of favouriteCats" :key="cat.id" :cat="cat" class="favourite" @catToggle="likeCat" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cats__empty {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-primary-blue);
}
</style>
