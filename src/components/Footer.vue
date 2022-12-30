<template>

  <footer class="footer">
    <div class="container">
        <div class="row">

            <a href="https://t.me/redfox4ever" 
            target="_blank" class="telegram-link">
                <i class="fab fa-telegram"></i>
            </a>

        </div>
    </div>
  </footer>

</template>

<script>
import { useFooterStore } from "@/stores/footerStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: useFooterStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    background: #171B2D;
    padding: 70px 0;
}

.container {
    position: relative;
}

.telegram-link {
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
    color: var(--main-blue);
    font-size: 45px;
}

</style>