<template>
<!-- <div id="calculator">

  <div class="calculator-logs">
    <span v-for="log in logs" :key="log">{{ log }} &nbsp;</span>
  </div>

  <input type="string" class="calculator-input" v-model="value" @keyup.enter="getResult()">

  <div class="calculator-row">
    <div class="calculator-col">
      <button class="calculator-btn gray action" @click="clear()">C</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn gray action" @click="del()">del</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn gray action" @click="addExpresion('%')">%</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn accent action" @click="addExpresion('/')">/</button>
    </div>
  </div>
  <div class="calculator-row">
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(7)">7</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(8)">8</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(9)">9</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn accent action" @click="addExpresion('*')">*</button>
    </div>
  </div>
  <div class="calculator-row">
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(4)">4</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(5)">5</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(6)">6</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn accent action" @click="addExpresion('-')">-</button>
    </div>
  </div>
  <div class="calculator-row">
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(1)">1</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(2)">2</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn" @click="addExpresion(3)">3</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn accent action" @click="addExpresion('+')">+</button>
    </div>
  </div>
  <div class="calculator-row">
    <div class="calculator-col wide">
      <button class="calculator-btn" @click="addExpresion(0)">0</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn action" @click="addExpresion('.')">.</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn accent action" @click="getResult()">=</button>
    </div>
  </div>
</div> -->
<div id="calculator">
<!-- <v-btn block
       color="primary" 
       dark
       @click="showSnackbar">
       Show Snackbar
    </v-btn> -->

    <v-alert type="error" tile 
    v-if="alert"
    v-model="alertE"
    
    >
      {{alertE}}
    </v-alert>
    
    <div class="calculator-logs">
      <span v-for="log in logs" :key="log">{{ log }}&nbsp;&nbsp;</span>
    </div>

  <input type="string" class="calculator-input" v-model="value" @keyup.enter="getResult()">
<!--  -->
    <!-- <v-card
      class="d-flex flex-row justify-center"
      color="light-blue"
      flat
      tile
    >
      <v-textarea
        v-model="value"
        background-color="light-blue"
        filled
        auto-grow
        label="Display"
        rows="2"
        row-height="20"
        class="text-end font-weight-black"
      ></v-textarea>
    </v-card> -->
<!--  -->
    <v-card
      class="d-flex flex-row justify-center"
      color="grey lighten-2"
      flat
      tile
    >
        <v-btn class="pa-4" fab tile @click="clear()">AC</v-btn>
        <v-btn class="pa-4" fab tile @click="del()">del</v-btn>
        <v-btn class="pa-4" fab tile @click="addExpresion('%')">%</v-btn>
        <v-btn class="pa-4" fab tile @click="addExpresion('/')">/</v-btn>
    <!-- <v-template v-for="r1 in row1" :key="r1">
      <v-template v-if="r1==='AC'">
        <v-btn class="pa-4" fab tile @click="clear()">{{r1}}</v-btn>
      </v-template>
      <v-template v-else-if="r1==='del'">
        <v-btn class="pa-4" fab tile @click="del()">{{r1}}</v-btn>
      </v-template>
      <v-template else>
        <v-btn class="pa-4" fab tile @click="addExpresion(r1)">{{r1}}</v-btn>
      </v-template>
    </v-template> -->
    </v-card>
<!--  -->
    <v-card
      class="d-flex flex-row justify-center"
      color="grey lighten-2"
      flat
      tile
    >
      <v-btn v-for="r2 in row2" :key="r2" class="pa-4" fab tile @click="addExpresion(r2)">{{r2}}</v-btn>
    </v-card>
<!--  -->
    <v-card
      class="d-flex flex-row justify-center"
      color="grey lighten-2"
      flat
      tile
    >
      <v-btn v-for="r3 in row3" :key="r3" class="pa-4" fab tile @click="addExpresion(r3)">{{r3}}</v-btn>
    </v-card>
<!--  -->
    <v-card
      class="d-flex flex-row justify-center"
      color="grey lighten-2"
      flat
      tile
    >
      <v-btn v-for="r4 in row4" :key="r4" class="pa-4" fab tile @click="addExpresion(r4)">{{r4}}</v-btn>
    </v-card>
