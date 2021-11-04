import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
    state() {
        return {
            counter: 10
        }
    },
    mutations: { 
        addToCounter(state, payload) {
            state.counter = state.counter + payload;
        },
        subtractFromCounter(state, payload) {
            state.counter = state.counter - payload
        }
    }

})

const app = createApp(App);

app.use(store)

app.mount('#app')
