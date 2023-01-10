<template>
  <section class="home__dashboard">
    <div class="container">
      <div class="row">

        <span class="trader">
          <img src="" alt="" class="trader-ava">

          <span class="trader-name">{{ cabinetHome.dashboard.username }}</span>
        </span>

        <div class="trader__info-list">

          <div class="trader__info-list-item" 
          v-for="(item, idx) in cabinetHome.dashboard.traderInfos" :key="idx">
            <span class="item-name">{{ item.name }}</span>

            <span class="item-num" v-html="`${item.icon} ${idx == 1 ? '$' : ''}${item.num}`"></span>
          </div>

        </div>

      </div>
    </div>
  </section>

  <section class="home__channels">
    <h3 class="home__channels-title">{{ channels.title }}</h3>

    <div class="home__channels-dashboards">

      <article class="home__channels-spot">

        <div class="all-dashboard-title-box">
          <p class="all-dashboard-title">{{ channels.spotChannel.title }}</p>
        </div>

        <div class="channel-name-box">

          <span class="channel-info">
            <img src="" alt="" class="channel-ava">

            <span class="channel-name">
              {{ channels.spotChannel.channelName }}
            </span>
          </span>

          <div class="channel__controls">
            <button class="delete-btn channel__controls-btn">
              <i class="far fa-trash"></i>
            </button>

            <button class="edit-btn channel__controls-btn">
              <i class="far fa-edit"></i>
            </button>
          </div>

        </div>

        <div class="channel__cards">
          <div class="channel-card" v-for="(card, idx) in channels.spotChannel.cards" 
          :key="idx">
            <span class="channel-card-name">{{ card.name }}</span>

            <p class="channel-card-text" v-html="card.text"></p>
          </div>
        </div>

      </article>

      <article class="home__channels-futures">
        <div class="all-dashboard-title-box">
          <p class="all-dashboard-title">{{ channels.futuresChannel.title }}</p>
        </div>

        <div class="create-channel-box">
          <button class="create-btn"><i class="far fa-plus"></i></button>

          <p class="create-text">{{ channels.futuresChannel.createText }}</p>
        </div>
      </article>

    </div>
  </section>

  <div class="edit-modal">

  </div>

  <div class="create-channel-modal">
    <div class="modal__content">

    </div>
  </div>

</template>

<script>
import { userStore } from "@/stores/userStore.js";
import spotAva from "@/assets/icons/cabinet/spot-channel-ava.svg";
import traderAva from "@/assets/icons/cabinet/trader-ava.svg";

export default {
  name: 'Cabinet Home',
  data() {
    return {
      store: userStore()
    }
  },
  computed: {
    channels() {
      return this.store.cabinetHome.channels
    },
    cabinetHome() {
      return this.store.cabinetHome
    }
  },
  mounted() {
    document.querySelector('.channel-ava').src = spotAva;
    document.querySelector('.trader-ava').src = traderAva;
  }
}

</script>

<style lang="scss" scoped>

.home__dashboard {
  width: 100%;
  background: rgba(22, 33, 47, 0.8);
  padding: 20px;
  border-radius: 20px;

  .container {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  .row {
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .trader {
    max-width: max-content;
    width: 100%;
    display: flex;
    column-gap: 15px;
    align-items: center;
    
    &-name {
      font-size: 25px;
      font-weight: 500;
      text-transform: capitalize;
      color: var(--main-white);
    }

    &-ava {
      max-width: 70px;
      width: 100%;
    }
  }

  .trader__info-list {
    max-width: max-content;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;

    &-item {
      padding: 10px 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      border: 2px solid #39384F;
      border-radius: 7px;
      user-select: none;

      .item-name {
        text-transform: uppercase;
        color: #9C9BD6;
        font-size: 14px;
        font-weight: 500;
        opacity: .6;
      }

      .item-num {
        color: var(--main-white);
        font-size: 18px;
      }
    }
  }
}

.home__channels {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &-title {
    color: var(--main-white);
    width: 100%;
  }

  &-dashboards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  &-spot,
  &-futures {
    max-width: 630px;
    width: 100%;
    min-width: 285px;
    background: rgba(23, 35, 51, 0.7);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.4);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &-spot {
    .channel-name-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 15px;

      .channel-info {
        max-width: max-content;
        width: 100%;
        display: flex;
        column-gap: 10px;
        align-items: center;
        user-select: none;
        pointer-events: none;

        .channel-name {
          color: var(--main-white);
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 500;
        }

        .channel-ava {
          max-width: 45px;
          width: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
      }

      .channel__controls {
        max-width: max-content;
        width: 100%;
        display: flex;
        gap: 12px;
        align-items: center;

        &-btn {
          width: 32px;
          min-height: 32px;
          max-height: 32px;
          height: 100%;
          border-radius: 5px;
          display: grid;
          place-items: center;
          color: rgba($color: #fff, $alpha: .5);
          border: 0;
          background: #33335A;
          font-size: 17px;

          &.edit-btn {
            i {
              margin-left: 3px;
            }
          }
        }
      }
    }
  }

  &-futures {
    align-items: center;
    row-gap: 80px;
    padding-bottom: 50px;

    .create-channel-box {
      max-width: 280px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 15px;
      border: 1px dashed #C4C4C4;
      border-radius: 20px;
      padding: 50px 0;
      transition: .4s;

      .create-btn {
        background: transparent;
        border: 0;
        border: solid 2px var(--main-cyan);
        border-radius: 10px;
        padding: 12px 15px;
        font-size: 28px;
        display: grid;
        place-items: center;
        color: var(--main-cyan);
        transition: .4s;

        &:hover {
          color: var(--main-dark-blue);
          background: #73FFF2;
        }
      }

      &:hover {
        border-color: var(--main-cyan);
      }

      .create-text {
        color: var(--main-white);
        font-size: 15px;
        user-select: none;
        pointer-events: none;

        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }

  .channel__cards {
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    .channel-card {
      width: 100%;
      padding: 15px 15px 40px; 
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      row-gap: 25px;
      background: rgba(22, 33, 47, 0.8);
      border-radius: 8px;
      user-select: none;

      &-name {
        font-size: 12px;
        color: #9C9BD6;
        font-weight: 500;
        text-transform: uppercase;
        opacity: .6;
      }

      &-text {
        color: var(--main-white);
        font-size: 17px;
        font-weight: 500;
      }
    }
  }
}

.all-dashboard-title-box {
  width: 100%;
  background: rgba(22, 33, 47, 0.8);
  border-radius: 10px;
  padding: 13px 0;
  display: grid;
  place-items: center;
  user-select: none;

  .all-dashboard-title {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    color: rgba(223, 219, 219, 0.8);
  }
}

@media (max-width: 1140px) {
  .channel__cards {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .home__channels {
    &-dashboards {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
    }

    &-spot,
    &-futures {
      max-width: 500px;
    }
  }
}

@media (max-width: 992px) {
  .home__channels {
    &-dashboards {
      gap: 15px;
    }
  }
  .channel__cards {
    gap: 13px !important;
  }
}

</style>