export const filterProjects = (
  filteredProjects,
  variable,
  property,
  projects
) => {
  const filtered = filteredProjects.filter((project) => {
    if (variable === "All") return projects;
    return project[property]?.toLowerCase().includes(variable.toLowerCase());
  });
  console.log(filtered);
  return filtered;
};
