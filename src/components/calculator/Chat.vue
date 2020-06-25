<template>
<div>
    <v-card-text style="height: 300px;" class="grey lighten-5 text-center">
    <v-btn color="primary" @click="hidden = !hidden">{{ hidden ? 'Show' : 'Hide' }}</v-btn>
    </v-card-text>
    <!-- <v-card-text style="height: 1000px; position: relative"> -->
        <div class="floating-calculator">
            <v-expand-transition>
                <v-card v-show="!hidden" class="mx-auto">
                    <CalculatorYellow/>
                </v-card>
            </v-expand-transition>
        </div>
    <!-- </v-card-text> -->
</div>
</template>

<script>
import CalculatorYellow from '~/components/calculator/CalculatorYellow.vue'

export default {
    components: {
        CalculatorYellow
    },
    data () {
        return {
            hidden: false,
        }
    }

}
</script>

<style>
/* .floating-calculator {
    background-color: none;
    width: 225px;
    height: 400px;
    margin-top: 140px;
    top: 50px;
    position: sticky;
} */
</style>