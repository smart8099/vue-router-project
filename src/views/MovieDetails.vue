<template>
  <h1>Movie {{ $route.params.id }} paramDetials</h1>

  <fwb-card
    img-alt="Desk"
    :img-src="queryMovie.poster"
    variant="image"
    :alt="queryMovie.title"
  >
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ queryMovie.title }}
      </h5>
      <span class="mr-4">{{ queryMovie.year }}</span>
      <fwb-button @click="$router.back()" color="dark">Go Back</fwb-button>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ queryMovie.description }}
      </p>
    </div>
  </fwb-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { FwbCard , FwbButton} from "flowbite-vue";
import { useRouter } from "vue-router";

const queryMovie = ref([]);
const isLoading = ref(true);
const route = useRoute();

const router = useRouter()

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})


onMounted(async () => {
//   const result = await fetch(`http://localhost:3000/movies/${route.params.id}`);
const result = await fetch(`http://localhost:3000/movies/${props.id}`);
if (result.status === 404){
    router.push({name: 'NotFound'})

}
  const response = await result.json();
  queryMovie.value = response;
  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
</style>