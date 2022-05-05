<template>
  <nav-bar />
  <country-list :countries="sortedCountries" />
</template>

<script>
import { getCountryData } from './api'
import NavBar from '@/components/NavBar.vue'
import CountryList from '@/components/CountryList.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    CountryList
  },
  data () {
    return {
      countries: []
    }
  },
  created () {
    getCountryData().then(data => {
      console.log(data)
      if (data.message === 'Page Not Found') {
        return alert('Error')
      }
      this.countries = data
    })
    document.body.classList.add(
      'dark:bg-slate-900',
      'ease-in-out',
      'duration-300'
    )
  },
  computed: {
    sortedCountries () {
      return this.countries.sort((firstCountry, secondCountry) =>
        firstCountry.name.common.localeCompare(secondCountry.name.common)
      )
    }
  }
}
</script>
