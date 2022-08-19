<template>
  <AppHeader />
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: { AppHeader }
}
</script>
