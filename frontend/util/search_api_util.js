export const search = (query) => {
  return $.ajax({
    method: "GET",
    url: `/api/searches`,
    data: {projects: query}
  });
};
