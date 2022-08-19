import { ref } from 'vue'
import { useCatStore } from '@/stores/cats'

const limit = ref(20)
export const loading = ref(false)

export const loadCats = async () => {
  try {
    loading.value = true
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit.value}&api_key=f65b2f08-f9a6-497a-946c-bd609bad686d`
    )
    const data = await res.json()
    data.forEach((cat) => useCatStore().setCat(cat))
    loading.value = false
  } catch (e) {
    console.error(e.message)
  }
}

export const likeCat = (id) => useCatStore().toggleFavouriteCats(id)
