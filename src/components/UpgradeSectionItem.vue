<template>
    <button type="button" @click="upgrade" :class="{ 'bg-danger': !buyable, 'bg-light': buyable }"
        class="upgrade-item bg-opacity-50 col-11 d-flex flex-column align-items-center justify-content-center border rounded-start ">
        <h6>{{ props.item.title }}</h6>
        <div class="d-flex gap-1 align-items-center justify-content-center">
            <GoldIngot></GoldIngot>{{ props.item.price.toLocaleString() }}
        </div>
    </button>
    <div
        class="col-1 bg-dark bg-opacity-75 text-white rounded-end d-flex flex-column align-items-center justify-content-center">
        <h6>{{ props.item.level }}</h6>
    </div>
</template>

<script setup>
import GoldIngot from './GoldIngot.vue';
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex'
const props = defineProps(['item'])
const store = useStore()
const buyable = computed(() => {
    return store.getters.getResource >= props.item.price
})
function upgrade() {
    if (buyable.value)
        store.commit('increaseCollect', props.item)
}
</script>