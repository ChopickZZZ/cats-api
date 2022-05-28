<template>
  <main class="page">
    <div class="cats container">
      <AppCat v-for="cat of cats" :key="cat.id" :image="cat.url" />
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
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=15"
      );
      this.cats = await res.json();
      console.log(this.cats);
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
