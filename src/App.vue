<template>
    <nav-bar />
</template>

<script>
  import NavBar from "./components/NavBar.vue"
  export default {
    name: 'App',
    components: {
      NavBar,
    },
    created () {
      document.body.classList.add('dark:bg-slate-900', 'ease-in-out', 'duration-300');
    },
  }
</script>
