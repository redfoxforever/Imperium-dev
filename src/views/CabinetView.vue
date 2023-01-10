<template>
  <CabinetNav/>

    <main class="main">
        <div class="container">
            <div class="row">
                <CabinetSideBar/>

                <main class="cabinet-view">
                    <RouterView/>
                </main>
            </div>
        </div>
    </main>                 

</template>

<script>
import CabinetNav from '@/components/CabinetNav.vue'
import { useSignStatus } from "@/stores/signStatusStore.js";
import CabinetSideBar from '@/components/CabinetSideBar.vue';

export default {
    name: 'Cabinet',
    data() {
        return {
            store: useSignStatus()
        }
    },
    components: {
        CabinetNav,
        CabinetSideBar
    },
    created() {
        this.store.signed ? '' : this.$router.push('/sign');
    }
}

</script>

<style lang="scss" scoped>

.container {
    max-width: 1470px !important;
}

.main {
    width: 100%;
    padding: 5px 0 40px;

    .row {
        justify-content: space-between;
        column-gap: 30px;
        flex-wrap: unset;
    }

    .cabinet-view {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 35px;
    }
}

@media (max-width: 992px) {
    .row {
        column-gap: 15px !important;
    }
}

</style>