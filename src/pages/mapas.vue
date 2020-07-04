<template>
  <v-card>
    <v-card-text>
      <v-btn block color="info" dark @click="snackbar = !snackbar" > Show Snackbar </v-btn>
    </v-card-text>
    <v-snackbar v-model="snackbar" color="info" top="top">
      {{ coinType }}
      <v-select
        v-model="coinType"
        :items="coinTypeList"
        :label="coinType"
        solo
      ></v-select>
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        coinType: 'USD',
        snackbar: false,   
        coinTypeList: [
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
  }
  </script>