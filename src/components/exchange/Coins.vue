<template>
  <div>
    <!-- <p> {{ apiData | json}} </p> -->
  <!-- <v-card tile flat class="pa-2" color="white"> -->
    <!-- <v-card tile flat class="pa-2"> -->
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
            <div @click="quotation = !quotation">
              <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
                <v-text-field persistent-hint :hint="quotation ? 'Mínimo' : 'Máximo'" :label="quotation ? 'Máximo' : 'Mínimo'" solo disabled class="black--text"></v-text-field>
              </v-card>
            </div>
          </v-hover>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
              <v-text-field persistent-hint hint="Real" label="R$" v-model="labelReal" solo clearable></v-text-field>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 8 : 0" tile color="amber darken-1">
            <v-text-field persistent-hint hint="Valor da Moeda" label="Moeda" v-model="labelMoeda" solo clearable></v-text-field>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    <!-- </v-card> -->
    <div v-for="coin in apiData" :key="coin">
      <v-row class="pa-2">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <div v-if="quotation == true">
            <v-card tile color="#7bdf4f">
              <v-text-field persistent-hint :hint="quotation ? 'Mínimo' : 'Máximo' " :label="(coin.name)" tile solo disabled class="black--text"></v-text-field>
            </v-card>
          </div>
          <div v-else>
            <v-card tile color="#7bdf4f">
              <v-text-field persistent-hint :hint="quotation ? 'Mínimo' : 'Máximo' " :label="(coin.name)" tile solo disabled class="black--text"></v-text-field>
            </v-card>
          </div>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <div v-if="quotation == true">
            <v-card tile color="#7bdf4f">
              <v-text-field :persistent-hint="real!=null" :hint="'R$ '+ real" :label="(coin.code) + ' ' + (div(real, coin.low))" tile solo disabled class="black--text"></v-text-field>
            </v-card>
          </div>
          <div v-else>
            <v-card tile color="#7bdf4f">
              <v-text-field :persistent-hint="real!=null" :hint="'R$ '+ real" :label="(coin.code) + ' ' + (div(real, coin.high))" tile solo disabled class="black--text"></v-text-field>
            </v-card>
          </div>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <div v-if="quotation == true">
            <v-card tile color="#7bdf4f">
              <v-text-field :persistent-hint="moeda!=null" :hint="coin.code + ' ' + moeda" :label="'R$ ' + (mult(moeda, coin.low))" 
              tile solo disabled class="black--text"></v-text-field>
            </v-card>
          </div>
          <div v-else>
            <v-card tile color="#7bdf4f">
              <v-text-field :persistent-hint="moeda!=null" :hint="coin.code + ' ' + moeda" :label="'R$ ' + (mult(moeda, coin.high))" 
              tile solo disabled class="black--text"></v-text-field>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  <!-- </v-card> -->
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
      val = val.toString().replace(".", ",")
      return val
    }
  },
  computed: {
    labelReal: {
      get() {
        if(this.real == null)
          return
        else
          var x = "R$ " + this.real
          return x
      },
      set(val) {
        var regex = /\d/g;
        if(val != null && regex.test(val) != false)
          this.real = val.match(/\d+/)[0]
        else
          this.real = null
      }
    },
    labelMoeda: {
      get() {
        if(this.moeda == null)
          return
        else
          var x = "M " + this.moeda
          return x
      },
      set(val) {
        var regex = /\d/g;
        if(val != null && regex.test(val) != false)
          this.moeda = val.match(/\d+/)[0]
        else
          this.moeda = null
      }
    }
  },
  filters: {
    currencydecimal(val) {
      val = val.toFixed(2)
      val = val.toString().replace(".", ",")
      return val
    },
  }
}
</script>