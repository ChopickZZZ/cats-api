<template>
  <header class="header">
    <ul class="menu container">
      <li class="menu__link">
        <a class="menu__item" href="#">Все котики</a>
      </li>
      <li class="menu__link">
        <a class="menu__item" href="#">Любимые котики</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  background-color: var(--color-primary-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
}

.menu {
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
    height: 100%;
    padding: 0 1.2em;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: var(--color-primary-dark-blue);
      color: rgb(255, 255, 255);
    }
  }
}
</style>
