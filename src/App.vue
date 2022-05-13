<template>
  <nav-bar v-model:isDarkMode="isDarkMode" />
  <div class="py-3 w-11/12 lg:w-10/12 mx-auto my-0">
    <router-view :isDarkMode="isDarkMode"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      isDarkMode: false,
    }
  },
}
</script>
