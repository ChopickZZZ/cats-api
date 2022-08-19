<script setup>
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <component :is="Component" />
          <template #fallback>...Loading</template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>
