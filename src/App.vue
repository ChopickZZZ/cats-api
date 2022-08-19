<template>
  <AppHeader />
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

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: { AppHeader }
}
</script>
