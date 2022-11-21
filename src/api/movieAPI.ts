import { Movie } from "../interfaces/Movie";
import {axiosClient} from "./axiosClient";

const movieAPI = {
  getMovieList: () => {
    return axiosClient.get<unknown, Movie[]>("/film");
  },
  getMovie: (movieID: string) => {
    return axiosClient.get<unknown, Movie[]>(`/film/${movieID}`);
  }
}

export default movieAPI;