<script setup>
import { store } from '@/store/store.js'
import jwt_decode from 'jwt-decode'
import { ref } from 'vue'
import router from '@/router'
const accessToken = ref('')
accessToken.value = localStorage.getItem('x-access-token')
if (accessToken.value) {
  const decoded = jwt_decode(accessToken.value)
  store.currentUser.id = decoded.id
  store.currentUser.name = decoded.name
  store.currentUser.username = decoded.username
  store.currentUser.email = decoded.email
  store.currentUser.role = decoded.role
}
function logout() {
  localStorage.clear()
  store.clearUser()
  accessToken.value = ''
  router.push({ name: 'login' })
}
</script>

<template>
  <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div v-if="accessToken" class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            @click="store.toggleIsHidden()"
            class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
          >
            <svg
              id="toggleSidebarMobileHamburger"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              id="toggleSidebarMobileClose"
              class="w-6 h-6 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <router-link to="dashboard" class="text-xl font-bold flex items-center lg:ml-2.5">
            <img src="movie.png" class="h-6 mr-2" alt="Cinema Logo" />
            <span class="self-center whitespace-nowrap">Cinema</span>
          </router-link>
        </div>
        <div class="flex items-center">
          <button
            @click="logout"
            type="button"
            class="sm:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <a v-if="accessToken"
            @click="logout"
            class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
          >
            Logout &nbsp;&nbsp;
            <svg
              class="w-6 h-6 text-white flex-shrink-0 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div v-else class="flex items-center justify-between px-8">
        <div class="text-xl tracking-thight font-bold">Evidencija korisnika</div>
        <div class="flex gap-4 text-sm font-semibold tracking-wider">
          <router-link to="login">Login</router-link>
          <router-link to="register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
