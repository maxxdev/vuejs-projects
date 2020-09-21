<template>

  <v-progress-circular v-if="loading"
                       indeterminate
                       size="64"
                       color="primary"
  ></v-progress-circular>

  <div v-else>
    <v-card v-for="item in computedItems" :key="item.id">
      <v-card-title class="headline">
        {{ item.id }}
      </v-card-title>
      <v-card-text>
        <p>Item: {{ item.title }}</p>
        <p>Url: {{ item.url }} </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          nuxt
          :to="`/items/${item.id}`"
        >
          Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "index",
  async fetch({store}) {
    //  if (store.getters['items/items'].length === 0) {
    //await store.dispatch('items/fetch')
    //   }
  },
  computed: {
    computedItems() {
      return this.$store.getters['items/items']
    }
  },
  async asyncData({$axios}) {
    //const items = await $axios.$get('https://jsonplaceholder.typicode.com/photos')
    //return {items}
  },
  async mounted() {
    await this.$store.dispatch('items/fetch')
    this.loading = false
  },

  data: () => ({
    loading: true,
    items: []
  }),
}
</script>

<style scoped>

</style>
