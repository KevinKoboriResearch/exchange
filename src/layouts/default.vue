<template>
    <v-app>
      <v-content>
      <v-system-bar :color="picker"></v-system-bar>
      <v-app-bar :color="siteBarColor" fixed 
      >
      <!-- light -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        &nbsp;&nbsp;&nbsp;
        <v-switch
          color="white"
          v-model="$vuetify.theme.dark"
          hide-details
          inset
        ></v-switch>
        <v-spacer></v-spacer>
        <v-toolbar-title>{{ SiteTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="globalTextArea = !globalTextArea">
          <v-icon>mdi-book</v-icon>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="rightDrawer = !rightDrawer"></v-app-bar-nav-icon>
      </v-app-bar>
<!-- ////////////////////////////////////////// -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        :color="siteBarColor"
      >
        <v-list
          nav
          dense
        >
          <!-- light -->
          <v-list-item-group
            v-model="group"
            light
          >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <!-- <img :src="getImgUrl(item.icon)"> -->
            <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>
        
          <v-list
          nav
        >
          <v-list-item-group
            v-model="group"
          >
          <!-- <v-list-item>
            <v-content>
              <v-color-picker v-model="defaultColor" class="ma-2" hide-inputs></v-color-picker>
            </v-content>
          </v-list-item> -->
          </v-list-item-group>
        </v-list>

      </v-navigation-drawer>

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
            <!-- <v-row>
              <DrawerTextArea/>
            </v-row> -->
          </v-col>
       </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="20">
            <v-row justify="space-around">
              <div v-show="!globalTextArea" class="floating-text-area">
                <v-expand-transition>
                  <div v-show="!globalTextArea" class="mx-auto">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Solo textarea"
                      auto-grow
                    ></v-textarea>
                  </div>
                </v-expand-transition>
              </div>
              <div style="margin-top: 40px;">
                <nuxt/>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    </v-content>
 
    <v-bottom-navigation
    v-model="bottomNav"
    dark
    shift
    fixed
    >
    <v-btn icon>
      <span>Moedas</span>
      <v-icon>mdi-checkbox-multiple-blank-circle</v-icon>
    </v-btn>

    <v-btn>
      <span>Gráficos</span>
      <v-icon class="mdi mdi-align-vertical-bottom" ></v-icon>
    </v-btn>

    <v-btn>
      <span>Câmbio</span>
      <v-icon>mdi-account-cash</v-icon>
    </v-btn>

    <v-btn>
      <span>Países</span>
      <v-icon>mdi-cash-usd-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
import CalculatorYellow from '~/components/calculator/CalculatorYellow.vue'

export default {
  components: {
    CalculatorYellow
  },
  data () {
    return {
      siteBarColor: "#7bff4f",
      SiteTitle: "MEUCAMBIO.COM",
      tabs: null,
      drawer: false,
      globalTextArea: true,
      right: true,
      rightDrawer: false,
      canada: 'calculator-variant',
      items: [
        {
          icon: 'mdi-cash-usd-outline',
          title: 'Página Inicial',
          to: '/'
        },
        {
          icon: 'mdi-checkbox-multiple-blank-circle',
          title: 'Moedas',
          to: '/moedas'
        },
        {
          icon: 'mdi-align-vertical-bottom',
          title: 'Gráficos',
          to: '/graficos'
        }
      ],
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
  margin-top: 40px;
  top: 88px;
  position: sticky;
}
</style>