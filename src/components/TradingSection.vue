<template>
  <section class="trading__section">
    <div class="container">
      <div class="row">
        <h2 class="trading__title">{{ tradingSn.title }}</h2>

        <p class="trading__subtitle">{{ tradingSn.subtitle }}</p>

        <div class="traffic-1__content all-traffic-content">
          <img src="" alt="" class="traffic-1__content-img all-traffic-img" />

          <div class="traffic-1__content-desc all-traffic-desc">
            <h3 class="content__desc-title all-traffic-title">
              {{ tradingSn.traffic1Content.title }}
            </h3>

            <span class="line-through"></span>

            <p class="content__desc-text all-traffic-text">
              {{ tradingSn.traffic1Content.text }}
            </p>
          </div>
        </div>

        <div class="traffic-2__content all-traffic-content">
          <div class="traffic-2__content-desc all-traffic-desc">
            <h3 class="content__desc-title all-traffic-title">
              {{ tradingSn.traffic2Content.title }}
            </h3>

            <span class="line-through"></span>

            <p class="content__desc-text all-traffic-text">
              {{ tradingSn.traffic2Content.text }}
            </p>
          </div>

          <img src="" alt="" class="traffic-2__content-img all-traffic-img" />
        </div>

        <div class="video__content">
          <div class="container">
            <div class="row">

              <h3 class="video__content-title">
                {{ tradingSn.videoContent.title }}
              </h3>

              <span class="line-through"></span>

              <div class="video-player">
                <img src="" alt="" class="video-player-img" />

                <a
                  href="https://youtu.be/9-z2o_TywCg"
                  target="_blank"
                  class="video-player-btn"
                  ><i class="fas fa-play"></i
                ></a>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import { useHomeStore } from "@/stores/homeStore.js";
import traffic1 from "@/assets/images/home/main/tradingSection/traffic-1.svg";
import traffic2 from "@/assets/images/home/main/tradingSection/traffic-2.svg";
import videoImg from "../assets/images/home/main/tradingSection/videoImg.png";

export default {
  name: "Trading",
  data() {
    return {
      store: useHomeStore(),
    };
  },
  computed: {
    tradingSn() {
      return this.store.main.tradingSection;
    },
  },
  mounted() {
    document.querySelector(".trading__section .traffic-1__content-img").src = traffic1;
    document.querySelector(".trading__section .traffic-2__content-img").src = traffic2;
    document.querySelector('.trading__section .video-player-img').src = videoImg;
  },
};
</script>

<style lang="scss" scoped>

.trading__section {
  max-width: 1220px;
  width: 100%;
  padding: 100px 0;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 20px;

  .container {
    max-width: 1040px;
  }

  .trading__title {
    text-align: center;
  }

  .trading__subtitle {
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
      transition: 0.5s;

      i {
        margin-top: 5px;
        margin-left: 5px;
        transition: 0.5s;
      }

      &:hover {
        max-width: 70px;
        min-height: 70px;
        max-height: 70px;
        backdrop-filter: blur(1px);

        i {
          scale: 0.7;
        }
      }
    }
  }
}
</style>