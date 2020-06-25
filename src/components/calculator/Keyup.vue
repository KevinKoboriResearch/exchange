<template>
  <div>
      <keyboard-events v-on:keyup="keyboardEvent"></keyboard-events>
  </div>
</template>

<script>
  export default {
    created() {
      const component = this;
      this.handler = function (e) {
        component.$emit('keyup', e);
      }
      window.addEventListener('keyup', this.handler);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.handler);
    },
    methods: {
        keyboardEvent (e) {
            if (e.which === 13) {
            // run your code
        }
  }
}

  }
</script>

<style lang="stylus" scoped>
  div {
    display: none;
  }
</style>