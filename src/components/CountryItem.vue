<template>
  <router-link
    :to="{
    name: 'country',
    params: {
      name: country.name.common,
    }
  }"
  >
    <div
      class="rounded-md shadow-md overflow-hidden shadow-slate-500 dark:text-white dark:bg-slate-800 dark:shadow-none"
    >
      <div :style="backgoundImageSettings" class="h-52"></div>
      <div class="p-3">
        <h3 class="font-medium mb-2 text-lg">{{ country.name.common }}</h3>
        <p>
          <span class="font-medium">Population: </span>{{ country.population }}
        </p>
        <p><span class="font-medium">Region: </span>{{ country.region }}</p>
        <p>
          <span class="font-medium">Capital: </span
          >{{ country.capital ? country.capital[0] : '-' }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      backgoundImageSettings: {}
    }
  },
  created () {
    this.backgoundImageSettings = {
      background: `url("${this.country.flags.svg}") center center/cover no-repeat`
    }
  }
}
</script>
