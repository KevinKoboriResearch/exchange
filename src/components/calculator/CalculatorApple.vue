<template>
<!-- <div>
    <span v-for="log in logs" :key="log">{{ log }} &nbsp;</span>
    <input type="string" v-model="current" @keyup.enter="getResult()"> -->
  <div class="calculator">
    <div class="display">&nbsp; {{current || '0'}} &nbsp;</div>
    <div @click="clear" class="btn top-operator"><div class="center">AC</div></div>
    <div @click="sign" class="btn top-operator"><div class="center">+/-</div></div>
    <div @click="percent" class="btn top-operator"><div class="center">%</div></div>
    <div @click="divide" class="btn operator"><div class="center">÷</div></div>
    <div @click="append('7')" class="btn"><div class="center">7</div></div>
    <div @click="append('8')" class="btn"><div class="center">8</div></div>
    <div @click="append('9')" class="btn"><div class="center">9</div></div>
    <div @click="times" class="btn operator"><div class="center">x</div></div>
    <div @click="append('4')" class="btn"><div class="center">4</div></div>
    <div @click="append('5')" class="btn"><div class="center">5</div></div>
    <div @click="append('6')" class="btn"><div class="center">6</div></div>
    <div @click="minus" class="btn operator"><div class="center">-</div></div>
    <div @click="append('1')" class="btn"><div class="center">1</div></div>
    <div @click="append('2')" class="btn"><div class="center">2</div></div>
    <div @click="append('3')" class="btn"><div class="center">3</div></div>
    <div @click="add" class="btn operator"><div class="center">+</div></div>
    <div @click="append('0')" class="btn zero"><div class="center">0</div></div>
    <div @click="dot" class="btn"><div class="center">,</div></div>
    <div @click="equal" class="btn operator"><div class="center">=</div></div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
      logs:  []
    }
  },
  methods: {
    clear() {
      this.current = '';
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      // let log = this.current;
      // this.current = eval(this.current);
      // this.logs.push( log + `=${this.value}` );

      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
    //  getResult() {
    //     // var x = String(this.value)
    //     // var text = String(this.value).split(" ");
    //     // var result = text.some(function(v,i,a){
    //     //     return a.lastIndexOf(v)!=i;
    //     // })
        
    //     // if( result == true ){
    //     // if(value == null){
    //     //     let log = null
    //     //     this.value = eval(this.value);
    //     //     this.logs.push( log + `=${this.value}` );
    //     //     console.log("repetido")
    //     // } else {
    //         let log = this.current;
    //         this.current = eval(this.current);
    //         this.logs.push( log + `=${this.current}` );
    //         // this.value = eval(this.log)
    //         console.log("normal")
    //     // }
    // },
  }
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

/* .display-hidden {
  text-align: right;
  overflow: hidden;
  max-width: 7ch;
} */

.display {
  grid-column: 1 / 5;
  background-color: rgb(70, 73, 75);
  color: white;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 10ch;
  
  /* margin-right: 5%; */
}


.zero {
  grid-column: 1 / 3;
}

.btn {
  background-color: #797e81;
  border: 1px solid rgb(70, 73, 75);
  color: white;
}

.top-operator {
  background-color: rgb(92, 92, 92);
}

.operator {
  background-color: orange;
}

.center {
  /* margin: auto;
  width: 60%;
  border: none; */
  text-align: center;
}
</style>
