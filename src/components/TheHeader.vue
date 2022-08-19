<script setup>
import { useCatStore } from '@/stores/cats'
import { computed } from 'vue'
const isReady = computed(() => useCatStore().items.length || useCatStore().favouriteCats.length)
</script>

<template>
  <header class="header">
    <ul class="menu container">
      <li class="menu__link">
        <RouterLink :to="{ name: 'Home' }">Все котики</RouterLink>
      </li>
      <li class="menu__link" v-if="isReady">
        <RouterLink :to="{ name: 'Favourite' }">Любимые котики</RouterLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--color-primary-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
}

.menu {
  position: relative;
  height: 64px;
  display: flex;
  align-items: center;

  &__link {
    font-size: 14px;
    line-height: calc(21 / 14 * 100%);
    letter-spacing: 0.25px;
    color: rgba(255, 255, 255, 0.7);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: 0.3s ease;
    cursor: pointer;

    .active {
      background-color: var(--color-primary-dark-blue);
      color: rgb(255, 255, 255);
    }

    a {
      display: inline-flex;
      align-items: center;
      height: 100%;
      padding: 0 1.2em;
    }

    &:hover {
      background-color: var(--color-primary-dark-blue);
      color: rgb(255, 255, 255);
    }
  }
}
</style>
