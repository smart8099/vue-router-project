<!-- <template>
  <h1>Movie {{ $route.params.id }} param Detials</h1>

  <fwb-card
    img-alt="Desk"
    :img-src="moviesStore.singleMovie.poster"
    variant="image"
    :alt="moviesStore.singleMovie.title"
  >
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ moviesStore.singleMovie.title }}
      </h5>
      <span class="mr-4">{{ moviesStore.singleMovie.year }}</span>
      <fwb-button @click="$router.back()" color="dark">Go Back</fwb-button>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ moviesStore.singleMovie.description }}
      </p>
    </div>
  </fwb-card>
</template> -->

<template>
  <h1>Movie {{ $route.params.id }} param Detials</h1>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img
        class="rounded-t-lg w-full"
        :src="moviesStore.singleMovie.poster"
        :alt="moviesStore.singleMovie.title"
      />
    </a>
    <div class="p-5">
      <router-link
        :to="{ name: 'MovieDetails', params: { id: $route.params.id} }"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ moviesStore.singleMovie.title }}
        </h5>
      </router-link>
      <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
        {{ moviesStore.singleMovie.year }}
      </span>
      <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
        {{ moviesStore.singleMovie.runtime }}
      </span>
      <fwb-button @click="$router.back()" color="dark">Go Back</fwb-button>
      <p class="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ moviesStore.singleMovie.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { FwbCard, FwbButton } from "flowbite-vue";
import { useRouter } from "vue-router";
import { useMoviesStore } from "../stores/movies";

const route = useRoute();
const moviesStore = useMoviesStore();

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  await moviesStore.getSingleMovie(props.id);
  console.log( moviesStore.singleMovie.title)
  //   const result = await fetch(`http://localhost:3000/movies/${route.params.id}`);
  // const result = await fetch(`http://localhost:8000/api/movies/${props.id}`);
  // if (result.status === 404){
  //     router.push({name: 'NotFound'})

  // }
  //   const response = await result.json();
  //   moviesStore.singleMovie.value = response;
  //   isLoading.value = false;
});

</script>

<style lang="scss" scoped>
</style>