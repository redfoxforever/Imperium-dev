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
        ],
        sideBar: {
            navLinks: [
                {
                    text: '<span><i class="fal fa-briefcase"></i></span> Кабинет',
                    url: '/cabinet/home'
                },
                {
                    text: '<span><i class="fal fa-users"></i></span> Трейдеры',
                    url: '/cabinet/traders'
                },
                {
                    text: '<span><i class="fal fa-chart-pie-alt"></i></span> Статистика',
                    url: '/cabinet/statistics'
                },
                {
                    text: '<span><i class="fal fa-file-alt"></i></span> Инструкции',
                    url: '/cabinet/instruction'
                },
                {
                    text: '<span><i class="fal fa-life-ring"></i></span> Помощь',
                    url: '/cabinet/support'
                },
            ]
        },
        cabinetHome: {
            dashboard: {
                username: 'Иван Иванов',
                traderInfos: [
                    {
                        name: 'Подписчиков',
                        icon: '<i class="far fa-user-friends"></i>',
                        num: 1200
                    },
                    {
                        name: 'Общая прибыль',
                        icon: '<i class="fal fa-money-bill-alt"></i>',
                        num: 2500
                    },
                ]
            },
            channels: {
                title: 'Ваши каналы',
                spotChannel: {
                    title: 'spot',
                    channelName: 'Первый бизнес канал',
                    cards: [
                        {
                            name: 'Биржа',
                            text: '<i class="fad fa-coins yellow-cl"></i> Binance'
                        },
                        {
                            name: 'Уровень риска',
                            text: '<span class="green-cl">Низкий</span>'
                        },
                        {
                            name: 'Доходность канала',
                            text: '<i class="far fa-wave-sine cyan-cl"></i> <span class="green-cl">+35%</span>'
                        },
                        {
                            name: 'Место в рейтиге',
                            text: '<i class="far fa-chart-bar cyan-cl"></i> <span class="cyan-cl">124</span>/585'
                        },
                        {
                            name: 'Подписчиков',
                            text: '<i class="far fa-user-friends cyan-cl"></i> 800'
                        },
                        {
                            name: 'Стоимость подписки',
                            text: '<span class="cyan-cl">$ 214</span>'
                        }
                    ]
                },
                futuresChannel: {
                    title: 'futures',
                    createText: 'Создать канал'
                }
            }
        }
    }) 
})