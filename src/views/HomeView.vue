<template>
  <Nav/>

  <header class="header">
    <div class="container">
      <div class="row">

        <div class="header__desc">
          <h1 class="header__desc-title">
            {{ store.header.desc.title }}
          </h1>

          <p class="header__desc-text">{{ store.header.desc.text }}</p>

          <button class="blue-btn header__desc-btn" @click="this.$router.push('/sign')">
            {{ store.header.desc.btnText }}
          </button>
        </div>

        <img src="" alt="" class="header__bitcoin-icon">
        <img src="" alt="" class="header__img">

      </div>
    </div>
  </header>

  <main class="main">
    <PassiveSection/>

    <TradingSection/>

    <img src="" alt="" class="passive-bitcoin-img">
  </main>

  <span class="bg-gradient"></span>

  <Footer/>

</template>

<script>
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';
import { useHomeStore } from "@/stores/homeStore.js";
import PassiveSection from '@/components/PassiveSection.vue';
import TradingSection from '@/components/TradingSection.vue';
import headerImg from "@/assets/images/home/header/header-img.png";
import bitcoinIcon from "@/assets/images/home/header/bitcoin.svg";
import bitcoinImg from "@/assets/images/home/main/passiveSection/passive-bitcoin.svg";

export default {
  name: 'Home',
  components: {
    Nav,
    PassiveSection,
    TradingSection,
    Footer
  },
  data(){
    return {
      store: useHomeStore()
    }
  },
  mounted() {
    document.querySelector('.header__bitcoin-icon').src = bitcoinIcon;
    document.querySelector('.header__img').src = headerImg;
    document.querySelector('.passive-bitcoin-img').src = bitcoinImg;
  }
}

</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  padding: 50px 0;

  .row {
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  &__desc {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    &-text {
      font-size: 15px;
      color: var(--main-gray);
    }
  }

  &__bitcoin-icon {
    max-width: 400px;
    width: 100%;
    position: absolute;
    top: -40%;
    left: -27%;
    z-index: -1;
    pointer-events: none;
    display: block;
  }

  &__img {
    max-width: 850px;
    width: 100%;
    position: absolute;
    top: -50%;
    right: 0;
    z-index: -1;
    pointer-events: none;
  }
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  position: relative;
  row-gap: 100px;

  .passive-bitcoin-img {
    max-width: 400px;
    width: 100%;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: -1;
  }
}

.bg-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: -2;
  background: linear-gradient(180deg, #16161E 12.44%, rgba(24, 37, 56, 0.03) 100%);
}

</style>
