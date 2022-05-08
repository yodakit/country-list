<template>
  <nav-bar v-model:isDarkMode="isDarkMode" />
  <!-- <div class="py-3 xl:px-36 lg:px-24 md:px-10 px-4"> -->
  <div class="py-3 w-10/12 mx-auto my-0">
    <div class="flex justify-between items-center sm:flex-row flex-col sm:mb-10 mb-4 w-full">
      <search-item class="sm:mb-0 mb-3" v-model="search" :colorIcon="colorIcons" />
      <select-item
        v-model="region"
        :regions="regions"
        :colorIcon="colorIcons"
      />
    </div>
    <country-list :countries="actualCountries" />
  </div>
</template>

<script>
import { getCountryData } from './api'
import NavBar from '@/components/NavBar.vue'
import SearchItem from '@/components/SearchItem.vue'
import SelectItem from '@/components/SelectItem.vue'
import CountryList from '@/components/CountryList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SearchItem,
    SelectItem,
    CountryList
  },
  data () {
    return {
      countries: [],
      search: '',
      isDarkMode: false,
      region: ''
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
    colorIcons () {
      return this.isDarkMode ? 'rgb(255,255,255)' : 'rgba(0,0,0,.5)'
    },
    regions () {
      return [...new Set(this.countries.map(country => country.region))]
    },
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
    },
    actualCountries () {
      return this.region
        ? this.filteredCountries.filter(country =>
            country.region.includes(this.region)
          )
        : this.filteredCountries
    }
  }
}
</script>
