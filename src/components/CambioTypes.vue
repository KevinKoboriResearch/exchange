<template>
<!-- <div>
  {{ info }}
</div> -->

<div>
  <!-- {{ data | subStr }} -->
  <!-- {{JSON.stringify(data)}} -->
  {{ data }}
  <!-- {{normalizedSize}} -->
  <!-- {{ normalizedSize }} -->
</div>





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
</template>

<script>
// import axios from 'axios'

export default {
  props: {
    data: String
    // exemplo: JSON.stringify(this.data)
  },
  data: function() {
  	return {
    	text: ' This is sample string to show trim method. '
    }
  },
  // filters: {
  // 	subStr: function(string) {
  //   	return string.substring(0,4) + '...';
  //   }
  // },
  computed: {
    dolar() {
      var haha = this.data.substring(0,4)
      return haha
    }
  }
  // },
  // computed: {
  //   normalizedSize() {
  //     // str = response.data.USD.low
  //   // res = this.data.substr(0, 4)

  //   return JSON.stringify(this.data)//JSON.stringify(this.data)
  // }}
  // data () {
  //   return {
  //     data: null
  //     // usd: this.info.data.usd.low
  //   }
  // },
  // mounted () {
  //   axios
  //     .get('https://economia.awesomeapi.com.br/json/all')
  //     // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     // .then(response => (this.info = response.data.bpi))
  //     .then(response => ( JSON.parse(this.data = response.data.USD.low)))
  // //       var str = response.data.USD.low
  // // var res = str.substr(0, 4)
  // // return { dados: response.data, dolar: res }
}
</script>

<style>

</style>
