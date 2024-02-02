<script setup>
import { ref, onMounted } from "vue";
import { useMoviesStore } from "../stores/movies";
import { FwbSpinner } from "flowbite-vue";
import MovieCard from "../components/MovieCard.vue";

const moviesStore = useMoviesStore();

onMounted(async () => {
  moviesStore.getMovies();
});
// const movieList = ref([]);
// const isLoading = ref(true);

// onMounted(async () => {
//   const result = await fetch("http://localhost:3000/movies");
//   const response = await result.json();
//   movieList.value = response;
//   isLoading.value = false;
// });
</script>

<template>
  <div
    class="h-screen flex items-center justify-center"
    v-if="moviesStore.isLoading"
  >
    <!-- Center the spinner -->
    <fwb-spinner size="12" />
  </div>

  <!-- Show the movies grid if isLoading is false -->
  <div v-else>
    <h1 class="text-2xl font-semibold text-indigo-600">
      Movies({{ moviesStore.totalMovies }})
    </h1>

    <div class="m-2 p-2">
      <div class="flex">
        <select
          id="selectedMovies"
          v-model="moviesStore.year"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="2000" selected>All</option>
          <option value="2010">2010</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <MovieCard
        v-for="movie in moviesStore.filterMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>
  