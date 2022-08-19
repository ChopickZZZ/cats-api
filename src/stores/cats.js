import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCatStore = defineStore('cats', () => {
  const items = ref([])
  const favouriteCats = ref([])

  const cats = computed(() => items.value)

  const setCat = (cat) => {
    items.value.push(cat)
  }
  const removeCat = (cat) => {
    items.value = items.value.filter(item => item.id !== cat.id)
  }

  const toggleFavouriteCats = (id) => {
    const likedCat = items.value.find(cat => cat.id === id)
    if (!favouriteCats.value.includes(likedCat)) {
      favouriteCats.value.push(likedCat)
    } else {
      favouriteCats.value = favouriteCats.value.filter(cat => cat.id !== id)
    }
  }

  return { items, cats, setCat, removeCat, favouriteCats, toggleFavouriteCats }
})
