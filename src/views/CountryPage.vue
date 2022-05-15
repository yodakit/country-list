<template>
  <div class="dark:text-white">
    <button
      @click="$router.push('/')"
      class="flex items-center bg-slate-200 dark:bg-slate-800 py-1 px-4 rounded-md mb-6"
    >
      <span class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          :fill="colorIcon"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      Back
    </button>
    <div class="flex flex-col lg:flex-row">
      <img
        v-if="country.imgSrc !== ''"
        :src="country.imgSrc"
        alt="flags"
        class="w-full lg:w-1/2 mb-3 lg:mb-0 border-2"
      />
      <div v-else class="w-full lg:w-1/2 mb-3 lg:mb-0 border-2 bg-slate-200 dark:bg-slate-800"></div>
      <div class="w-full lg:w-1/2 lg:p-9">
        <h1 class="text-3xl mb-4">
          <strong>{{ country.name }}</strong>
        </h1>
        <div class="flex justify-between flex-col sm:flex-row mb-3">
          <div>
            <p><strong>Native Name: </strong>{{ country.nativeName }}</p>
            <p><strong>Population: </strong>{{ country.population }}</p>
            <p><strong>Region: </strong>{{ country.region }}</p>
            <p><strong>Sub Region: </strong>{{ country.subregion }}</p>
            <p><strong>Capital: </strong>{{ country.capital }}</p>
          </div>
          <div>
            <p><strong>Top Level Domain: </strong>{{ country.tld }}</p>
            <p><strong>Currencies: </strong>{{ country.currencies }}</p>
            <p>
              <strong>Languages: </strong>{{ country.languages.join(", ") }}
            </p>
          </div>
        </div>
        <div class="flex">
          <h2>Border Countries:</h2>
          <ul class="flex items-center flex-wrap">
            <li v-for="border in country.borders" :key="border">
              <button
                @click="
                  $router.push({ name: 'country', params: { name: border } })
                "
                class="ml-2 mb-2 py-1 px-2 bg-slate-200 dark:bg-slate-800 rounded-md"
              >
                {{ border }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCountryDataFromName, getCountryDataFromCode } from "@/api";

export default {
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      country: {
        name: "",
        nativeName: "",
        region: "",
        subregion: "",
        capital: "",
        tld: "",
        currencies: "",
        imgSrc: "",
        population: 0,
        languages: [],
        borders: [],
      },
    };
  },
  created() {
    getCountryDataFromName(this.$route.params.name).then(this.processingData);
  },
  beforeRouteUpdate(to, from, next) {
    getCountryDataFromCode(to.params.name).then(this.processingData).then(next);
  },
  computed: {
    colorIcon() {
      return this.isDarkMode ? "rgb(255,255,255)" : "rgba(0,0,0,.9)";
    },
  },
  methods: {
    processingData(data) {
      if (data.message === "Page Not Found") {
        return alert("Error");
      }
      this.destructuringData(data[0]);
    },
    destructuringData(currentData) {
      const uniqLang = currentData.languages
        ? Object.keys(currentData.languages)[0]
        : null;
      const uniqCurrencies = currentData.currencies
        ? Object.keys(currentData.currencies)[0]
        : null;

      this.country.name = currentData.name.common;
      this.country.region = currentData.region;
      this.country.population = currentData.population;
      this.country.subregion = currentData.subregion;
      this.country.imgSrc = currentData.flags.svg;
      this.country.tld = currentData.tld ? currentData.tld[0] : "";
      this.country.capital = currentData.capital ? currentData.capital[0] : "";
      this.country.currencies = uniqCurrencies
        ? currentData.currencies[uniqCurrencies].name
        : "";
      this.country.nativeName = uniqLang
        ? currentData.name.nativeName[uniqLang].common
        : this.country.name;
      this.country.languages = uniqLang
        ? Object.values(currentData.languages)
        : [];
      this.country.borders = currentData.borders
        ? Object.values(currentData.borders)
        : [];
    },
  },
};
</script>
