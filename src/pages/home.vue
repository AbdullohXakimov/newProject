<template>
  <div class="py-10">
    <div class="container">
      <Loading v-if="loading" />
      <div class="grid grid-cols-4 gap-5">
        <div
          class="bg-gray-200 p-5 rounded-xl"
          v-for="item in products"
          :key="item.id"
        >
          <img :src="item.thumbnail" alt="" />

          <h1 class="text-2xl font-medium line-clamp-1 my-3">
            {{ item.title }}
          </h1>
          <p class="line-clamp-2 mb-3">{{ item.description }}</p>
          <h1 class="text-2xl font-medium">{{ item.price }} $</h1>
        </div>

        <button v-if="!loading" class="bg-[#c26527] hover:bg-yellow-700 rounded-xl text-white py-3" @click="fetchProducts()">More...</button>
      </div>
    </div>

    <div ref="loadMore" id="loadMore">
      <!-- <Loading v-if="loading" /> -->
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  fetchProducts()
})
import Navbar from "../components/Navbar.vue";
import Loading from "../components/Loading.vue";
import { useProducts } from "../composable/useProducts";
import { ref, onMounted } from 'vue'

const loadMore = ref(null)

const { products, loading, error, fetchProducts } = useProducts();

</script>

<style lang="scss" scoped></style>
