export const fetch = (query) => {
  return $.ajax({
    method: "GET",
    url: `/api/categories`,
    data: {projects: category}
  });
};
