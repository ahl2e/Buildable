export const fetchAllProjects = () => {
  return$.ajax({
    method: "GET",
    url: 'api/projects'
  });
};

export const fetchProject = (id) => {
  return$.ajax({
    method: "GET",
    url: `api/projects/${id}`,
    error: console.log(error)
  });
};
