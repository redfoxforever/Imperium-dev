<template>
    <nav class="nav" v-if="$route.name !== 'cabinet'">
        <div class="container">
            <div class="row">

                <router-link to="/" class="logo">
                    <img src="" alt="" class="logo-img">
                </router-link>

                <ul class="nav__list">
                    <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                        <router-link :to="link.url" class="nav__list-link">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>

                <SignButton/>

            </div>
        </div>
    </nav>
</template>

<script>
import { useSignStatus } from "@/stores/signStatusStore.js";
import { useNavStore } from "@/stores/navStore";
import imgUrl from '@/assets/icons/logo.svg'
import SignButton from './SignButton.vue';

export default {
    name: 'Nav',
    components: {
        SignButton
    },
    data() {
        return {
            store: useNavStore(),
            statusStore: useSignStatus()
        }
    },
    mounted() {
        document.querySelector('.logo-img').src = imgUrl;
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;

    .row {
        align-items: center;
        padding: 30px 0;
        gap: 25px;
    }

    .logo {
        max-width: 150px;
        width: 100%;
        display: block;

        img {
            width: 100%;
            display: block;
        }
    }

    &__list {
        max-width: max-content;
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 20px;
        margin-left: auto;

        &-link {
            font-size: 14px;
            transition: .4s;

            &:hover {
                color: var(--main-cyan);
            }
        }
    }
}

</style>