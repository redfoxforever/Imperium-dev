<template>
  <button class="sign-btn blue-btn" @click="pushtoSign"><i class="fas fa-user"></i>{{ store.btnText }}</button>
</template>

<script>
import { useNavStore } from "@/stores/navStore.js";
import { useRouter } from "vue-router";

export default {
    name: 'Sign Button',
    data() {
        return {
            store: useNavStore(),
            router: useRouter()
        }
    },
    methods: {
        pushtoSign() {
            this.router.push('/sign')
        }
    }
}

</script>

<style lang="scss" scoped>
</style>