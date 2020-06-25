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
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" align="center"/>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <img :src="getImgUrl('calculator-variant')">
        <!-- <v-icon>mdi-menu</v-icon> -->
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
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
          <CalculatorApple/>
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

export default {
  components: {
    Calculator,
    CalculatorApple
  },
  data () {
    return {
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
