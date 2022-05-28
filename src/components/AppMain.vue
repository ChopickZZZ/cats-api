<template>
  <main class="page">
    <div class="cats container">
      <AppCat
        v-for="cat of cats"
        :key="cat.id"
        :image="cat.url"
        :id="cat.id"
        @catToggle="addToFavourite"
      />
    </div>
  </main>
</template>

<script>
import AppCat from "./AppCat.vue";
export default {
  mounted() {
    this.loadCats();
  },
  data() {
    return {
      cats: [],
    };
  },
  methods: {
    async loadCats() {
      try {
        const res = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=15"
        );
        this.cats = await res.json();
      } catch (e) {
        console.error(e.message);
      }
    },
    addToFavourite(id, isAdded) {
      const favouriteCat = this.cats.find((cat) => cat.id === id);

      if (isAdded) {
        this.$store.dispatch("setCat", favouriteCat);
        localStorage.setItem(
          "fav",
          JSON.stringify(this.$store.getters.getFavouriteCats)
        );
      } else {
        this.$store.dispatch("removeCat", favouriteCat);
        localStorage.setItem(
          "fav",
          JSON.stringify(this.$store.getters.getFavouriteCats)
        );
      }
    },
  },
  components: { AppCat },
};
</script>

<style lang="scss">
.page {
  padding: 49px 0;
}

.cats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 225px));
  //justify-content: center;
  gap: 48px;
}
</style>
