<script setup>
import TheHeader from '@/components/TheHeader.vue'
import SkeletonImagelist from './components/loading/SkeletonImagelist.vue'
</script>

<template>
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <SkeletonImagelist class="container" style="padding: 114px 0 30px 0" />
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>
