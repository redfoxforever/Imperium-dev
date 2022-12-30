<template>

<Nav/>

<main class="main">

    <section class="sign__section">
        <div class="container">
            <div class="row">

                <h2 class="sign__title">{{ store.signTitle }}</h2>
                
                <div class="signing-btns">
                    <button class="sign-in-open-btn" v-for="(btn, idx) in store.signingBtns" :key="idx" @click="store.changeSignBoard(++idx)" :class="{'active': idx == 0 ? store.signIn.visible : store.signUp.visible }">
                        {{ btn.text }}
                    </button>
                </div>
            
            <Transition name="fade-board">
                <div class="sign-board sign-in-board" v-if="store.signIn.visible">
                    <form action="" class="sign-in__form" @submit.prevent>
                        <input type="email" class="sign-in-email" 
                        v-model="store.signIn.email.value" maxlength="70" 
                        :placeholder="store.signIn.email.name" required>

                        <input type="password" class="sign-in-password"
                        v-model="store.signIn.password.value"
                        :placeholder="store.signIn.password.name" required>
                    </form>

                    <div class="sign-in-btns">
                        <button class="sign-btn blue-btn" @click="signAction('sign-in')">{{ store.signIn.signBtn }}</button>

                        <button class="forgot-password" @click="store.changeSignBoard(2)">{{ store.signIn.forgotText }}</button>
                    </div>
                </div>
            </Transition>

            <Transition name="fade-board">
                <div class="sign-board sign-up-board" v-if="store.signUp.visible">
                    <form action="" class="sign-up__form" @submit.prevent>
                        <input type="email" class="sign-up-email"
                        v-model="store.signUp.email.value"
                        :placeholder="store.signUp.email.name" required>

                        <input type="password" class="sign-up-password-1"
                        v-model="store.signUp.password.value"
                        :placeholder="store.signUp.password.name" required>

                        <input type="password" class="sign-up-password-2"
                        v-model="store.signUp.password2.value"
                        :placeholder="store.signUp.password2.name" required>
                    </form>

                    <div class="sign-up-btns">
                        <button class="sign-btn blue-btn" @click="signAction('sign-up')">{{ store.signUp.signBtn }}</button>
                    </div>
                </div>
            </Transition>

            </div>
        </div>
    </section>

    <span class="all-icon violet-icon"></span>
    <span class="all-icon blue-icon"></span>

    <img src="" alt="" class="sign-bg-img" v-for="(num, idx) in 2" :key="idx" 
    :class="`img-${++idx}`">
</main>

    <Transition name="openingModal">
        <div class="wrong-sign-modal" v-show="store.wrongSignModals.show">
            <transition-group name="fade-error" tag="div">
                <p class="all-wrong-text" 
                v-for="(sign, idx) in store.wrongSignModals.errorTexts" 
                :key="idx" v-show="sign.show">
                    {{ sign.text }}
                </p>
            </transition-group>
        </div>
    </Transition>

<Footer/>

</template>

<script>
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';
import { useSignStore } from "@/stores/signStore.js";
import { useSignStatus } from "@/stores/signStatusStore.js";
import img1Url from "@/assets/icons/signIn/hand.svg";
import img2Url from "@/assets/icons/signIn/globus.svg";

export default {
    name: 'Sign In',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            store: useSignStore(),
            statusStore: useSignStatus()
        }
    },
    created() {
        this.statusStore.signed ? this.$router.push('/cabinet') : ''
    },
    mounted() {
        document.querySelector('.sign-bg-img.img-1').src = img1Url
        document.querySelector('.sign-bg-img.img-2').src = img2Url
    },
    methods: {
        signAction(param) {
            if (param == 'sign-in') {
                if (this.store.signIn.email.value == this.statusStore.userEmail && this.store.signIn.password.value == this.statusStore.userPassword) {
                    this.$router.push('/cabinet');
                    this.statusStore.signed = true;
                    this.store.signIn.email.value = '';
                    this.store.signIn.password.value = ''; 
                } else {
                    this.store.wrongSignModals.show = true;
                    this.store.wrongSignModals.errorTexts[1].show = false;
                    this.store.wrongSignModals.errorTexts[0].show = true;

                    this.store.signIn.email.value = '';
                    this.store.signIn.password.value = '';

                    document.querySelectorAll('.sign-btn').forEach(btn => btn.setAttribute('disabled', true))

                    setTimeout(() => {
                        this.store.wrongSignModals.show = false;
                        this.store.wrongSignModals.errorTexts[0].show = false;

                        document.querySelectorAll('.sign-btn').forEach(btn => btn.removeAttribute('disabled'))
                    }, 2000);
                }
            } else if (param == 'sign-up') {
                if (this.store.signUp.email.value !== '' && this.store.signUp.password.value !== '' && this.store.signUp.password2.value !== '' && this.store.signUp.password.value == this.store.signUp.password2.value) {
                    this.$router.push('/cabinet');
                    this.statusStore.signed = true;
                    this.store.signUp.email.value = '';
                    this.store.signUp.password.value = '';
                    this.store.signUp.password2.value = '';
                } else {
                    this.store.wrongSignModals.show = true;
                    this.store.wrongSignModals.errorTexts[0].show = false;
                    this.store.wrongSignModals.errorTexts[1].show = true;

                    this.store.signUp.email.value = '';
                    this.store.signUp.password.value = '';
                    this.store.signUp.password2.value = '';

                    document.querySelectorAll('.sign-btn').forEach(btn => btn.setAttribute('disabled', true))

                    setTimeout(() => {
                        this.store.wrongSignModals.show = false;
                        this.store.wrongSignModals.errorTexts[1].show = false;

                        document.querySelectorAll('.sign-btn').forEach(btn => btn.removeAttribute('disabled'))
                    }, 2000);
                }
            }
        }
    }
}

