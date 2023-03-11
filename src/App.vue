<template>
  <div class="container-lg py-5">
    <div class="row g-0">
      <div class="col-12 col-lg-8">
        <ResourceBoard class="mb-5"></ResourceBoard>
        <GameSection></GameSection>
      </div>
      <div class="col-12 col-lg-4">
        <UpgradeSection></UpgradeSection>
      </div>
    </div>
  </div>
</template>

<script setup>
import GameSection from './components/GameSection.vue';
import UpgradeSection from './components/UpgradeSection.vue';
import ResourceBoard from './components/ResourceBoard.vue'
</script>
