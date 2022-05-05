<template>
  <nav
    class="relative bg w-full flex items-center justify-between py-4 px-8 shadow-md dark:bg-slate-800 dark:text-white ease-in-out duration-300"
  >
    <h1 class="text-2xl font-medium">Where in the World?</h1>
    <button @click="switchTheme" class="uppercase flex items-center py-1 px-3 rounded-md ease-in-out duration-300 hover:bg-slate-200 hover:dark:bg-slate-700">
      <span v-html="themeIcon"></span>
      <span class="ml-2">{{ themeMode === 'light' ? 'dark' : 'light' }} mode</span>
    </button>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      themeMode: '',
      themeIcon: '',
    }
  },
  created () {
    this.themeMode = localStorage.getItem("reverseTheme") || 'light';
    this.switchTheme();
  },
  methods: {
    switchTheme() {
      localStorage.setItem("reverseTheme", this.themeMode);
      if (this.themeMode === 'light') {
        document.documentElement.classList.add('dark');
        this.themeIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>`;
        this.themeMode = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        this.themeIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
           <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>`;
        this.themeMode = 'light';
      }
    }
  },
}
</script>

