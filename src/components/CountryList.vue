<template>
  <div
    class="py-3 xl:px-36 lg:px-24 md:px-10 px-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center"
  >
    <counry-item v-for="country in countries" :key="country" :country="country"/>
  </div>
</template>

<script>
import CounryItem from '@/components/CounryItem.vue'
export default {
  components: {
    CounryItem
  },
  props: {
    countries: {
      type: Array,
      required: true
    }
  }
}
</script>
