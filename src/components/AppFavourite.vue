<template>
  <main class="page">
    <div class="container">
      <h1 class="cats__empty" v-if="favCats.length === 0">
        Вы еще не добавили ни одного котика
      </h1>
      <div class="cats" v-else>
        <AppCat
          v-for="cat of favCats"
          :key="cat.id"
          :image="cat.url"
          :id="cat.id"
          class="favourite"
          @catToggle="removeCat"
        />
      </div>
    </div>
  </main>
</template>

<script>
import AppCat from "./AppCat.vue";
export default {
  mounted() {
    this.loadCatsFromStorage();
  },
  computed: {
    favCats() {
      return this.$store.getters.getFavouriteCats;
    },
  },
  methods: {
    loadCatsFromStorage() {
      if (localStorage.length !== 0 && this.favCats.length === 0) {
        const favouriteCats = JSON.parse(localStorage.getItem("fav"));
        favouriteCats.forEach((cat) => this.$store.dispatch("setCat", cat));
      }
    },
    removeCat(id) {
      const favouriteCat = this.favCats.find((cat) => cat.id === id);
      this.$store.dispatch("removeCat", favouriteCat);
      localStorage.setItem("fav", JSON.stringify(this.favCats));
    },
  },
  components: { AppCat },
};
</script>

<style lang="scss" scoped>
.cats__empty {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-primary-blue);
}
</style>