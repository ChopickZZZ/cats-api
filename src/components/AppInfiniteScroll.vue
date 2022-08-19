<script setup>
import { ref, defineEmits, onMounted, onBeforeUnmount } from 'vue'
const emit = defineEmits(['load'])

const element = ref(null)
let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        emit('load')
      }
    })
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  })
  observer.observe(element.value)
})
onBeforeUnmount(() => {
  observer.unobserve(element.value)
})
</script>

<template>
   <div class="intersection-observer" ref="element"></div>
</template>

<style scoped>
.intersection-observer {
   position: relative;
   z-index: -1;
   pointer-events: none;
   bottom: 200px;
}
</style>
