<template>
  <div class="cat">
    <div class="cat__image">
      <img :src="image" alt="" />
    </div>
    <div class="cat__fav">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.cat {
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;
  max-height: 225px;
  &:hover {
    transform: scale(1.15);
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24),
      0px 9px 18px rgba(0, 0, 0, 0.18);
    .cat__fav path {
      stroke: var(--color-orange);
    }
    .cat__fav path:hover {
      fill: var(--color-orange);
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__fav {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 40px;
    height: 37px;
  }
  &__fav path {
    fill: transparent;
    stroke: transparent;
    stroke-width: 2.3px;
    transition: 0.3s ease;
  }
}
</style>
