<template>
  <div>
    <!-- <p> {{ apiData | json}}</p> -->
    <v-card tile flat class="pa-2">
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
            <div @click="quotation = !quotation">
              <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
                <v-text-field persistent-hint :hint="quotation ? 'Mínimo' : 'Máximo'" :label="quotation ? 'Máximo' : 'Mínimo'" solo disabled class="black--text"></v-text-field>
              </v-card>
              <!-- <v-select
                v-model="coinType2"
                :items="coinTypeList"
                solo
              ></v-select> -->
            </div>
          </v-hover>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
              <v-text-field persistent-hint :hint="coinType1" label="R$" v-model="labelReal" solo clearable></v-text-field>
            </v-card>
          </v-hover>
          <v-select
            v-model="coinType1"
            :items="coinTypeList"
            item-text="name"
            item-value="code"
            solo
          ></v-select>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
              <v-text-field persistent-hint :hint="coinType2" label="Moeda" v-model="labelMoeda" solo clearable></v-text-field>
            </v-card>
          </v-hover>
          <!-- <v-select
            v-model="province"
            :items="provinces"
            item-text="Cities.name"
            item-value='JSON.stringify(Cities)'
            solo
            persistent-hint :hint="province"
          ></v-select> -->
          <!-- <v-select
            v-model="province"
            :items="test1"
            item-text="text.name"
            solo
            persistent-hint :hint="province"
          ></v-select> -->
         <v-select
            v-model="coinType2"
            :items="coinTypeList"
            item-text="name"
            item-value="code"
            solo
          ></v-select>
            <!-- :key="index" -->
          <!-- <option :value="myOptionValue">My Option Label</option> -->
          <!-- <v-select v-model="province">                   
          <option v-for="(p, index) in provinces" :key="index" >{{ p.Province }}</option> -->
          <!-- selected: {{province}}, -->
          <!-- </v-select>  -->
          <!-- <template :value="p" v-for="(p) in provinces">   -->
          <!-- </template> -->
            <!-- <select v-model="city">
              <option v-for="(c, index) in Province.Cities" :key="index">{{ c.name }}</option>
            </select> -->
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

      coinTypeList: 
      // {
      //   "USD": {
      //         "name": "Fooland"
      //       },
      //   value: {
      //         "name": "Fooland"
      //       },
      //   disabled: false,
      //   divider: false,
      //   header: "",
      // },
      [
        {code: 'BRL', name: 'Real'},
        {code: 'USD', name: 'Dólar Comercial'},
        {code: 'USDT', name: 'Dólar Turismo'},
        {code: 'CAD', name: 'Dólar Canadense'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'},
        {code: 'ARS', name: 'Peso Argentino'},
        {code: 'BTC', name: 'Bitcoin'},
        {code: 'LTC', name: 'Litecoin'},
        {code: 'JPY', name: 'Iene Japonês'},
        {code: 'CHF', name: 'Franco Suíço'},
        {code: 'AUD', name: 'Dólar Australiano'},
        {code: 'CNY', name: 'Yuan Chinês'},
        {code: 'ILS', name: 'Novo Shekel Israelense'},
        {code: 'ETH', name: 'Ethereum'},
        {code: 'XRP', name: 'Ripple'},
        // 'USDT',
        // 'CAD',
        // 'EUR',
        // 'GBP',
        // 'ARS',
        // 'BTC',
        // 'LTC',
        // 'JPY',
        // 'CHF',
        // 'AUD',
        // 'CNY',
        // 'ILS',
        // 'ETH',
        // 'XRP',
      ],
      test1: {
        text: {
              "name": "Fooland",
              "id": "1"
            },
        value: {
              "name": "Fooland"
            },
        disabled: false,
        divider: false,
        header: "",
      },
      // provinces: [
      //   {
      //     "Province": "Foo",
      //     "Cities": [
      //       {
      //         "name": "Fooland"
      //       },
      //       {
      //         "name": "Fooville"
      //       }
      //     ]
      //   },
      //   {"Province": "Bar",
      //     "Cities": [
      //       {
      //         "name": "Barland"
      //       },
      //       {
      //         "name": "Barville"
      //       },
      //       {
      //         "name": "Barak"
      //       }
      //     ]
      //   } 
      // ],
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
      var regex = /^[.,]+$/;
      if(val.search(regex) == 1) {
        var val = val.toFixed(2)
      }
      return val.toString().replace(".", ",")
    }
  },
  computed: {
    labelReal: {
      get() {
        if(this.moeda == null)
          return
        else
        var x = 0
          if(this.quotation == true) {
            if(this.coinType1 == 'BRL') {
              if(this.coinType1 == this.coinType2) {
                x = this.moeda
              } else {
                x = this.apiData[this.coinType2]["low"] * this.moeda
              }
            } else {
              x = (this.moeda * this.apiData[this.coinType1]["low"]) / this.apiData[this.coinType2]["low"]
            }
          } else {
            if(this.coinType1 == 'BRL') {
              if(this.coinType1 == this.coinType2) {
                x = this.moeda
              } else {
                var x = this.apiData[this.coinType2]["high"] * this.moeda
              }
            } else {
              var x = (this.moeda * this.apiData[this.coinType1]["high"]) / this.apiData[this.coinType2]["high"]
            }
          }
          return this.decimal(x)
      },
      set(val) {
        // var regex = /^[0-9.,]+$/;
        if(val != null) {
          this.real = val.toString().replace(",", ".")
        } else {
          this.real = null
        }
      }
    },
    labelMoeda: {
      get() {
         if(this.real == null)
          return
        else
        var x = 0
          if(this.quotation == true) {
            if(this.coinType1 == 'BRL') 
              if(this.coinType1 == this.coinType2) {
                x = this.real
              } else {
                x = this.real / this.apiData[this.coinType2]["low"]
              }
            else 
              x = (this.real * this.apiData[this.coinType1]["low"]) / this.apiData[this.coinType2]["low"]
          } else {
            if(this.coinType1 == 'BRL') 
              if(this.coinType1 == this.coinType2) {
                x = this.real
              } else {
                x = this.apiData[this.coinType2]["low"] * this.real
              }
             else 
              var x = (this.real * this.apiData[this.coinType1]["high"]) / this.apiData[this.coinType2]["high"]
            
          }
          return this.decimal(x)
      },
      set(val) {
        // var regex = /^[0-9.,]+$/;
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