</script>

<style lang="scss" scoped>

input {
    border: 0;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(1px);
    padding: 15px 20px;
    border-radius: 15px;
    outline: none;
    color: var(--main-white);

    &::placeholder {
        color: var(--main-gray);
    }
}

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.sign__section {
    max-width: 800px;
    width: 100%;
    min-height: 537px;
    max-height: 537px;
    height: 100%;
    overflow: hidden;
    padding: 90px 0;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    position: relative;
    transition: .5s;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
    }

    .sign__title {
        color: var(--main-white);
    }

    .signing-btns {
        max-width: 570px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 40px;

        button {
            width: 100%;
            background: transparent;
            border: 0;
            color: var(--main-gray);
            font-size: 20px;
            font-weight: 600;
            transition: .4s;
            padding: 10px;

            &.active {
                color: var(--main-cyan);
                text-decoration: underline;
            }
        }
    }

    .sign-board {
        max-width: 570px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: center;
        overflow: hidden;

        .sign-in__form,
        .sign-up__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }

        .sign-in-btns {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;

            .forgot-password {
                border: 0;
                background: transparent;
                color: var(--main-white);
                font-size: 14px;

                &:hover {
                    text-decoration: underline;
                }
            }

            .sign-btn {
                max-width: 280px;
                width: 100%;
                display: grid;
                place-items: center;
                padding-top: 12px;
                padding-bottom: 12px;
            }
        }

        .sign-up-btns {
            max-width: 750px;
            width: 100%;

            .sign-btn {
                max-width: 100%;
                width: 100%;
                display: grid;
                place-items: center;
                padding-top: 12px;
                padding-bottom: 12px;
            }
        }
    }
}

.sign-bg-img {
    position: absolute;
    top: 0;
    display: block;
    z-index: -1;
    pointer-events: none;

    &.img-1 {
        max-width: 600px;
        width: 100%;
        left: 0;
    }

    &.img-2 {
        max-width: 1100px;
        width: 100%;
        right: 0;
    }
}

.wrong-sign-modal {
    max-width: 300px;
    width: 100%;    
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(216, 4, 250, 0.04);
    box-shadow: inset 0px 1px 2px rgb(239 232 232 / 60%);
    backdrop-filter: blur(4px);
    border-radius: 20px;
    padding: 30px 20px;
    z-index: 9099;
    display: grid;
    place-items: center;
    text-align: center;

    .all-wrong-text {
        font-size: 15px;

        &::first-letter {
            text-transform: uppercase;
        }
    }
}

.fade-board-enter-active,
.fade-board-leave-active {
    transition: .7s;
}

.fade-board-enter-from,
.fade-board-leave-to {
    transform: translateY(25%);
    opacity: 0;
    order: 3;
}

.all-icon {
    max-width: 150px;
    width: 100%;
    min-height: 150px;
    max-height: 150px;
    height: 100%;
    border-radius: 50%;
    display: block;
    position: absolute;
    z-index: -1;

    &.violet-icon {
        background: linear-gradient(4.19deg, rgba(115, 17, 198, 0.8) -0.98%, rgba(132, 105, 209, 0.8) 89%);
        top: 9%;
        left: 28%;
    }

    &.blue-icon {
        background: var(--gradent-blue);
        bottom: 17%;
        right: 25.5%;    
    }
}

.openingModal-enter-active,
.openingModal-leave-active {
    transition: .7s;
}

.openingModal-enter-from, 
.openingModal-leave-to {
    transform: translate(-50%, -120%);
    opacity: 0;
}

.fade-error-enter-active,
.fade-error-leave-active {
    transition: .7s;
}

.fade-error-enter-from, 
.fade-error-leave-to {
    opacity: 0;
}


</style>