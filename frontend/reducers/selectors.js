import values from 'lodash/values';

export const selectAllProjects = (state) => {
  return values(state.entities.projects);
};

export const selectAllSteps = (state) => {
  return values(state.entities.steps);
};

export const selectAllSearches = (state) => {
  return values(state.entities.searches);
};

export const selectProject = (state, projectId) => {
  return state.entities.projects[projectId];
};

export const selectAllComments = (state) => {
  return values(state.entities.comments);
};
