<template>
  <nav-bar v-model:isDarkMode="isDarkMode" />
  <!-- <div class="py-3 xl:px-36 lg:px-24 md:px-10 px-4"> -->
  <div class="py-3 w-10/12 mx-auto my-0">
    <div class="flex justify-between mb-10">
      <search-item v-model="search" :isDarkMode="isDarkMode" />
    </div>
    <country-list :countries="filteredCountries" />
  </div>
</template>

<script>
import { getCountryData } from './api'
import NavBar from '@/components/NavBar.vue'
import SearchItem from '@/components/SearchItem.vue'
import CountryList from '@/components/CountryList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SearchItem,
    CountryList
  },
  data () {
    return {
      countries: [],
      search: '',
      isDarkMode: false
    }
  },
  created () {
    getCountryData().then(data => {
      if (data.message === 'Page Not Found') {
        return alert('Error')
      }
      this.countries = data
    })
  },
  computed: {
    sortedCountries () {
      return this.countries.sort((firstCountry, secondCountry) =>
        firstCountry.name.common.localeCompare(secondCountry.name.common)
      )
    },
    filteredCountries () {
      return this.search
        ? this.sortedCountries.filter(country =>
            country.name.common
              .toLowerCase()
              .includes(this.search.toLowerCase())
          )
        : this.sortedCountries
    }
  }
}
</script>
