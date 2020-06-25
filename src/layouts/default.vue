<template>
    <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <img :src="getImgUrl(item.icon)">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-icon>fas fa-edit</v-icon> -->
      <v-layout align-center justify-space-around>
    <v-icon>fas fa-lock</v-icon>

    <v-icon>fas fa-search</v-icon>

    <v-icon>fas fa-list</v-icon>

    <v-icon>fas fa-edit</v-icon>

    <v-icon>fas fa-tachometer-alt</v-icon>

    <v-icon>fas fa-circle-notch fa-spin</v-icon>
  </v-layout>

      <v-toolbar-title v-text="title" align="center"/>
      <v-spacer/>
      <v-btn icon @click="oi = !oi">
        <v-icon>fas fa-edit</v-icon>
        {{ oi ? 'Show' : 'Hide' }}
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <img :src="getImgUrl('calculator-variant')">
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="20">
            <v-row justify="space-around">
              <div v-show="!oi" class="floating-text-area">
                <v-expand-transition>
                  <div v-show="!oi" class="mx-auto">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Solo textarea"
                      auto-grow
                    ></v-textarea>
                  </div>
                </v-expand-transition>
              </div>
              <div style="margin-top: 1%;">
                <nuxt/>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer</v-list-item-title>
        </v-list-item>
        <v-list-item class='.justify-center'>
          <v-col>
            <v-row>
              <CalculatorYellow/>
            </v-row>
            <v-list two-line></v-list>
            <v-row>
              <DrawerTextArea/>
            </v-row>
          </v-col>
       </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ kevin + " " + new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Equalizer from '../assets/images/equalizer.svg'
import Calculator from '~/components/Calculator.vue'
import CalculatorApple from '~/components/calculator/CalculatorApple.vue'
import CalculatorYellow from '~/components/calculator/CalculatorYellow.vue'
import DrawerTextArea from '~/components/calculator/DrawerTextArea.vue'
import DisplayTextArea from '~/components/DisplayTextArea.vue'

export default {
  components: {
    Calculator,
    CalculatorApple,
    CalculatorYellow,
    DrawerTextArea
  },
  data () {
    return {
      oi: true,
      kevin: "Kevin Yuji Kobori",
      collapseOnScroll: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'calculator-variant',
          title: 'Página Inicial',
          to: '/'
        },
        {
          icon: 'currency-usd-circle-outline',
          title: 'Moedas',
          to: '/moedas'
        },
        {
          icon: 'equalizer',
          title: 'Gráficos',
          to: '/graficos'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Câmbio',
    }
  },
  methods: {
    getImgUrl(val) {
      var images = require.context('../assets/images', false, /\.svg$/)
      return images('./' + val + ".svg")
    }
  }
}
</script>

<style>
.floating-calculator {
  background-color: none;
  width: 225px;
  height: 100%;
  margin-top: 1%;
  top: 8%;
  position: sticky;
}

.floating-text-area {
  background-color: none;
  width: 300px;
  height: 100%;
  margin-top: 1%;
  top: 12%;
  position: sticky;
}
</style>