export const filterProjects = (projects, variable, property) => {
  // Use filter instead of reduce for filtering the array
  const filtered = projects.filter((project) => {
    return project[property]?.toLowerCase().includes(variable.toLowerCase());
  });
  return filtered;
};
