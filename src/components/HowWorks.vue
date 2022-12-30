<template>
    <div class="how-works__content">
        <h3 class="how-works__title">{{ howWorks.title }}</h3>

        <span class="line-through"></span>

        <div class="how-works__cards">
            <div class="how-works__card" v-for="(card, idx) in howWorks.cards" :key="idx">

                <span class="how-works__card-icon">
                    <span class="blur-bg"></span>
                    <img src="" alt="" class="how-works__card-img" :class="`img-${++idx}`">
                </span>

                <h4 class="how-works__card-title">{{ card.title }}</h4>

                <p class="how-works__card-text">{{ card.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useHomeStore } from "@/stores/homeStore.js";
import cardIcon1 from "@/assets/icons/home/main/passiveSection/howWorks-1.svg";
import cardIcon2 from "@/assets/icons/home/main/passiveSection/howWorks-2.svg";
import cardIcon3 from "@/assets/icons/home/main/passiveSection/howWorks-3.svg";

export default {
    name: 'How Works',
    data() {
        return {
            store: useHomeStore()
        }
    },
    computed: {
        howWorks() {
            return this.store.main.passiveSection.howWorks
        }
    },
    mounted() {
        for (let i = 1; i <= 3; i++) {
            document.querySelector(`.how-works__card-img.img-${i}`).src = i == 1 ? cardIcon1 : i == 2 ? cardIcon2 : i == 3 ? cardIcon3 : ''
        }
    }
}

</script>

<style lang="scss" scoped>

.how-works__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin: 20px 0;

    .how-works__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .how-works__card {
            max-width: 300px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 35px 25px 50px;
            row-gap: 15px;
            background: rgba(9, 19, 47, 0.6);
            border-radius: 20px;

            &-text {
                color: var(--main-gray);
                font-size: 14px;
                max-width: 200px;
                width: 100%;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                
                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-icon {
                max-width: 80px;
                width: 100%;
                max-height: 80px;
                min-height: 80px;
                height: 100%;
                display: grid;
                place-items: center;
                position: relative;

                .blur-bg {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 50%;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.04);
                    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
                    backdrop-filter: blur(8px);
                    z-index: 3;
                }

                &::before {
                    content: '';
                    max-width: 33px;
                    width: 100%;
                    height: 33px;
                    position: absolute;
                    top: 5%;
                    left: -10%;
                    background:  linear-gradient(4.19deg, rgba(115, 17, 198, 0.8) -0.98%, rgba(132, 105, 209, 0.8) 89%);
                    border-radius: 50%;
                }

                &::after {
                    content: '';
                    max-width: 33px;
                    width: 100%;
                    height: 33px;
                    position: absolute;
                    bottom: 8%;
                    right: 8%;
                    background: var(--main-red);
                    border-radius: 50%;
                }

                img {
                    z-index: 5;
                }
            }
        }
    }
}

</style>