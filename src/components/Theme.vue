<template>
  <v-card dark>
    <v-toolbar
      color="purple accent-4"
      flat
    >
      <v-switch
        color="white"
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        label="Theme Dark"
      ></v-switch>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
  data: vm => ({
    initialDark: vm.$vuetify
      ? vm.$vuetify.theme.dark
      : false
    })
}
</script>

<style>

</style>
