import { defineStore } from "pinia";

export const userStore = defineStore('User Store',{
    state: () => ({
        balance: 7563,
        statusName: 'трейдер',
        userLanguages: [
            {
                name: 'ru',
                selected: true             
            },
            {
                name: 'en',
                selected: false
            }
        ],
        userOptionsList: [
            {
                text: '<i class="fal fa-sliders-h"></i> Управление балансом',
                url: ''
            },
            {
                text: '<i class="far fa-cog"></i> Настройки',
                url: ''
            },
            {
                text: '<i class="far fa-sign-out"></i> Выйти',
                url: ''
            }
        ]
    }) 
})