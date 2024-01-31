<script setup>
import { ref, onMounted } from "vue";
import { FwbSpinner } from "flowbite-vue";
import MovieCard from "../components/MovieCard.vue";

const movieList = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  const result = await fetch("http://localhost:3000/movies");
  const response = await result.json();
  movieList.value = response;
  isLoading.value = false;
});
</script>

<template>
    <div class="h-screen flex items-center justify-center" v-if="isLoading">
      <!-- Center the spinner -->
      <fwb-spinner size="12"/>
    </div>
  
    <!-- Show the movies grid if isLoading is false -->
    <div v-else>
      <h1>Movies</h1>
      <div class="grid grid-cols-3 gap-5">
        <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </template>
  