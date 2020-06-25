<template>
  <!-- <div>
  </div> -->

  <div class="text--primary">

    <!-- <v-container>
    <v-row justify="center">
      <v-col
        v-for="n in 50"
        :key="n"
        cols="auto"
      >
        <v-card
          :elevation="n - 1"
          height="100"
          width="100"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            v-text="n - 1"
          ></v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
   <!-- <v-textarea v-model="item.title" auto-grow label="Title">kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori </v-textarea>
    <v-textarea v-model="item.title" auto-grow label="Title">kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori kevin yuji kobori </v-textarea> -->


    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 4 : 1"
          class="table pa-3"
        >Dólar
          <!-- <v-text-field label="Main input" :rules="dolar" hide-details="auto"></v-text-field> -->
          <!-- <v-textarea v-model="item.title" auto-grow label="Title"></v-textarea> -->
          <v-text-field label="US$" v-model="dataUSD" hide-details="auto">US$</v-text-field>
        </v-card>
      </template>
    </v-hover>
    <!-- <div class="my-6"></div> -->
    <v-hover>
      <template v-slot="{ hover }">
        <div
          :class="`elevation-${hover ? 4 : 1}`"
          class="inline-block pa-3"
        >
          Real<v-text-field label="R$" v-model="dataUSD" hide-details="auto"></v-text-field>
        </div>
      </template>
    </v-hover>
  </div>
</template>

<script>
  export default {
    props: {
      dataUSD: String
    },
    data () {
      return {
        moeda: {
          dolar: "??",
          real: this.dolar + "hey"
        }
        // usd: this.info.data.usd.low
      }
    }
  }
</script>

<style>

</style>
