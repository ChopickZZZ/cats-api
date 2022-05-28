<template>
  <main class="page">
    <div class="container">
      <div class="cats">
        <AppCat
          v-for="cat of cats"
          :key="cat.id"
          :image="cat.url"
          :id="cat.id"
          @catToggle="toggleCats"
        />
      </div>
      <p class="cats__loading" v-if="loading">
        ...&nbsp;Загружаем еще котиков&nbsp;...
      </p>
    </div>
  </main>
</template>

<script>
import AppCat from "./AppCat.vue";
import { throttle } from "../helper/throttle";
export default {
  mounted() {
    this.loadCats();
    this.loadMoreCats = throttle(this.loadMoreCats, 300);
    window.addEventListener("scroll", this.loadMoreCats);
  },
  data() {
    return {
      cats: [],
      limit: 15,
      loading: false,
    };
  },
  methods: {
    async loadCats() {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=${this.limit}`
        );
        const data = await res.json();
        data.forEach((el) => this.cats.push(el));
        this.loading = false;
      } catch (e) {
        console.error(e.message);
      }
    },
    async loadMoreCats(e) {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        3
      ) {
        this.loading = true;
        this.loadCats();
      }
    },
    toggleCats(id, isAdded) {
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
  padding: 50px 0 30px 0;
}

.cats {
  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  gap: 48px;
  padding-bottom: 48px;
}

.cats__loading {
  text-align: center;
  font-size: 14px;
  line-height: 21 / 14 * 100%;
  letter-spacing: 0.25px;
}

@media (max-width: 1024px) {
  .cats {
    gap: 36px;
    justify-content: center;
  }
}

@media (max-width: 780px) {
  .cats {
    grid-template-columns: repeat(auto-fit, minmax(225px, 0.75fr));
  }
}

@media (max-width: 512px) {
  .page {
    padding: 30px 0 15px 0;
  }
  .cats {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(225px, 0.75fr));
    padding-bottom: 24px;
  }
}
</style>
