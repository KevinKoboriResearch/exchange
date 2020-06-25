<template>
<div>
  <!-- {{ apiData }} -->
  <ul>
    <li v-for="coin in apiData" :key="coin">
      <!-- {{ api.code }} -->
      <!-- {{api.code.low | currencydecimal}} -->
      <div>
        <!-- <v-text-field label="R$" v-model="value" hide-details="auto"></v-text-field>
        <v-text-field label="R$" v-model="doubleValue" hide-details="auto"></v-text-field> -->
        <v-text-field label="R$" v-model="value" hide-details="auto"> {{ coin.low*value }}</v-text-field>
        <v-text-field label="R$" v-model="value" hide-details="auto"> {{ coin.low*value }}</v-text-field>
      <!-- {{ coin }} -->
      {{ coin.code }}
      {{ coin.codein }}
      {{ coin.name }}
      {{ coin.create_date }}
      {{ coin.low }}
      </div>
      <!-- <ExchangeToUSD :dataUSD="getUSD(api.code.low)"/> -->
    </li>
  </ul>
  <!-- <ExchangeToUSD :dataUSD="getUSD()"/>
  <ExchangeToBRL :dataUSD="getUSD()"/>
  <ExchangeToEUR :dataUSD="getUSD()"/>
  <ExchangeTo :dataUSD="getUSD()"/> -->
</div>
</template>

<script>
import axios from 'axios'
import ExchangeToUSD from './ExchangeToUSD.vue'

export default {
  components: {
    ExchangeToUSD
  },
  data () {
    return {
      apiData: null,
      value: 5
    }
  },
  async mounted () {
    await axios.get('https://economia.awesomeapi.com.br/json/all').then(response => (this.apiData = response.data))
  },
  // methods: {
  //   getValue() {
  //     return s.substring(0,4)
  //   }
  // },
  // computed: {
  //   getVal() {
  //     return value*2
  //   }
  computed: {
    doubleValue: {
        get(){
            //this function will determine what is displayed in the input
            return this.value*2;
        },
        set(newVal){
            //this function will run whenever the input changes
            this.value = value//newVal/2;
        }
    }
  }
  // filters: {
  //   currencydecimal (value) {
  //     return value.toFixed(2)
  //   }
  // }
}
</script>

<style>

</style>
