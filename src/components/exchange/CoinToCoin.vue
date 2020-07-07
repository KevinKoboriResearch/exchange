<template>
  <div>
    <!-- <p> {{ this.apiData | json }} </p> -->
    <v-card tile flat class="pa-2">
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <div @click="unique = true">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
              <v-text-field persistent-hint :hint="coinType1" v-model="labelReal" :label="getCoinTypeListlabel(coinType1)" solo clearable>
<!-- :clearable="clearReal" -->
              </v-text-field>
            </v-card>
          </v-hover>
          <v-card tile>
            <v-select hide-details v-model="coinType1" :items="coinTypeList" item-text="name" item-value="code" solo></v-select>
          </v-card>
          </div>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
          <div @click="unique = false">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
              <v-text-field persistent-hint :hint="coinType2" v-model="labelMoeda" :label="getCoinTypeListlabel(coinType2)" solo clearable></v-text-field>
            </v-card>
          </v-hover>
          <v-card tile>
         <v-select hide-details v-model="coinType2" :items="coinTypeList" item-text="name" item-value="code" solo></v-select>
          </v-card>
          </div>
        </v-col>
      </v-row>
      <!-- <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 8 : 0" tile color="#7bdf4f">
                <v-text-field persistent-hint :hint="cotacao" label="Cotação" solo dense disabled class="black--text"></v-text-field>
              </v-card>
          </v-hover>
          <v-card tile>
              <v-select hide-details v-model="cotacao" :items="cotacaoList" item-text="name" item-value="code" solo dense tile></v-select>
          </v-card>
        </v-col>
      </v-row> -->
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      unique: null,
      apiData: {},
      real: null,
      moeda: null,
      varReal: 0,
      varMoeda: 0,
      coinType1: 'BRL',
      coinType2: 'USD',
      quotation: false,
      cotacao: "low",
      cotacaoList: [
        {code: 'high', name: 'Máxima'},
        {code: 'low', name: 'Mínima'},
      ],
      coinTypeList: [
        {code: 'BRL', currency: "R$", name: 'Real'},
        {code: 'USD', currency: "US$", name: 'Dólar Comercial'},
        {code: 'USDT', currency: "US$", name: 'Dólar Turismo'},
        {code: 'CAD', currency: "C$", name: 'Dólar Canadense'},
        {code: 'EUR', currency: "€", name: 'Euro'},
        {code: 'GBP', currency: "Moeda", name: 'Libra Esterlina'},
        {code: 'ARS', currency: "$", name: 'Peso Argentino'},
        {code: 'BTC', currency: "Moeda", name: 'Bitcoin'},
        {code: 'LTC', currency: "Moeda", name: 'Litecoin'},
        {code: 'JPY', currency: "¥", name: 'Iene Japonês'},
        {code: 'CHF', currency: "Fr", name: 'Franco Suíço'},
        {code: 'AUD', currency: "Moeda", name: 'Dólar Australiano'},
        {code: 'CNY', currency: "Moeda", name: 'Yuan Chinês'},
        {code: 'ILS', currency: "₪", name: 'Novo Shekel Israelense'},
        {code: 'ETH', currency: "Moeda", name: 'Ethereum'},
        {code: 'XRP', currency: "Moeda", name: 'Ripple'},
      ],
    }
  },
  async mounted () {
    await axios.get('https://economia.awesomeapi.com.br/json/all').then(response => (this.apiData = response.data))
  },
  methods: {
    // div(val, val2) {
    //   return this.decimal(val / val2)
    // },
    // mult(val, val2) {
    //   return this.decimal(val * val2)
    // },
    decimal(val) {
      if(this.coinType1 != this.coinType2 && this.coinType1 != 'BTC' && this.coinType1 != 'LTC' && this.coinType1 != 'ETH' 
      && this.coinType2 != 'BTC' && this.coinType2 != 'LTC' && this.coinType2 != 'ETH') {
        val = val.toFixed(2)
      }
      return val.toString().replace(".", ",")
    },
    getCoinTypeListlabel(val) {
      return this.coinTypeList.find(x => x.code === val).currency
    }
  },
  computed: {
    labelReal: {
      get() {
        if(this.moeda == null || this.moeda == 0)
          return
        else
          if(this.coinType1 == this.coinType2)
            this.varReal = this.moeda
          else if(this.coinType1 == 'BRL')
            this.varReal = this.apiData[this.coinType2][this.cotacao] * this.moeda
          else if(this.coinType2 == 'BRL')
            this.varReal = this.moeda / this.apiData[this.coinType1][this.cotacao]
          else
            this.varReal = (this.moeda * this.apiData[this.coinType1][this.cotacao]) / this.apiData[this.coinType2][this.cotacao]
        if(this.unique == false) {
          return this.decimal(this.varReal)   
        } else {
          // this.real = this.varReal
          // this.varReal = this.decimal(this.varReal)
          // return this.varReal
          return this.varReal = this.decimal(this.real = this.varReal)
        }
      },
      set(val) {
        if(val != null) {
          this.real = val.toString().replace(",", ".")
        } else {
          this.real = null
        }
      }
    },
    labelMoeda: {
      get() {
        if(this.real == null || this.real == 0)
          return
        else
          if(this.coinType1 == this.coinType2)
            this.varMoeda = this.real
          else if(this.coinType1 == 'BRL')
            this.varMoeda = this.real / this.apiData[this.coinType2][this.cotacao]
          else if(this.coinType2 == 'BRL')
            this.varMoeda = this.apiData[this.coinType1][this.cotacao] * this.real
          else 
            this.varMoeda = (this.real * this.apiData[this.coinType2][this.cotacao]) / this.apiData[this.coinType1][this.cotacao]
        if(this.unique == true) {
          return this.decimal(this.varMoeda)         
        } else {
          // this.moeda = this.varMoeda
          // this.varMoeda = this.decimal(this.varMoeda)
          // return this.varMoeda
          return this.varMoeda = this.decimal(this.moeda = this.varMoeda)
        }
      },
      set(val) {
        if(val != null) {
          this.moeda = val.toString().replace(",", ".")
        } else {
          this.moeda = null
        }
      }
    }
  }
}
</script>

<style>

</style>