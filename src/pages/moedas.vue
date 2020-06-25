<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
    <Theme/>
    <Exchange/>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
          <p>
            <ScrollYTransition/>
          </p>
          <CitysList/>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import CalcularCambio from '~/components/CalcularCambio.vue'
import ScrollYTransition from '~/components/ScrollYTransition.vue'
import Theme from '~/components/Theme.vue'
import CitysList from '~/components/CitysList.vue'
import CambioTypes from '~/components/CambioTypes.vue'
import Exchange from '~/components/exchange/Exchange.vue'
// import { store } from '../store/CoinStore.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    CalcularCambio,
    ScrollYTransition,
    Theme,
    CitysList,
    CambioTypes,
    Exchange
  }
}
</script>
