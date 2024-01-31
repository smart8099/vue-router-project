<script setup>
import { FwbCard } from "flowbite-vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  movie: Object,
});
</script>


<!-- <template>

  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="movie.poster" :alt="movie.title" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ movie.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ movie.description }}
      </p>
    </div>
  </div>
</template> -->



<!-- <template> -->
  <!-- <pre>{{ movie }}</pre>  -->
  <!-- <fwb-card
    img-alt="Desk"
    :img-src="movie.poster"
    variant="image"
    :alt="movie.title"
    class="w-full"
  >
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
      <router-link :to="{name: 'MovieDetails', params : {id: movie.id}}">{{ movie.title }}</router-link>
        
      </h5>
      <span class="mr-4">{{ movie.year }}</span>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ movie.description }}
      </p>
    </div>
  </fwb-card>
</template> -->

<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg w-full" :src="movie.poster" :alt="movie.title" />
    </a>
    <div class="p-5">
      <router-link :to="{name:'MovieDetails', params : {id : movie.id}}">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ movie.title }}
        </h5>
      </router-link>
      <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
        {{ movie.year }}
      </span>
      <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
        {{ movie.runtime }}
      </span>
      <p class="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ movie.description }}
      </p>
    </div>
  </div>
</template>


