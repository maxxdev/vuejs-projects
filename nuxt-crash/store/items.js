export const state = () => ({
  users: []
})
export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}
export const actions = {
  async fetch({commit}) {
    const items = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?limit=100')
    commit('setItems', items)
  }
}

export const getters = {
  items: s => s.items
}
