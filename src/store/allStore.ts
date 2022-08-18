import { defineStore } from 'pinia'
export const allStore = defineStore('all', {
    state: () => {
        return {
            allMsg: "i am allMsg",
        }
    },
    getters: {},
    actions: {}
})