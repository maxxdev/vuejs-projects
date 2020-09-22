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
    const items = await this.$axios.$get('http://invaskapi.development/api/v1/items')
    commit('setItems', items)
  },
  clear({commit}) {
    commit('setItems', [])
  }
}

export const getters = {
  items: s => s.items
}
