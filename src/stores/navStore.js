import { defineStore } from "pinia";

export const useNavStore = defineStore("Nav Store", {
    state: () => ({
        links: [
            {
                name: 'Пассивный заработок',
                url: '/'
            },
            {
                name: 'Публичный трейдинг',
                url: '/'
            },
            {
                name: 'Доходы и безопасность',
                url: '/'
            },
            {
                name: 'Обратная связь',
                url: '/'
            }
        ],
        btnText: 'Вход'
    })
})