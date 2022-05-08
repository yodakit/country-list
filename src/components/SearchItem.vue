<template>
  <label class="lg:w-96 md:w-72 sm:w-56 w-full flex items-start shadow-md rounded-md p-3 shadow-slate-400 dark:shadow-none bg-white dark:bg-slate-800 dark:duration-300">
    <input :value="modelValue" @input="updateSearch" type="text" placeholder="Search" class="peer outline-none w-full bg-white dark:text-white dark:bg-inherit focus:placeholder:opacity-0">
    <div class="mr-2 order-first peer-focus:opacity-0 ease-in-out duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" :fill="colorIcon">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    </div>
    <div v-if="modelValue" @click="removeSearch" class="order-last cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" :fill="colorIcon">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </label>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
        required: true,
      },
      colorIcon: {
        type: String,
        required: true,
      },
    },
    emits: ['update:modelValue'],
    methods: {
      updateSearch(event) {
        this.$emit("update:modelValue", event.target.value);
      },
      removeSearch() {
        this.$emit("update:modelValue", '');
      }
    },
  }
</script>
