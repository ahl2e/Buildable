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

export const updateStep = (step, info) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/projects/${info.project_id}/steps/${info.id}/edit`,
    data: {step}
  });
};

export const deleteStep = (step) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/:project_id/steps/${step.id}`
  });
};
