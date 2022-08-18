import { defineStore } from 'pinia'
import  actions from './actions'
export const apiStore = defineStore('api',{
    state: () => {
        return {
            msg: "apiStore",
        }
    },
    getters: {},
    actions,
})