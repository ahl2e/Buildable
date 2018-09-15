import values from 'lodash/values';

export const selectAllProjects = (state) => {
  return values(state.entities.projects);
};
