<template>
  <div>{{ $route.params.id }}</div>
</template>

<script>
export default {
  //name: "_id"
  validate({params}) {
    console.log('validate')
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>

</style>
