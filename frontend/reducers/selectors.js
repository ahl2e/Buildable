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

export const selectFurnitureProjects = (state) => {
  const furnitureProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'furniture'){
      furnitureProjects.push(project);
    }
  });
  return furnitureProjects;
};

export const selectWoodworkingProjects = (state) => {
  const woodworkingProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'woodworking'){
      woodworkingProjects.push(project);
    }
  });
  return woodworkingProjects;
};

export const selectMetalProjects = (state) => {
  const metalProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'metal'){
      metalProjects.push(project);
    }
  });
  return metalProjects;
};

export const selectTechnologyProjects = (state) => {
  const technologyProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'technology'){
      technologyProjects.push(project);
    }
  });
  return technologyProjects;
};

export const selectPotteryProjects = (state) => {
  const potteryProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'pottery'){
      potteryProjects.push(project);
    }
  });
  return potteryProjects;
};

export const selectHomeImprovementProjects = (state) => {
  const homeImprovementProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'home_improvement'){
      homeImprovementProjects.push(project);
    }
  });
  return homeImprovementProjects;
};

export const selectLightingProjects = (state) => {
  const lightingProjects = [];
  const projects = JSON.parse(localStorage.projects);
  projects.forEach((project) => {
    if(project.category == 'lighting'){
      lightingProjects.push(project);
    }
  });
  return lightingProjects;
};

export const selectProject = (state, projectId) => {
  return state.entities.projects[projectId];
};

export const selectAllComments = (state) => {
  return Object.values(state.entities.comments);
};
