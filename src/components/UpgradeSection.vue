<template>
    <h2>
        Tıklama Gücü {{ store.getters.getManuelCollect }}
    </h2>
    <h2>
        Saniye Başı Altın {{ store.getters.getAutoCollect }}
    </h2>
    <div class="row gy-1">
        <UpgradeSectionItem v-for="item in store.getters.getUpgradeItems" :key="item.id" :item="item"></UpgradeSectionItem>
    </div>
</template>

<script setup>
import UpgradeSectionItem from './UpgradeSectionItem.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>