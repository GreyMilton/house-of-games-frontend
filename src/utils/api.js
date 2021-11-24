import axios from "axios";

const houseOfGamesApi = axios.create({
  baseURL: "https://house-of-games-api.herokuapp.com/api"
});

export const getCategories = () => {
  return houseOfGamesApi.get('/categories').then((res) => {
    return (res.data.categories);
  });
};

export const getReviews = (category, sort, order) => {
  let path = "/reviews";
  if (category !== "all-categories") {
    path += `?category=${category}&sort_by=${sort}&order=${order}`;
  } else {
    path += `?sort_by=${sort}&order=${order}`
  }
  return houseOfGamesApi.get(path).then((res) => {
    return (res.data.reviews);
  });
};