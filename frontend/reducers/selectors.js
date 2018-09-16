import values from 'lodash/values';

export const selectAllProjects = (state) => {
  return values(state.entities.projects);
};

export const selectProject = (state, projectId) => {
  return state.entities.projects[projectId];
};
