export const fetchAllReplies = (project_id,comment_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${project_id}/comments/${comment_id}/replies`
  });
};

export const createReply = (project_id,reply) => {
  return $.ajax ({
    method: 'POST',
    url: `/api/projects/${project_id}/comments/${reply.comment_id}/replies`,
    data: {reply}
  });
};

export const deleteReply = (project_id,reply) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${project_id}/comments/${reply.comment_id}/replies/${reply.id}`
  });
};
