<template>
  <div id="calculator">
    <v-card class="d-flex justify-center" flat tile>
      <v-btn style="min-width: 225px; max-width: 225px;" fab tile elevation="0" @click="clearAll">Clear</v-btn>
    </v-card>
    <v-alert class="font-weight-light" type="error" tile v-if="alertE!=''" v-model="alertE">{{alertE}}</v-alert>
    <div class="calculator-logs">
      <span v-for="log in logs" :key="log">{{ log }}&nbsp;&nbsp;</span>
    </div>
    <input v-model="value" type="string" class="calculator-input" @keyup.enter="getResult">
    <div v-for="rows in listRows" :key="rows">
      <v-card class="d-flex justify-center" flat tile>
        <v-btn v-for="r in rows" :key="r" fab tile elevation="0" @click="getFunction(r)">{{r}}</v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listRows: [['AC','del','%','/'], ['7','8','9','*'], ['4','5','6','-'], ['1','2','3','+'], ['0','.','+/-','=']],
      value: '',
      logs: [],
      alertE: '',
      selected: 0
    }
  },
  methods: {
    getFunction(expr) {
      switch (expr) {
        case 'AC':
          this.clear()
          break;
        case 'del':
          this.del()
          break;
        case '%': case '/': case '7': case '8': case '9': case '*': case '4': case '5': case '6': case '-': case '1': case '2': case '3': case '+': case '0': case '0': case '.':
          this.addExpresion(expr)
          break;
        case '+/-':
          this.sign()
          break;
        case '=':
          this.getResult()
          break;
      }
    },
    sign() {
      this.value = this.value.toString()
      this.value = this.value.charAt(0) === '-' ? this.value.slice(1) : `-${this.value}`;
    },
    addExpresion(e) {
      if (this.value == '' && this.value != 0 && isNaN(e)) 
        this.value = '';
      else if (this.value == 0 && e == 0)
        this.value = 0  
      else if (this.value == 0 && e != '.' && !isNaN(e) && this.value!="0.")
        this.value = e;
      else
        this.value += e;
    },
    getResult() {
      if (this.value != '' && isNaN(this.value)) {
        let log = this.value;
        try {
          eval(log); 
        } catch (e) {
          if (e instanceof SyntaxError) {
            this.alertE = e;
            setTimeout(() => this.alertE = '', 3000);
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
    clearAll() {
      this.value = '';
      this.logs = []
      let textToCopy = this.$refs.textToCopy.$el.querySelector('input')
      textToCopy.select()
      document.execCommand("copy");
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
	 background-color: #1d1d1d;
    /* background-color: #252525; */
	 font-weight: bold;
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
}
 #calculator .calculator-logs span {
	 color: #ffffff;
	 opacity: 0.75;
	 display: block;
	 font-size: 0.8rem;
	 text-align: right;
	 margin-top: 0.4rem;
	 line-height: 1;
	 font-weight: bold;
}
  #calculator .calculator-input {
	 color: #ffffff;
	 border: none;
	 padding: 0.3rem;
	 font-size: 2.3rem;
	 background: none;
   max-width: 12ch;
	 text-align: right;
	 font-weight: bold;
}
 #calculator .calculator-input:focus, #calculator .calculator-input:active {
	 outline: none;
}

.v-text-field__slot[data-v-40cefe54] input {
   text-align: right;
}
</style>