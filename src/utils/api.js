import axios from "axios";

const houseOfGamesApi = axios.create({
  baseURL: "https://grey-nc-api.onrender.com/api"
});

export const getCategories = () => {
  return houseOfGamesApi.get('/categories').then((res) => {
    return (res.data.categories);
  });
};

export const getReviews = (category, sort, order) => {
  let path = "/reviews";
  if (category !== "all-categories" && category !== '/' && category !== undefined && category !== "/reviews/all") {
    path += `?category=${category.substring(9)}&sort_by=${sort}&order=${order}`;
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

export const deleteComment = (commentId) => {
  return houseOfGamesApi.delete(`/comments/${commentId}`);
}

export const patchReview = (reviewId, newVotes) => {
  const patchReviewBody = { "inc_votes": newVotes }
  console.log(patchReviewBody);
  return houseOfGamesApi.patch(`/reviews/${reviewId}`, patchReviewBody).then((res) => {
    console.log(res);
    return (res.data.review);
  })
}