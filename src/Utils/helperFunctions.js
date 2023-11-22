export const filterProjects = (filteredProjects, property) => {
  const filtered = filteredProjects.reduce((project) => {
    return project?.toLowerCase().includes(property.toLowerCase());
  });
  return filtered;
};
