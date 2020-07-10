<template>
  <div>
    <p> {{ valor | dinheiro}} </p>
<!-- <div class="flex-grow-1 flex-shrink-0 pa-1"> -->
  <!-- <v-card tile flat class="pa-2" color="pink"> -->
    <!-- <v-card tile flat class="pa-2" color="#263238"> -->
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <div @click="unique = true">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
                <v-text-field persistent-hint :hint="coinType1" v-model="labelReal" :label="getCoinTypeListlabel(coinType1)" solo loading color="amber darken-1" clearable>
                </v-text-field>
              </v-card>
            </v-hover>
            <v-card>
              <v-select hide-details v-model="coinType1" :items="coinTypeList" item-text="name" item-value="code" solo loading color="amber darken-1"></v-select>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
          <div @click="unique = false">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 8 : 0" tile color="#7bdf4f">
                <v-text-field persistent-hint :hint="coinType2" v-model="labelMoeda" :label="getCoinTypeListlabel(coinType2)" solo loading  color="#7bdf4f" clearable></v-text-field>
              </v-card>
            </v-hover>
            <v-card>
              <v-select hide-details v-model="coinType2" :items="coinTypeList" item-text="name" item-value="code" solo loading color="#7bdf4f"></v-select>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <!-- <v-spacer/> -->
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
    <!-- </v-card> -->
  <!-- </v-card> -->
  <!-- </div> -->
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      valor: 100,
      apiData: {},
      real: null,
      moeda: null,
      varReal: 0,
      varMoeda: 0,
      coinType1: 'BRL',
      coinType2: 'USD',
      quotation: false,
      cotacao: "low",
      unique: null,
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
    decimal(val) {
      if(this.coinType1 != this.coinType2 && this.coinType1 != 'BTC' && this.coinType1 != 'LTC' && this.coinType1 != 'ETH' && this.coinType2 != 'BTC' && this.coinType2 != 'LTC' && this.coinType2 != 'ETH') {
        val = val.toFixed(2)
      }
      return val.toString().replace(".", ",")
    },
    getCoinTypeListlabel(val) {
      return this.coinTypeList.find(x => x.code === val).currency
    },
    dinheiroReal(valor) {
	    return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
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
        if(this.unique == false)
          // return this.dinheiroReal(this.varReal)   
          return this.decimal(this.varReal)   
        else
          // return this.varReal = this.dinheiroReal(this.real = this.varReal)
          return this.varReal = this.decimal(this.real = this.varReal)
      },
      set(val) {
        if(val != null)
          this.real = val.toString().replace(",", ".")
        else
          this.real = null
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
        if(this.unique == true)
          // return this.dinheiroReal(this.varMoeda) 
          return this.decimal(this.varMoeda)         
        else
          // return this.varMoeda = this.dinheiroReal(this.moeda = this.varMoeda)
          return this.varMoeda = this.decimal(this.moeda = this.varMoeda)
      },
      set(val) {
        if(val != null)
          this.moeda = val.toString().replace(",", ".")
        else
          this.moeda = null
      }
    }
  }
}
</script>