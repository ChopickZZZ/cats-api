import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCatStore = defineStore('cats', () => {
  const items = ref([])
  const favouriteCats = ref([])

  const setCat = (cat) => {
    items.value.push(cat)
  }
  const removeCat = (cat) => {
    items.value = items.value.filter(item => item.id !== cat.id)
  }
  const fetchCats = () => {
    const cats = JSON.parse(localStorage.getItem('favouriteCats'))
    favouriteCats.value = cats
  }

  const toggleFavouriteCats = (id) => {
    const likedCat = favouriteCats.value.find(cat => cat.id === id)
    if (!likedCat) {
      const foundCat = items.value.find(cat => cat.id === id)
      foundCat.liked = true
      favouriteCats.value.push(foundCat)
    } else {
      likedCat.liked = false
      favouriteCats.value = favouriteCats.value.filter(cat => cat.id !== id)
    }
    localStorage.setItem('favouriteCats', JSON.stringify(favouriteCats.value))
  }

  return {
    items,
    favouriteCats,
    setCat,
    removeCat,
    toggleFavouriteCats,
    fetchCats
  }
})
