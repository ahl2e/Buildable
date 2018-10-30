export const fetchAllComments = () => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/:project_id/comments`
  });
};

export const fetchComment = (comment_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/:project_id/comments/${comment_id}`
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/projects/:project_id/comments`,
    data: {comment}
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/:project_id/comments/${comment_id}/edit`,
    data: { comment }
  });
};

export const deleteComment = (comment) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/:project_id/comments/${comment_id}`
  });
};
