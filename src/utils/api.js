import axios from "axios";

const houseOfGamesApi = axios.create({
  baseURL: "https://house-of-games-api.herokuapp.com/api"
});

export const getCategories = () => {
  return houseOfGamesApi.get('/categories').then((res) => {
    console.log(res);
  });
};