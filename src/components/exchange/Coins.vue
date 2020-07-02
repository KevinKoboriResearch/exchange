<template>
  <div>
    <!-- <p> {{ apiData | json}} </p> -->
    <v-card class="pa-2">
      <v-row class="pa-2" style="flex-wrap: nowrap;">
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 4 : 0">
              <div @click="cotation = !cotation" >
                <v-text-field persistent-hint :hint="cotation ? 'high' : 'low'" :label="cotation ? 'low' : 'high'" clearable solo-inverted 
                disabled></v-text-field>
              </div>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 4 : 0">
              <v-text-field persistent-hint hint="Real" label="R$" v-model="labelReal" solo-inverted clearable></v-text-field>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="flex-grow-1 flex-shrink-0 pa-1" >
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 4 : 0">
            <v-text-field persistent-hint hint="Valor da Moeda" label="Moeda" v-model="labelMoeda" solo-inverted clearable></v-text-field>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
      <v-list v-for="coin in apiData" :key="coin" v-model="coin.active" no-action>
        <v-row class="pa-3" style="flex-wrap: nowrap;">
          <v-col class="flex-grow-1 flex-shrink-0 pa-1">
            <v-card tile flat>
              <v-hover v-slot:default="{ hover }">
                <div v-if="cotation == true">
                  <v-card :elevation="hover ? 4 : 1" tile flat @click="cotation = !cotation">
                    <v-text-field persistent-hint :hint="cotation ? 'low' : 'high'" :label="(coin.name)" tile loading dense solo disabled color="grey darken-3"></v-text-field>
                  </v-card>
                </div>
                <div v-else>
                  <v-card :elevation="hover ? 4 : 1" tile flat @click="cotation = !cotation">
                    <v-text-field persistent-hint :hint="cotation ? 'low' : 'high'" :label="(coin.name)" tile loading dense solo disabled color="grey darken-3"></v-text-field>
                  </v-card>
                </div>
              </v-hover>
            </v-card>
          </v-col>
          <v-col class="flex-grow-1 flex-shrink-0 pa-1">
            <div v-if="cotation == true">
              <v-card tile flat color="#7bdf4f">
                <v-text-field :persistent-hint="real!=null" :hint="'R$ '+ real" :label="(coin.code) + ' ' + (div(real, coin.low))" tile loading dense solo disabled color="#7bdf4f" class="black--text"></v-text-field>
              </v-card>
            </div>
            <div v-else>
              <v-card tile flat color="#7bdf4f">
                <v-text-field :persistent-hint="real!=null" :hint="'R$ '+ real" :label="(coin.code) + ' ' + (div(real, coin.high))" tile loading dense solo disabled color="#7bdf4f" class="black--text"></v-text-field>
              </v-card>
            </div>
          </v-col>
          <v-col class="flex-grow-1 flex-shrink-0 pa-1" dense>
            <div v-if="cotation == true">
              <v-card tile flat color="#7bdf4f">
                <v-text-field :persistent-hint="moeda!=null" :hint="coin.code + ' ' + moeda" :label="'R$ ' + (mult(moeda, coin.low))" 
                tile dense loading solo disabled color="#7bdf4f" class="black--text"></v-text-field>
              </v-card>
            </div>
            <div v-else>
              <v-card tile flat color="#7bdf4f">
                <v-text-field :persistent-hint="moeda!=null" :hint="coin.code + ' ' + moeda" :label="'R$ ' + (mult(moeda, coin.high))" 
                tile dense loading solo disabled color="#7bdf4f" class="black--text"></v-text-field>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      apiData: null,
      moeda: null,
      cotation: false,
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
    decimal(value) {
      value = value.toFixed(2)
      value = value.toString().replace(".", ",")
      return value
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
          var x = "Moeda " + this.moeda
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
    currencydecimal(value) {
      value = value.toFixed(2)
      value = value.toString().replace(".", ",")
      return value
    },
  }
}
</script>