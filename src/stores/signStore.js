import { defineStore } from "pinia";

export const useSignStore = defineStore('Sign Store', {
    state: () => ({
        signTitle: 'Кабинет',
        signIn: {
            visible: true,
            title: 'Пассивный зароботок',
            email: {
                name: 'Email',
                value: ''
            },
            password: {
                name: 'Пароль',
                value: ''
            },
            signBtn: 'Войти',
            forgotText: 'Забыли пароль?'
        },
        signUp: {
            visible: false,
            title: 'Публичный трейдинг',
            email: {
                name: 'Email',
                value: ''
            },
            password: {
                name: 'Пароль',
                value: ''
            },
            password2: {
                name: 'Повторить пароль',
                value: ''
            },
            signBtn: 'Зарегистрироваться'
        },
        signingBtns: [
            {
                text: 'Вход'
            },
            {
                text: 'Зарегистрироваться'
            }
        ],
        wrongSignModals: {
            show: false,
            errorTexts: [
                {
                    text: 'введен неправильный адрес электронной почты или пароль',
                    show: false                
                },
                {
                    text: 'два пароля не совпадают',
                    show: false                
                }
            ]
        }
    }),
    actions: {
        changeSignBoard(id) {
            if (id == 1) {
                this.signUp.visible = false;
                this.signIn.visible = true;

                this.signUp.email.value = '';
                this.signUp.password.value = '';
                this.signUp.password2.value = '';
            } else {
                this.signIn.visible = false;
                this.signUp.visible = true;

                this.signIn.email.value = '';
                this.signIn.password.value = '';
            }
        }
    }
})