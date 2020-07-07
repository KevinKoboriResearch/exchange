<template>
  <div>
    <v-card tile flat class="pa-2">
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <!-- <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 8 : 0" tile color="#7bdf4f"> -->
                <v-text-field persistent-hint :hint="cotacao" label="Cotação" solo dense disabled class="black--text"></v-text-field>
              <!-- </v-card>
          </v-hover> -->
              <v-select v-model="cotacao" :items="cotacaoList" item-text="name" item-value="code" solo dense tile></v-select>
        </v-col>
      </v-row>
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <!-- <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1"> -->
              <v-text-field persistent-hint :hint="coinType1" v-model="labelReal" :label="getCoinTypeListlabel(coinType1)" solo dense clearable></v-text-field>
            <!-- </v-card>
          </v-hover> -->
          <!-- <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1"> -->
            <v-select hide-details v-model="coinType1" :items="coinTypeList" item-text="name" item-value="code" solo dense></v-select>
          <!-- </v-card> -->
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
          <!-- <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="#7bdf4f"> -->
              <v-text-field persistent-hint :hint="coinType2" v-model="labelMoeda" :label="getCoinTypeListlabel(coinType2)" solo dense clearable></v-text-field>
            <!-- </v-card>
          </v-hover> -->
         <v-select v-model="coinType2" :items="coinTypeList" item-text="name" item-value="code" solo dense></v-select>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      varReal: 0,
      varMoeda: 0,
      city: '',
      apiData: {},
      moeda: null,
      quotation: false,
      real: null,
      coinType1: 'BRL',
      coinType2: 'USD',
      snackbar: false,   
      timeout: 20000,
      province: "",
      cotacao: "high",
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
        {code: 'GBP', currency: "teste", name: 'Libra Esterlina'},
        {code: 'ARS', currency: "$", name: 'Peso Argentino'},
        {code: 'BTC', currency: "teste", name: 'Bitcoin'},
        {code: 'LTC', currency: "teste", name: 'Litecoin'},
        {code: 'JPY', currency: "¥", name: 'Iene Japonês'},
        {code: 'CHF', currency: "Fr", name: 'Franco Suíço'},
        {code: 'AUD', currency: "teste", name: 'Dólar Australiano'},
        {code: 'CNY', currency: "teste", name: 'Yuan Chinês'},
        {code: 'ILS', currency: "₪", name: 'Novo Shekel Israelense'},
        {code: 'ETH', currency: "teste", name: 'Ethereum'},
        {code: 'XRP', currency: "teste", name: 'Ripple'},
      ],
    }
  },
  async mounted () {
    await axios.get('https://economia.awesomeapi.com.br/json/all').then(response => (this.apiData = response.data))
  },
  methods: {
    div(val, val2) {
      return this.decimal(val / val2)
    },
    mult(val, val2) {
      return this.decimal(val * val2)
    },
    decimal(val) {
      // var regex = /^[.,]+$/;
      if(this.coinType1 != this.coinType2) {
        val = val.toFixed(2)
      }
      return val.toString().replace(".", ",")
    },
    getCoinTypeListlabel(val) {
      if(val == 'BRL') {
        return 'R$'
      } else {
        return 'MOEDA'
      }
      // function getCountryByCode(val) {
      //   return coinTypeList.filter(
      //       function(coinTypeList){ return code == val }
      //   );
      // }
      // var found = getCountryByCode('DZ');

      // var result = coinTypeList.filter(function (val) {
      //   return val.coinTypeList.code === "BRL";
      // })[0].coinTypeList.name;
      // return result
    }
  },
  computed: {
    labelReal: {
      get() {
        if(this.moeda == null || this.moeda == 0)
          return
        else
        // var x = 0
            if(this.coinType1 == this.coinType2) {
              this.varReal = this.moeda
              console.log(this.varReal + " 1") //ok
            }
            else if(this.coinType1 == 'BRL') {
                this.varReal = this.apiData[this.coinType2][this.cotacao] * this.moeda
                console.log(this.varReal + " 2") //ok
            } 
            
            



            else if(this.coinType2 == 'BRL') {
                this.varReal = this.moeda / this.apiData[this.coinType1][this.cotacao]
                // this.varMoeda = this.moeda / this.apiData[this.coinType1][this.cotacao]
                console.log(this.varReal + " 3")
            } 
            

            
            
            
            else {
              this.varReal = (this.moeda * this.apiData[this.coinType1][this.cotacao]) / this.apiData[this.coinType2][this.cotacao] //ok
              // this.varMoeda = this.moeda
              console.log(this.varReal + " 4") //ok
            }
          // }
          return this.decimal(this.varReal)
      },
      set(val) {
        if(val != null) {
          this.real = val.toString().replace(",", ".")
          console.log(" 12")
        } else {
          this.real = null
          console.log(" 13")
        }
      }
    },
    labelMoeda: {
      get() {
         if(this.real == null || this.real == 0)
          return
        else
        // var x = 0
            if(this.coinType1 == this.coinType2) {
              this.varMoeda = this.real
              console.log(this.varMoeda + " 5") //ok
            }
            else if(this.coinType1 == 'BRL') {
                this.varMoeda = this.real / this.apiData[this.coinType2][this.cotacao]
                console.log(this.varMoeda + " 6") //ok
            } 





            else if(this.coinType2 == 'BRL') {
              this.varMoeda = this.apiData[this.coinType1][this.cotacao] * this.real
              // this.varReal = this.apiData[this.coinType1][this.cotacao] * this.real
              console.log(this.varMoeda + " 7")
            } 
            




            
            else { 
              this.varMoeda = (this.real * this.apiData[this.coinType2][this.cotacao]) / this.apiData[this.coinType1][this.cotacao]
              // this.varReal = this.real
              console.log(this.varMoeda + " 8")
            }
          return this.decimal(this.varMoeda)
      },
      set(val) {
        if(val != null) {
          this.moeda = val.toString().replace(",", ".")
          console.log(" 14")
        } else {
          this.moeda = null
          console.log(" 15")
        }
      }
    }
  }
}
</script>

<style>

</style>