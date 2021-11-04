import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import axios from 'axios'

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
    }, 
    actions: {
        async addRandomNumber(context) {
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            console.log(data)
            context.commit("addToCounter", data.data) // data.data -> because the first 'data' is an object and the next 'data' is a value 
        }
    }

})

const app = createApp(App);

app.use(store)

app.mount('#app')
