<template>
  <div class="bg-gray-300 h-screen flex justify-center items-center">


    <div class="bg-[#c5bfbf] w-[500px] p-10 rounded-2xl">
      <h1 class="text-center text-3xl mb-5">Login</h1>

      <form @submit.prevent="loginUser" class="flex flex-col gap-5">
        <label for="">
          Username
          <input v-model="userData.username" class=" bg-[#9e9797] w-full py-3 px-2 border rounded outline-none focus:border-primary"
            type="text">
        </label>
        <label for="">
          Password
          <input v-model="userData.password" class="bg-[#9e9797] w-full py-3 px-2 border rounded outline-none focus:border-primary"
            type="text">
        </label>

        <h2 v-if="isError" class="text-red-500">Login or Password wrong</h2>

        <button class="py-3 px-5 text-xl bg-primary rounded-xl text-white bg-[#c26527] hover:bg-yellow-700">Login</button>
      </form>
    </div>


  </div>
</template>

<script setup>

import { ref, reactive } from 'vue';
import api from '@/api'

import { useRouter } from 'vue-router'

const router = useRouter()
const isError = ref(false)
const userData = reactive({
  username: '',
  password: ''
})

function notFound() {
  
}

const loginUser = () => {
  api.post('/auth/login', userData)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data))
      router.push('/home')
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err);
      isError.value = true
    })
}

</script>

<style  scoped></style>