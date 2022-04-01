import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
        }
    }
})
