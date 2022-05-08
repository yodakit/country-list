<template>
  <div class="relative cursor-pointer sm:w-auto w-full">
    <button
      @click="isOpen = true"
      class="flex justify-between dark:text-stone-200 lg:w-96 md:w-72 sm:w-56 w-full text-left shadow-md rounded-md p-3 shadow-slate-400 dark:shadow-none bg-white dark:bg-slate-800 dark:duration-300"
    >
      {{ modelValue ? modelValue : 'Filter by region' }}
      <span class="flex">
        <svg
          v-if="modelValue"
          @click.stop="removeRegion"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          :fill="colorIcon"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          :fill="colorIcon"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <ul
        v-if="isOpen"
        class="absolute w-full overflow-hidden bg-white dark:bg-slate-800 top-0 shadow-xl rounded-md"
      >
        <li
          v-for="region in regions"
          :key="region"
          @click="selectedRegion(region)"
          class="p-3 dark:text-white hover:bg-stone-200 hover:dark:bg-slate-700"
        >
          {{ region }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    colorIcon: {
      type: String,
      required: true
    },
    regions: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClose (event) {
      if (event.target !== this.$el) {
        this.isOpen = false
      }
    },
    selectedRegion (region) {
      this.$emit('update:modelValue', region)
    },
    removeRegion () {
      this.$emit('update:modelValue', '')
    }
  },
  created () {
    document.addEventListener('click', this.handleClose, true)
  },
  beforeUnmount () {
    document.removeEventListener('click', this.handleClose, true)
  }
}
</script>
