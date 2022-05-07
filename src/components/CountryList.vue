<template>
  <div
    class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center"
  >
    <country-item v-for="country in countries" :key="country" :country="country"/>
  </div>
</template>

<script>
import CountryItem from '@/components/CountryItem.vue'
export default {
  components: {
    CountryItem
  },
  props: {
    countries: {
      type: Array,
      required: true
    }
  }
}
</script>
