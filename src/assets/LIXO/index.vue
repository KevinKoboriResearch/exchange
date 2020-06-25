<template>
  <v-menu offset-y v-model="menuValue">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" :class="{active: menuValue}">
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
  </v-menu>
</template>

<script>
  export default {
    data() {
      return {
        menuValue: null
      };
    }
  };
</script>

<style lang="scss" scoped>
  .v-btn.active .v-icon {
    transform: rotate(-180deg);
  }
</style>