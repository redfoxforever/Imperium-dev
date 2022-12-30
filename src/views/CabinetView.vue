<template>
  
  <CabinetNav/>

</template>

<script>
import CabinetNav from '@/components/CabinetNav.vue'
import { useSignStatus } from "@/stores/signStatusStore.js";

export default {
    name: 'Cabinet',
    data() {
        return {
            store: useSignStatus()
        }
    },
    components: {
        CabinetNav
    },
    created() {
        this.store.signed ? '' : this.$router.push('/sign');
    }
}

</script>

<style lang="scss" scoped>

</style>