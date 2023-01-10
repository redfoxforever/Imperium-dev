<template>
    <aside class="cabinet__sidebar-nav">
        <div class="container">
            <div class="row">

                <ul class="nav__links">
                    <li class="nav__links-item" v-for="(link, idx) in store.sideBar.navLinks" :key="idx">
                        <router-link :to="link.url" class="nav__links-link" 
                        active-class="active" v-html="link.text">
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
    </aside>
</template>

<script>
import { userStore } from "@/stores/userStore.js";

export default {
    name: 'Cabinet Sidebar',
    data() {
        return {
            store: userStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.cabinet__sidebar-nav {
    max-width: 120px;
    min-width: 120px;
    width: 100%;
    min-height: 100%;
    background: rgba(80, 110, 131, 0.2);
    box-shadow: inset 0px 1px 2px rgba(239, 232, 232, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 8px;
    padding: 35px 0;
    
    .row {
        flex-direction: column;
        align-items: center;
    }

    .nav__links {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 25px;
        user-select: none;

        &-link {
            font-size: 15px;
            transition: .4s;
            opacity: .9;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 8px;
            color: #cccccc;

            &:hover {
                opacity: 1;
                color: var(--main-white);
            }

            &.active {
                opacity: 1;
                color: var(--main-cyan);
            }
        }
    }
}

</style>