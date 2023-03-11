<template>
    <div class="d-flex align-items-center justify-content-center">
        <div class="cobblestone" @mouseenter="collectionValid = true" @mouseleave="collectionValid = false"
            @mousedown="manuelCollect">
            <div class="collection-progress"></div>
            <img src="../images/Cobblestone.png" class="img-fluid">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const collectionValid = ref(false)
const autoCollectTick = 50
const autoCollectIncreasement = 1000 / autoCollectTick

function manuelCollect() {
    store.commit('addResource', store.getters.getManuelCollect)
}
function autoCollect() {
    setInterval(() => {
        store.commit('addResource', store.getters.getAutoCollect / autoCollectIncreasement)
    }, autoCollectTick)
}
autoCollect()
</script>