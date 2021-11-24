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
  return houseOfGamesApi.get(`/reviews?category=${category}`).then((res) => {
  console.log(res.data.reviews);
  });
};