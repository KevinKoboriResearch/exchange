<template>
  <div id="calculator">
    <v-row no-gutters style="flex-wrap: nowrap;" popout="true">
      <v-col class="flex-shrink-1" style="min-width: 100%; max-width: 100%;"><v-btn class="pa-1" tile style="min-width: 100%; max-width: 100%;"></v-btn></v-col>
    </v-row>
    <v-alert type="error" tile v-if="alert" v-model="alertE">{{alertE}}</v-alert>
    <div class="calculator-logs">
      <span v-for="log in logs" :key="log">{{ log }}&nbsp;&nbsp;</span>
    </div>
    <input type="string" class="calculator-input" v-model="value" @keyup.enter="getResult()">
<!--  -->
    <v-card class="d-flex flex-row justify-center" color="grey lighten-2" flat tile>
      <v-btn fab tile elevation="2" @click="clear">AC</v-btn>
      <v-btn fab tile elevation="2" @click="del">del</v-btn>
      <v-btn fab tile elevation="2" @click="addExpresion('%')">%</v-btn>
      <v-btn fab tile elevation="2" @click="addExpresion('/')">/</v-btn>
    </v-card>
<!--  -->
    <v-card class="d-flex flex-row justify-center" color="grey lighten-2" flat tile>
      <v-btn v-for="r2 in row2" :key="r2" fab tile elevation="2" @click="addExpresion(r2)">{{r2}}</v-btn>
    </v-card>
<!--  -->
    <v-card class="d-flex flex-row justify-center" color="grey lighten-2" flat tile>
      <v-btn v-for="r3 in row3" :key="r3" fab tile elevation="2" @click="addExpresion(r3)">{{r3}}</v-btn>
    </v-card>
<!--  -->
    <v-card class="d-flex flex-row justify-center" color="grey lighten-2" flat tile>
      <v-btn v-for="r4 in row4" :key="r4" fab tile elevation="2" @click="addExpresion(r4)">{{r4}}</v-btn>
    </v-card>
<!--  -->
    <v-card class="d-flex flex-row justify-center" elevation="2" color="grey lighten-2" flat tile>
      <v-btn fab tile elevation="2" @click="addExpresion(0)">0</v-btn>
      <v-btn fab tile elevation="2" @click="addExpresion('.')">.</v-btn>
      <v-btn fab tile elevation="2" @click="sign">+/-</v-btn>
      <v-btn fab tile elevation="2" @click="getResult()">=</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      row1: ['AC','del','%','/'],
      row2: ['7','8','9','*'],
      row3: ['4','5','6','-'],
      row4: ['1','2','3','+'],
      row5: ['0','.','+/-','='],
      value: '',
      logs:  [],
      alert: false,
      alertE: '',
      selected: 0
    }
  },
  methods: {
    sign() {
      this.value = this.value.toString()
      this.value = this.value.charAt(0) === '-' ?
      this.value.slice(1) : `-${this.value}`;
    },
    addExpresion(e) {
      if (this.value == '' && isNaN(e)) {
        this.value = '';
      } else if (this.value == 0 && e != '.' && !isNaN(e)){
        this.value = e
      } else {
        this.value += e;
      }
    },
    getResult() {
      if (this.value != '' && isNaN(this.value)) {
        let log = this.value;
        try {
          eval(log); 
        } catch (e) {
          if (e instanceof SyntaxError) {
            this.alert = true;
            this.alertE = e;
            setTimeout(() => this.alert = false, 3000);
          }
        }
        this.value = eval(log);
        if((this.value) && this.value.toString().indexOf('.') != -1) {
          this.value = parseFloat(this.value).toFixed(2)
        }
        this.logs.push( log + `=${this.value}` );
      }
    },
    clear() {
      this.value = '';
    },
    del() {
      if(this.value.length!=0){
        if (this.value == 0 || this.value == '') {
          this.value = ''
        } else {
          this.value = this.value.toString().slice(0, -1);
        }
      } else {
        this.logs.pop()
      }
    }
  }
}
</script>

<style scoped>
*, ::after, ::before {
	 box-sizing: border-box;
}
 #calculator {
	 width: 100%;
	 margin: 0 auto;
	 display: flex;
	 padding: 0;
   max-width: 100%;
	 min-width: 100%;
	 flex-direction: column;
	 background-color: #2f2f31;
}
 #calculator .calculator-logs {
	 display: flex;
	 position: relative;
	 overflow: hidden;
	 align-items: flex-end;
	 flex-direction: column;
	 justify-content: flex-end;
}
 #calculator .calculator-logs:before {
	 top: 0;
	 left: 0;
	 right: 0;
	 content: '';
	 z-index: 5;
	 position: absolute;
	 background: linear-gradient(to bottom, #2f2f31, rgba(47, 47, 49, 0));
}
 #calculator .calculator-logs span {
	 color: #d4d4d2;
	 opacity: 0.75;
	 display: block;
	 font-size: 0.8rem;
	 text-align: right;
	 margin-top: 0.4rem;
	 line-height: 1;
	 font-weight: lighter;
}
  #calculator .calculator-input {
	 color: #d4d4d2;
	 border: none;
	 padding: 0.7rem;
	 font-size: 2.3rem;
	 background: none;
   max-width: 12ch;
	 text-align: right;
	 font-weight: lighter;
}
 #calculator .calculator-input:focus, #calculator .calculator-input:active {
	 outline: none;
}
</style>