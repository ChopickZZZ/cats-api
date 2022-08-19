<script setup>
import AppCat from '@/components/AppCat.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cats = ref([])
const limit = ref(15)
const loading = ref(false)

const loadCats = async () => {
  try {
    const res = await fetch(
         `https://api.thecatapi.com/v1/images/search?limit=${limit.value}`
    )
    const data = await res.json()
    data.forEach((el) => cats.value.push(el))
    loading.value = false
  } catch (e) {
    console.error(e.message)
  }
}

const loadMoreCats = async (e) => {
  if (
    e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
      3
  ) {
    loading.value = true
    loadCats()
  }
}

const toggleCats = (id, isAdded) => {
  const favouriteCat = cats.value.find((cat) => cat.id === id)

  if (isAdded) {
    store.dispatch('setCat', favouriteCat)
    localStorage.setItem(
      'fav',
      JSON.stringify(store.getters.getFavouriteCats)
    )
  } else {
    store.dispatch('removeCat', favouriteCat)
    localStorage.setItem(
      'fav',
      JSON.stringify(store.getters.getFavouriteCats)
    )
  }
}

await loadCats()
window.addEventListener('scroll', loadMoreCats)
</script>

<template>
   <main class="page">
      <div class="container">
         <div class="cats">
            <AppCat v-for="cat of cats" :key="cat.id" :image="cat.url" :id="cat.id" @catToggle="toggleCats" />
         </div>
         <p class="cats__loading" v-if="loading">
            ...&nbsp;Загружаем еще котиков&nbsp;...
         </p>
      </div>
   </main>
</template>

<style lang="scss">
.page {
   padding: 50px 0 30px 0;
}

.cats {
   display: grid;
   grid-template-columns: repeat(auto-fit, 225px);
   gap: 48px;
   padding-bottom: 48px;
}

.cats__loading {
   text-align: center;
   font-size: 14px;
   line-height: 21 / 14 * 100%;
   letter-spacing: 0.25px;
}

@media (max-width: 1024px) {
   .cats {
      gap: 36px;
      justify-content: center;
   }
}

@media (max-width: 780px) {
   .cats {
      grid-template-columns: repeat(auto-fit, minmax(225px, 0.75fr));
   }
}

@media (max-width: 512px) {
   .page {
      padding: 30px 0 15px 0;
   }

   .cats {
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(225px, 0.75fr));
      padding-bottom: 24px;
   }
}
</style>
