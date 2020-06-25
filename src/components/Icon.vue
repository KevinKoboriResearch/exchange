<template>
  <v-row align="center" justify="space-around">
    <p>oi <p/>
    <v-icon>fas fa-lock</v-icon>

    <v-icon>fas fa-search</v-icon>

    <v-icon>fas fa-list</v-icon>

    <v-icon>fas fa-edit</v-icon>

    <v-icon>fas fa-tachometer-alt</v-icon>

    <v-icon>fas fa-circle-notch fa-spin</v-icon>
  </v-row>
</template>

y
<script>
import CalculatorYellow from '~/components/calculator/CalculatorYellow.vue'
  export default {
      components: {
      CalculatorYellow
    },
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
  }
</script>


<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>