<template>
    <div class="d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center gap-1 border shadow-sm px-3 py-1 rounded">
            {{ store.getters.getResource }}
            <GoldIngot></GoldIngot>
        </div>
    </div>
</template>

<script setup>
import GoldIngot from './GoldIngot.vue';

import { useStore } from 'vuex'
const store = useStore()
</script>