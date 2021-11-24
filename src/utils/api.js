import axios from "axios";

const houseOfGamesApi = axios.create({
  baseURL: "https://house-of-games-api.herokuapp.com/api"
});

export const getCategories = () => {
  return houseOfGamesApi.get('/categories').then((res) => {
    return (res.data.categories);
  });
};

export const getReviewsByCategory = (category) => {
  let path = "/reviews";
  if (category !== "all-categories") path += "?category=" + category;
  return houseOfGamesApi.get(path).then((res) => {
    return (res.data.reviews);
  });
};