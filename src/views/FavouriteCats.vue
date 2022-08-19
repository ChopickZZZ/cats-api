<script setup>
import AppCat from '@/components/AppCat.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const favouriteCats = computed(() => store.state.cats)

const loadCatsFromStorage = () => {
  if (localStorage.length !== 0 && favouriteCats.value.length === 0) {
    const favourite = JSON.parse(localStorage.getItem('fav'))
    favourite.forEach((cat) => store.dispatch('setCat', cat))
  }
}

const removeCat = (id) => {
  const favouriteCat = favouriteCats.value.find((cat) => cat.id === id)
  store.dispatch('removeCat', favouriteCat)
  localStorage.setItem('fav', JSON.stringify(favouriteCats.value))
}

loadCatsFromStorage()
</script>

<template>
  <main class="page">
    <div class="container">
      <h1 class="cats__empty" v-if="favouriteCats.length === 0">
        Вы еще не добавили ни одного котика
      </h1>
      <div class="cats" v-else>
        <AppCat v-for="cat of favouriteCats" :key="cat.id" :image="cat.url" :id="cat.id" class="favourite"
          @catToggle="removeCat" />
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
