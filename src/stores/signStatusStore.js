import { defineStore } from "pinia";

export const useSignStatus = defineStore('Sign Status', {
    state: () => ({
        signed: true,
        userEmail: 'user@gmail.com',
        userPassword: '123456'
    })
})