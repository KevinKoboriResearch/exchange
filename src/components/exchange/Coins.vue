<template>
<div>
  <!-- <p> {{ apiData | json}} </p> -->
  <v-card class="pa-2">
          <v-row class="pa-2" style="flex-wrap: nowrap;">
            <v-col 
              class="flex-grow-1 flex-shrink-0 pa-1"
            >
              <v-text-field label="Moeda" clearable solo-inverted disabled></v-text-field>
            </v-col>
            <v-col 
              class="flex-grow-1 flex-shrink-0 pa-1"
            >
              <v-text-field label="Real" v-model="labelReal" solo-inverted clearable></v-text-field>
            </v-col>
            <v-col
              class="flex-grow-1 flex-shrink-0 pa-1"
            >
                <v-text-field label="Valor da Moeda" v-model="labelMoeda" solo-inverted clearable></v-text-field>
            </v-col>
          </v-row>
    <!-- <v-list> -->
      <v-list
        v-for="coin in apiData" :key="coin"
        v-model="coin.active"
        no-action
      >
        <!-- <template v-slot:activator> -->

            <v-card
                class="mx-auto"
                color="deep-purple darken-1"
                tile
              >
          <v-row class="pa-3" style="flex-wrap: nowrap;">
          <v-col class="flex-grow-1 flex-shrink-0 pa-0">
            <v-card
                class="mx-auto"
                color="#64B5F"
                tile
                flat
              >
            <v-text>&nbsp;{{ coin.name }}</v-text>
            </v-card>
            <!-- </v-card> -->
            <!-- <v-text> {{ coin.name }} </v-text> -->
          </v-col>
          <!-- <v-spacer/> -->
          <v-col class="flex-grow-1 flex-shrink-0 pa-0">
          <!-- <v-list-item-content class="flex-grow-1 flex-shrink-0 pa-1"> -->
            <!-- <div v-if="real"> -->
              <!-- <v-text-field :label="(coin.code) + ' ' + (real / coin.low)"> {{ coin.code }} {{real / coin.low | currencydecimal}}</v-text-field> -->
            <!-- </div> -->
            <!-- <div v-else> -->
              <!-- <v-card
                class="mx-auto"
                color="#26a6da"
              > -->
              <v-card
                class="mx-auto"
                color="#42A5F"
                tile
                flat
              >
               <v-text>&nbsp;&nbsp;{{coin.code}} {{real / coin.low | currencydecimal}}</v-text>
              </v-card>
               <!-- <v-text-field :label="(coin.code) + ' ' + (real / coin.low)" solo-inverted disabled></v-text-field> -->
              <!-- </v-card> -->
            <!-- </div> -->
            <!-- <v-text-field :label="'R$ ' + (moeda * coin.low)" v-model="real" clearable solo-inverted disabled></v-text-field> -->
          <!-- </v-list-item-content> -->
          </v-col>
          <!-- <v-spacer/> -->
          <!-- <v-list-item-content class="flex-grow-1 flex-shrink-0 pa-1"> -->
            <v-col class="flex-grow-1 flex-shrink-0 pa-0">
            <!-- <div v-if="moeda"> -->
              <!-- <v-text-area>  {{ coin.code }} {{real / coin.low | currencydecimal}}</v-text-area> -->
              <!-- <v-list-item-title> R$ {{ moeda * coin.low | currencydecimal}}</v-list-item-title> -->
            <!-- </div> -->
            <!-- <div v-else> -->
              <v-card
              color="#1E88E"
              tile
              flat
              >
               <v-text>&nbsp;&nbsp;R$ {{moeda * coin.low | currencydecimal}}</v-text>
              </v-card>
            <!-- </div> -->
            <!-- <v-text-field :label="(coin.code) + ' ' + (real / coin.low)" v-model="moeda" clearable solo-inverted disabled>R$ +  </v-text-field> -->
          <!-- </v-list-item-content> -->
            </v-col>
          </v-row>
            </v-card>
        <!-- </template> -->
        <!-- <v-list>
          <v-row class="pa-2" style="flex-wrap: nowrap;">
            <v-col 
              class="flex-grow-0.5 flex-shrink-0 pa-1"
            >
              <v-list-item-content>
                  <v-text-field :value="coin.high" solo-inverted disabled></v-text-field>
              </v-list-item-content>
            </v-col>
            <v-col
              class="flex-grow-1 flex-shrink-0 pa-1"
            >
              <v-list-item-content>
                <v-text-field :label="(coin.code) + ' ' + (real / coin.low)" solo-inverted disabled>R$ +  </v-text-field>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list> -->
      </v-list>
      <!-- </v-list-group> -->
    <!-- </v-list> -->
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
        moedas: null,
        real: null,
      }
    },
    async mounted () {
      await axios.get('https://economia.awesomeapi.com.br/json/all').then(response => (this.apiData = response.data))
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
          if(val != null)
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
          if(val != null)
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

<style scoped>
.leftspace{
  margin-left: 300px;
}
</style>