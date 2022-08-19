<script setup>
import SkeletonImage from './SkeletonImage.vue'
</script>

<template>
   <div v-bind="$attrs">
      <div class="skeleton-cats">
         <SkeletonImage v-for="(image, idx) in 20" :key="'i' + idx" />
      </div>
   </div>
</template>

<style scoped>
.skeleton-cats {
   display: grid;
   grid-template-columns: repeat(auto-fit, 225px);
   gap: 48px;
   padding-bottom: 48px;
}
</style>
