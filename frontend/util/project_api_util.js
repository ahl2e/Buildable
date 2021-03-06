export const fetchAllProjects = () => {
  return $.ajax({
    method: "GET",
    url: 'api/projects'
  });
};

export const fetchProject = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax({
      url: '/api/projects',
      method: "POST",
      data: project,
      contentType: false,
      processData: false
  });
};
export const updateProject = (project) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${project.id}/edit/`,
    data: { project }
  });
};

export const deleteProject = (project) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${project}/`
  });
};
