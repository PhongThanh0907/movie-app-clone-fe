import { Cinema } from "../interfaces/Cinema";
import {axiosClient} from "./axiosClient";

const cinemaAPI = {
  getCinemaList: () => {
    return axiosClient.get<unknown, Cinema[]>("/cinema");
  }
}

export default cinemaAPI;