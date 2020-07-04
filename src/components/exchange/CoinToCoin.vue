<template>
  <div>
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
            solo
          ></v-select>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
              <v-text-field persistent-hint :hint="coinType2" label="Moeda" v-model="labelMoeda" solo clearable></v-text-field>
            </v-card>
          </v-hover>
          <v-select
            v-model="coinType2"
            :items="coinTypeList"
            solo
          ></v-select>
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
      apiData: {},
      moeda: null,
      quotation: false,
      real: null,
      coinType1: 'BRL',
      coinType2: 'USD',
      snackbar: false,   
      timeout: 20000,
      coinTypeList: [
        'BRL',
        'USD',
        'USDT',
        'CAD',
        'EUR',
        'GBP',
        'ARS',
        'BTC',
        'LTC',
        'JPY',
        'CHF',
        'AUD',
        'CNY',
        'ILS',
        'ETH',
        'XRP',
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
      val = val.toFixed(2)
      return val.toString().replace(".", ",")
    }
  },
  computed: {
    labelReal: {
      get() {
        if(this.moeda == null)
          return
        else
          if(this.quotation == true) {
            if(this.coinType1 == 'BRL') {
              var x = this.apiData[this.coinType2]["low"] * this.moeda
            } else {
              var x = (this.moeda * this.apiData[this.coinType1]["low"]) / this.apiData[this.coinType2]["low"]
            }
          } else {
            if(this.coinType1 == 'BRL') {
              var x = this.apiData[this.coinType2]["high"] * this.moeda
            } else {
              var x = (this.moeda * this.apiData[this.coinType1]["high"]) / this.apiData[this.coinType2]["high"]
            }
          }
          return this.decimal(x)
      },
      set(val) {
        var regex = /^[0-9.,]+$/;
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
          if(this.quotation == true) {
            if(this.coinType1 == 'BRL') 
              var x = this.real / this.apiData[this.coinType2]["low"]
            else 
              var x = (this.real * this.apiData[this.coinType1]["low"]) / this.apiData[this.coinType2]["low"]
            
          } else {
            if(this.coinType1 == 'BRL') 
              var x = this.real / this.apiData[this.coinType2]["high"]
             else 
              var x = (this.real * this.apiData[this.coinType1]["high"]) / this.apiData[this.coinType2]["high"]
            
          }
          return this.decimal(x)
      },
      set(val) {
        var regex = /^[0-9.,]+$/;
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