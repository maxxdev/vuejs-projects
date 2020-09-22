<template>

  <v-progress-circular v-if="loading"
                       indeterminate
                       size="64"
                       color="primary"
  ></v-progress-circular>

  <div v-else-if="computedPhotos.length>0">

    <v-card v-for="item in computedPhotos" :key="item.id">
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
          :to="`/photos/${item.id}`"
        >
          Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>
    no results
  </div>
</template>

<script>
export default {
  name: "index",
  async fetch({store}) {
    //  if (store.getters['photos/photos'].length === 0) {
    //await store.dispatch('photos/fetch')
    //   }
  },
  computed: {
    computedPhotos() {
      return this.$store.getters['photos/photos']
    }
  },
  async asyncData({$axios}) {
    //const photos = await $axios.$get('https://jsonplaceholder.typicode.com/photos')
    //return {photos}
  },
  async mounted() {
    await this.$store.dispatch('photos/fetch')
    this.loading = false
  },

  data: () => ({
    loading: true,
    photos: []
  }),
}
</script>

<style scoped>

</style>
