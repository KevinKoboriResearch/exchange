<template>
  <v-row
    justify="space-around"
    align="center"
  >

  <v-color-picker v-model="picker" class="ma-2" hide-canvas></v-color-picker>

    <v-color-picker
      v-model="picker"
      flat
    ></v-color-picker>

    <v-color-picker
      v-model="picker"
      elevation="15"
    ></v-color-picker>
  </v-row>
</template>


<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</script>