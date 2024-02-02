import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
    isLoading: false,
    query: "",
    singleMovie: {},
    year:""
  }),
  getters: {
    totalMovies ()  {
      return this.filterMovies.length;
    },

    filterMovies: (state) => {
      
        return state.movies.filter((movie) => movie.year >= state.year);
      
    },
    // filterMovies() {
    //   return this.movies.filter((movie) => {
    //     return movie.year >= 2010;
    //   });
    // },
  },
  actions: {
    async getMovies() {
      this.isLoading = true;
      const result = await fetch(
        "http://localhost:8000/api/movies/?search=" + this.query
      );
      const response = await result.json();
      this.movies = response;
      this.isLoading = false;
    },

    async getSingleMovie(id) {
      this.isLoading = true;
      const result = await fetch(`http://localhost:8000/api/movies/${id}`);
      console.log(result);
      if (result.status === 404) {
        this.router.push({ name: "NotFound" });
      }
      const response = await result.json();
      this.singleMovie = response;
      this.isLoading = false;
    },
  },
});
