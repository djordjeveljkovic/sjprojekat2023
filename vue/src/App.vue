<template>
  <TopNavigation></TopNavigation>
  <div v-if="accessToken">
    <div class="flex overflow-hidden bg-white pt-16">
      <SideNavigation></SideNavigation>

      <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<script setup>
import TopNavigation from '@/components/layouts/TopNavigation.vue'
import SideNavigation from '@/components/layouts/SideNavigation.vue'
import {ref} from "vue";
const accessToken = ref('')
accessToken.value = localStorage.getItem('x-access-token')
</script>
