<template>
  <nav class="cabinet__nav">
    <div class="container">
        <div class="row">

            <router-link to="/" class="nav-logo">
                <img src="" alt="" class="nav-logo-img">
            </router-link>

            <div class="cabinet__nav-list">
                <span class="user-status">
                    {{ store.statusName }}
                </span>

                <span class="user-balance">
                    <i class="far fa-wallet"></i> ${{ store.balance }}
                </span>

                <select name="" id="" class="user-lang-list">
                    <option value="" v-for="(option, idx) in store.userLanguages" :key="idx"
                    :selected="option.selected">
                        {{ option.name }}
                    </option>
                </select>

                <div class="user-options">
                    <button class="user-options-btn"><i class="far fa-user user-icon"></i> <i class="fas fa-caret-down down-icon"></i></button>

                    <div class="user-options-list" v-show="false">
                        <router-link class="user-options-item" v-for="(item, idx) in store.userOptionsList" :key="idx" :to="`/cabinet/${item.url}`" v-html="item.text">
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  </nav>
</template>

<script>
import navLogo from "@/assets/icons/logo.svg";
import { userStore } from "@/stores/userStore.js";

export default {
    name: 'Cabinet Nav',
    data() {
        return {
            store: userStore()
        }
    },
    mounted() {
        document.querySelector('.nav-logo-img').src = navLogo;
    }
}

</script>

<style lang="scss" scoped>

.cabinet__nav {
    width: 100%;
    padding: 15px 0;

    .container {
        max-width: 1470px !important;
    }

    .row {
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .nav-logo {
        max-width: 150px;
        width: 100%;
        display: block;

        img {
            width: 100%;
            display: block;
        }
    }

    &-list {
        max-width: 350px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        .user-status {
            color: var(--main-cyan);
            border-radius: 7px;
            padding: 7px 12px;
            font-size: 14px;
            border: solid 1px var(--main-cyan);
            user-select: none;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .user-balance {
            color: var(--main-white);
            display: flex;
            column-gap: 10px;
            align-items: center;
            font-size: 15px;

            i {
                font-size: 17px;
            }
        }

        .user-lang-list {
            max-width: max-content;
            width: 100%;
            background: transparent;
            outline: none;
            border: 0;
            text-transform: uppercase;
            color: var(--main-white);
            font-size: 15px;
            cursor: pointer;

            option {
                color: var(--main-white);
                background: rgba(23, 35, 51, 1);
                margin-top: 10px;
                appearance: none;
            }
        }

        .user-options {
            max-width: max-content;
            width: 100%;

            &-btn {
                border: 0;
                background: transparent;
                font-size: 20px;
                color: var(--main-white);
                display: flex;
                column-gap: 10px;
                align-items: center;

                .down-icon {
                    font-size: 15px;
                }
            }

            &-list {
                max-width: max-content;
                width: 100%;
                position: absolute;
                top: 140%;
                right: 0;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                background: rgba(23, 35, 51, 0.7);
                box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.4);
                backdrop-filter: blur(15px);
                border-radius: 10px;
                padding: 15px;

                .user-options-item {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    column-gap: 10px;
                    font-size: 15px;
                    color: var(--main-white);
                    transition: .5s;

                    &:hover {
                        color: var(--main-cyan);
                    }

                    i {
                        font-size: 18px;
                    }
                }
            }
        }
    }

    
}

</style>