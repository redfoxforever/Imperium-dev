<template>

  <section class="passive__section">
    <div class="container">
        <div class="row">

            <h2 class="passive__title">{{ passiveSn.title }}</h2>

            <p class="passive__subtitle">{{ passiveSn.subtitle }}</p>

            <div class="traffic-1__content all-traffic-content">
                <img src="" alt="" class="traffic-1__content-img all-traffic-img">

                <div class="traffic-1__content-desc all-traffic-desc">
                    <h3 class="content__desc-title all-traffic-title">
                        {{ passiveSn.traffic1Content.title }}
                    </h3>

                    <span class="line-through"></span>

                    <p class="content__desc-text all-traffic-text">
                        {{ passiveSn.traffic1Content.text }}
                    </p>
                </div>
            </div>

            <div class="traffic-2__content all-traffic-content">
                <div class="traffic-2__content-desc all-traffic-desc">
                    <h3 class="content__desc-title all-traffic-title">
                        {{ passiveSn.traffic2Content.title }}
                    </h3>

                    <span class="line-through"></span>

                    <p class="content__desc-text all-traffic-text">
                        {{ passiveSn.traffic2Content.text }}
                    </p>
                </div>

                <img src="" alt="" class="traffic-2__content-img all-traffic-img">
            </div>

            <HowWorksVue/>

            <div class="video__content">
                <div class="container">
                    <div class="row">

                        <h3 class="video__content-title">{{ passiveSn.videoContent.title }}</h3>

                        <span class="line-through"></span>

                        <div class="video-player">
                            <img src="" alt="" class="video-player-img">

                            <a href="https://youtu.be/9-z2o_TywCg" target="_blank" class="video-player-btn"><i class="fas fa-play"></i></a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  </section>

</template>

<script>
import HowWorksVue from './HowWorks.vue';
import { useHomeStore } from "@/stores/homeStore.js";
import traffic1 from "@/assets/images/home/main/passiveSection/traffic-1.svg";
import traffic2 from "@/assets/images/home/main/passiveSection/traffic-2.svg";
import videoImg from "@/assets/images/home/main/passiveSection/videoImg.png";

export default {
    name: 'Passive Section',
    components: {
        HowWorksVue
    },
    data() {
        return {
            store: useHomeStore(),
        }
    },
    mounted() {
        document.querySelector('.passive__section .traffic-1__content-img').src = traffic1;
        document.querySelector('.passive__section .traffic-2__content-img').src = traffic2;
        document.querySelector('.passive__section .video-player-img').src = videoImg;
    },
    computed: {
        passiveSn() {
            return this.store.main.passiveSection
        }
    }
}   

</script>

<style lang="scss" scoped>

.passive__section {
    max-width: 1220px;
    width: 100%;
    background: rgba(216, 4, 250, 0.04);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    padding: 100px 0;
    position: relative;

    .container {
        max-width: 1040px;
    }

    .passive__title {
        text-align: center;
    }

    .passive__subtitle {
        max-width: 955px;
        width: 100%;
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }
}

.video__content {
    width: 100%;
    margin-top: 20px;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 30px;
    }

    .video-player {
        width: 100%;
        display: grid;
        place-items: center;
        border-radius: 20px;
        overflow: hidden;
        position: relative;

        &-img {
            width: 100%;
            display: block;
        }

        &-btn {
            max-width: 90px;
            width: 100%;
            min-height: 90px;
            max-height: 90px;
            height: 100%;
            display: grid;
            place-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            border: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
            backdrop-filter: blur(4px);
            font-size: 30px;
            color: var(--main-white);
            transition: .5s;

            i {
                margin-top: 5px;
                margin-left: 5px;
                transition: .5s;
            }

            &:hover {
                max-width: 70px;
                min-height: 70px;
                max-height: 70px;
                backdrop-filter: blur(1px);

                i {
                    scale: .7;
                }
            }
        }
    }
}

</style>