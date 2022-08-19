<script setup>
import CatImage from '@/components/CatImage.vue'
import AppInfiniteScroll from '@/components/AppInfiniteScroll.vue'
import { loadCats, likeCat, loading } from '@/use/index'
import { useCatStore } from '@/stores/cats'

const catStore = useCatStore()
await loadCats()
</script>

<template>
   <main class="page">
      <div class="container">
         <div class="cats">
            <CatImage v-for="cat of catStore.cats" :key="cat.id" :cat="cat" @catToggle="likeCat" />
         </div>
         <AppInfiniteScroll @load="loadCats" :done="false" />
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
