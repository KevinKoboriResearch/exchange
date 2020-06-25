<template>
<div>


  <!-- <v-btn
        icon
        @click="oi = !oi">{{ oi ? 'Show' : 'Hide' }}
      </v-btn> -->
  <!-- <Calculator/> -->
    <!-- <div class="floating-calculator">
      <v-expand-transition>
        <div v-show="!oi" class="mx-auto">
          <CalculatorYellow/>
        </div>
      </v-expand-transition>
    </div> -->

    

  <!-- <CalcPosition/> -->
  <CalcShow/>
  <Flutuante/>
  <!-- <Calculator/> -->
  <Chat/>
  <CalculatorApple/>
  <CalculatorBlue/>
  <CalculatorYellow/>
  </div>
</template>

<script>
// import Calculator from '~/components/Calculator.vue'
import CalculatorApple from '~/components/calculator/CalculatorApple.vue'
import CalculatorBlue from '~/components/calculator/CalculatorBlue.vue'
import CalculatorYellow from '~/components/calculator/CalculatorYellow.vue'
import Flutuante from '~/components/calculator/Flutuante.vue'
import CalcShow from '~/components/calculator/CalcShow.vue'
import CalcPosition from '~/components/calculator/CalcPosition.vue'
import Chat from '~/components/calculator/Chat.vue'
import Calculator from '~/components/calculator/Calculator.vue'
// import Keyup from '~/components/calculator/Keyup.vue'

export default {
  props:{
    oi: Boolean
  },
  // data() {
  //   return {
  //     hidden: this.oi
  //   }
  // },
  components: {
    Calculator,
    CalculatorApple,
    CalculatorBlue,
    CalculatorYellow,
    Flutuante,
    CalcShow,
    CalcPosition,
    Chat
    // Keyup
  },
  // watch: {
  //   oi: Boolean
  // }
  methods: {
  now: function () {
    console.log(this.oi)
    return this.oi
  }
}
}
</script>

<style>
</style>
