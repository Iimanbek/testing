import { defineStore } from 'pinia'

export const useValueStore = defineStore('value',{
    state: () => ({
        personInfo:[{
            name:'',
            email:''
        }],
        dataQst: null,
    }),
    actions:{
        async getQST(){
            const URL = 'http://localhost:3000/questions'
            const res = await fetch(URL)
            this.dataQst = await res.json()
        },
    }
})
