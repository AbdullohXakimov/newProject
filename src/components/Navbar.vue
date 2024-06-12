<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const user = ref(null)
const router = useRouter()

user.value = JSON.parse(localStorage.getItem('user'))

console.log('user', user);

const logout = () => {
  localStorage.removeItem('user')
  router.push('/')
}
</script>



<template>
  <div class="shadow-md py-6">

    <div class="container">

      <div class="flex justify-between gap-x-5">

        <div>

          <router-link class="text-[20px] font-semibold [&.router-link-active]:text-green-500 hover:border-b-2 duration-300 border-green-500" to="/home">Home</router-link>

        </div>
        <div>

          <div v-if="user" class="flex items-center gap-2">
            <img class="w-8 h-8 rounded-full" :src="user.image" alt="">
            <h2 class="text-2xl font-medium">{{ user.firstName }}</h2>

            <button class="text-red-500 font-bold text-[24px]"  @click="logout">Logout</button>
          </div>

          <div v-else>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
          </div>

        </div>

      </div>

    </div>



  </div>
</template>



<style lang="scss" scoped></style>