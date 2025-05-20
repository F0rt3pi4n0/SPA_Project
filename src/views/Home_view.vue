<template>
    <Home/>
    <div id="app">
    <vue-data-table></vue-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>
