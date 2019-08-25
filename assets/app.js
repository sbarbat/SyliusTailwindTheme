require('./main.scss')

import Vue from 'vue'

import CartWidget from './components/CartWidget'

new Vue({
    el: '#app',
    data() {
        return {
            cartWidgetOpened: false
        }
    },
    components: {
        CartWidget
    }
})