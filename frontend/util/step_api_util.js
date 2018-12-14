export const fetchAllSteps = (project_id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/projects/${project_id}/steps`
  });
};

export const fetchStep = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/projects/:project_id/steps/${id}`
  });
};

export const createStep = (step) => {
  return $.ajax({
    method: "POST",
    url: "/api/projects/:project_id/steps",
    data: step,
    contentType: false,
    processData: false
  });
};

export const updateStep = (step) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${step.project_id}/steps/${step.id}/edit`,
    data: {step}
  });
};

export const deleteStep = (step) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/:project_id/steps/${step.id}`
  });
};