<!--  -->
  <v-row no-gutters style="flex-wrap: nowrap;">
    <v-col
      class="d-flex flex-row justify-center"
      style="min-width: 50%; max-width: 100%;"
    >
      <v-btn class="pa-7" tile style="min-width: 100%; max-width: 100%;" @click="addExpresion(0)">0</v-btn>
    </v-col>
    <v-col
      cols="1"
      style="min-width: 25%; max-width: 100%;"
      class="flex-grow-1 flex-shrink-0"
    >
      <v-btn class="pa-7" tile style="min-width: 100%; max-width: 100%;"  @click="addExpresion('.')">.</v-btn>
    </v-col>
    <v-col
      cols="5"
      style="min-width: 25%; max-width: 100%;"
      class="flex-grow-0 flex-shrink-1"
    >
      <v-btn class="pa-7" tile style="min-width: 100%; max-width: 100%;"  @click="getResult()">=</v-btn>
    </v-col>
  </v-row>


  <!-- <button class="calculator-btn" @click="addExpresion(0)">0</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn action" @click="addExpresion('.')">.</button>
    </div>
    <div class="calculator-col">
      <button class="calculator-btn accent action" @click="getResult()">=</button> -->




  <!-- <v-row no-gutters style="flex-wrap: nowrap;">
    <v-card
      class="d-flex flex-row justify-center"
      color="grey lighten-2"
      flat
      tile
    >
    <v-layout v-for="r5 in row5" :key="r5">
      <v-col v-if="r5===0"
        cols="1"
        style="min-width: 50%; max-width: 100%;"
      >
        <v-btn fab tile @click="addExpresion(r5)">
          
          {{r5}}
        
        </v-btn>
      </v-col>
      <v-col v-else
        cols="1"
        style="min-width: 25%; max-width: 100%;"
      >
        <v-btn class="pa-4" fab tile @click="addExpresion(r5)">
          
          {{r5}}
        
        </v-btn>
      </v-col>
    </v-layout>
    </v-card>
    </v-row> -->
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
          row5: ['0','.','='],
          value: '',
          logs:  [],
          alert: false,
          alertE: '',
          snackbar:false,
          timeout:6000,
      }
  },
  methods: {
    showAlert (type) {
      this.type = type
   
      this.showAlert.timer = setTimeout(() => {
          this.type = null
      }, 3000)
    },
    // showSnackbar() {
    //        this.snackbar=true;
    //        setTimeout(() => { this.$emit("yourEvent"); },this.timeout);
    //      },
    addExpresion(e) {
        if (this.value == '' && isNaN(e)) {
            this.value = '';
        } else {
          let x = this.value
          if (Number.isInteger(x)) {
            // this.value = ''; 
          }
            this.value += e;
        }
      console.log(this.value)
    },
    getResult() {
        // var x = String(this.value)
        // var text = String(this.value).split(" ");
        // var result = text.some(function(v,i,a){
        //     return a.lastIndexOf(v)!=i;
        // })
        
        // if( result == true ){
        // if(value == null){
        //     let log = null
        //     this.value = eval(this.value);
        //     this.logs.push( log + `=${this.value}` );
        //     console.log("repetido")
        // } else {
        if (this.value == '') {
        } else {
          // var text = "test".split("");
          // text.some(function(v,i,a){
          //   return a.lastIndexOf(v)!=i;
          // });  
          let log = this.value;
          console.log(this.value)

          try {
              eval(log); 
              
          } catch (e) {
              if (e instanceof SyntaxError) {
                // showAlert("error")
                // this.showAlert.timer = setTimeout(() => {
                //     this.type = null
                // }, 3000)
                this.alert = true;
                this.alertE = e;
                setTimeout(() => this.alert = false, 2000);
                // alert(e.message);
              }
          }







          // this.alert = false;
          this.value = eval(log);
          this.logs.push( log + `=${this.value}` );



// this.alert = true;

          console.log(this.value)
          console.log("normal")
        }
    },
    clear() {
      this.value = '';
    },
    del() {
      console.log(this.value)
      console.log(this.value.length!=0)
      if(this.value.length!=0){
        if (this.value == 0 || this.value == '') {
          this.value = ''
        } else {
          this.value = this.value.toString().slice(0, -1);
        }
      } else {
        this.logs.pop()
      }
      // }
      //         // this.logs!=[] && Number.isInteger(this.value)){//this.logs!=[] && this.value=='' || 
      //   this.logs.pop()
      // } else {
      //   if (this.value == 0 || this.value == '') {
      //     this.value = ''
      //   } else {
      //     this.value = this.value.slice(0, -1);
      //   }
      // }
    }
  }
}
</script>

<style scoped>
*, ::after, ::before {
	 box-sizing: border-box;
}
 /* body {
	 margin: 0;
	 height: 100vh;
	 display: flex;
	 font-size: 10px;
	 align-items: flex-end;
	 justify-content: center;
	 background-color: #2f2f31;
} */
 #calculator {
	 width: 100%;
	 margin: 0 auto;
	 display: flex;
	 padding: 0;
	 /* max-width: 320px;
	 min-width: 320px; */
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
	 /* width: 100%; */
	 border: none;
	 padding: 0.7rem;
	 /* display: block; */
	 font-size: 2.3rem;
	 background: none;
   max-width: 12ch;
	 text-align: right;
	 font-weight: lighter;
   /* overflow: hidden;
  text-overflow: "."; */
}
 #calculator .calculator-input:focus, #calculator .calculator-input:active {
	 outline: none;
}
 #calculator .calculator-row {
	 display: flex;
	 padding: 0;
	 justify-content: space-around;
}
 #calculator .calculator-row .calculator-col {
	 flex: 1;
	 box-shadow: 0 0 0 1px #2f2f31;
}
 #calculator .calculator-row .calculator-col.wide {
	 flex: 2;
}
 #calculator .calculator-btn {
	 width: 100%;
	 color: #d4d4d2;
	 border: none;
	 cursor: pointer;
	 padding: 0.8rem;
	 outline: none;
	 font-size: 1.6rem;
	 transition: all 0.3s ease-in-out;
	 font-weight: 200;
	 justify-content: center;
	 background-color: #616163;
}
 #calculator .calculator-btn.accent {
	 background-color: #f49e3f;
	 color: #fff;
}
 #calculator .calculator-btn.gray {
	 background-color: #424345;
}
 #calculator .calculator-btn:active {
	 background-color: #2f2f31;
}
 
</style>