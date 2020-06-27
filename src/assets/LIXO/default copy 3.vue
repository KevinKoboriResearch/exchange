<template>
    <v-app>
      <v-content>
      <v-system-bar :color="picker"></v-system-bar>
      <v-app-bar :color="defaultColor" fixed light>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        &nbsp;&nbsp;&nbsp;
        <v-switch
          color="white"
          v-model="$vuetify.theme.dark"
          hide-details
          inset
        ></v-switch>
        <v-spacer></v-spacer>
        <v-toolbar-title>MEUCAMBIO.COM</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->
        <v-btn icon @click="oi = !oi">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <!-- <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
        <v-app-bar-nav-icon @click.stop="rightDrawer = !rightDrawer"></v-app-bar-nav-icon>
      </v-app-bar>
<!-- ////////////////////////////////////////// -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        :color="defaultColor"
      >
        <!-- bottom -->
        <v-list
          nav
          dense
          light
        >
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
              <img :src="getImgUrl(item.icon)">
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
            <v-color-picker v-model="picker" class="ma-2" hide-inputs></v-color-picker>
            </v-content>
          </v-list-item> -->
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
            <v-row>
              <DrawerTextArea/>
            </v-row>
          </v-col>
       </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
              <div style="margin-top: 40px;">
                <nuxt/>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    </v-content>
 












<!-- 

        <v-navigation-drawer
      expand-on-hover
        absolute
        prominent
        >
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title >Want a site like this?</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          
          
          <v-list
            nav
            dense
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>alarm-on</v-icon>
              </v-list-item-icon>
              <v-list-item-title>business</v-list-item-title>
            </v-list-item>
          </v-list> 




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
<nuxt/> -->







        <!-- <v-content> -->
      <!-- <v-container fluid> -->
        <!-- <v-row>
          <v-col cols="20">
            <v-row justify="space-around"> -->
              <!-- <div v-show="!oi" class="floating-text-area"> -->
                <!-- <v-expand-transition>
                  <div v-show="!oi" class="mx-auto">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Solo textarea"
                      auto-grow
                    ></v-textarea>
                  </div>
                </v-expand-transition> -->
              <!-- </div>
              <div style="margin-top: 1%;"> -->
                <!-- <nuxt/> -->
              <!-- </div> -->
            <!-- </v-row>
          </v-col>
        </v-row> -->
      <!-- </v-container> -->
    <!-- </v-content> -->


      <!-- </v-card> -->



<!--   
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


      <v-layout align-center justify-space-around>
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








-->
    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ kevin + " " + new Date().getFullYear() }}</span>
    </v-footer> -->

    <v-bottom-navigation
    v-model="bottomNav"
    dark
    shift
    fixed
  >
    <v-btn>
      <span>Video</span>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <span>Music</span>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>Image</span>
      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
import Equalizer from '../assets/images/equalizer.svg'
import Calculator from '~/components/Calculator.vue'
import CalculatorApple from '~/components/calculator/CalculatorApple.vue'
import CalculatorYellow from '~/components/calculator/CalculatorYellow.vue'
import DrawerTextArea from '~/components/calculator/DrawerTextArea.vue'
import DisplayTextArea from '~/components/DisplayTextArea.vue'
// import Theme from '~/components/Theme.vue'

export default {
  components: {
    Calculator,
    CalculatorApple,
    CalculatorYellow,
    DrawerTextArea,
    // Theme
  },
  data () {
    return {
      // picker: "#ff4bf3",
      defaultColor: "#bbff4b",
      // purple accent-4
      tabs: null,
      oi: true,
      kevin: "MEUCAMBIO.COM",
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
      title: 'MEUCAMBIO.COM',
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

.space {
  margin-top: 50px;
}
</style>