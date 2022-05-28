<template>
  <div class="cat" :class="{ favourite: isAdded }">
    <div class="cat__image">
      <img :src="image" alt="" />
    </div>
    <button class="cat__fav" @click="catHandler(id)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  emits: ["catToggle"],
  data() {
    return {
      isAdded: false,
    };
  },
  methods: {
    catHandler(id) {
      this.isAdded = !this.isAdded;
      this.$emit("catToggle", id, this.isAdded);
    },
  },
};
</script>

<style lang="scss" scoped>
.cat {
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;
  height: 225px;
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
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    bottom: 10%;
    right: 10%;
    width: 40px;
    height: 37px;
    cursor: pointer;
  }
  &__fav path {
    position: relative;
    fill: transparent;
    stroke: transparent;
    stroke-width: 2.3px;
    transition: 0.3s ease;
  }
}
.cat.favourite:hover .cat__fav path,
.cat.favourite:hover .cat__fav path:hover {
  fill: var(--color-dark-orange);
  stroke: var(--color-dark-orange);
}
</style>
