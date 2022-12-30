import { defineStore } from "pinia";

export const useSignStatus = defineStore('Sign Status', {
    state: () => ({
        signed: false,
        userEmail: 'user@gmail.com',
        userPassword: '123456'
    })
})