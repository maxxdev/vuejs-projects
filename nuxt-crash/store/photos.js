export const state = () => ({
  users: []
})
export const mutations = {
  setPhotos(state, photos) {
    state.photos = photos
  }
}
export const actions = {
  async fetch({commit}) {
    const photos = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?limit=100')
    commit('setPhotos', photos)
  }
}

export const getters = {
  photos: s => s.photos
}
