<template>
  <section class="pt-120px">
    <div>
      <Vue3Lottie
        :height="200"
        :width="200"
        :animation-data="Animation"
      />
    </div>
    <p class="text-center font-600 text-size-28px">
      test
    </p>
  </section>
</template>
<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import Animation from '@/assets/Animation.json'
</script>
