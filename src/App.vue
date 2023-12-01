
<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <NNotificationProvider>
      <NDialogProvider>
        <NMessageProvider>
          <router-view />
        </NMessageProvider>
      </NDialogProvider>
    </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'
import { WebApp } from '@grammyjs/web-app'

onMounted(() => {
  WebApp.ready()
})

</script>

<style>
html {
  /**uncocss 基准单位1rem = 1px
   */
  font-size: 4px;
}

body {
  font-size: 16px;
}
</style>
