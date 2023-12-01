<template>
  <section class="pt-120px">
    <div>
      <Vue3Lottie
        :height="200"
        :width="200"
        :animation-data="Animation"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import Animation from '@/assets/Animation.json'
</script>
