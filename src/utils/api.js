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

export const getReviewById = (reviewId) => {
  return houseOfGamesApi.get(`/reviews/${reviewId}`).then((res) => {
    return (res.data.review);
  })
}

export const getCommentsByReviewId = (reviewId) => {
  return houseOfGamesApi.get(`/reviews/${reviewId}/comments`).then((res) => {
    return (res.data.comments);
  })
}

export const postNewComment = (reviewId, user, body) => {
  const postCommentBody = {
    username: user,
    body: body
  }
  return houseOfGamesApi.post(`/reviews/${reviewId}/comments`, postCommentBody).then((res) => {
    return (res.data.comment);
  })
}