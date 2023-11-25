export const filterProjects = (projects, selectedFilters) => {
  return projects?.filter((project) => {
    return (
      (selectedFilters?.degree === "All" ||
        project?.degree === selectedFilters?.degree) &&
      (selectedFilters?.subject === "All" ||
        project?.subject === selectedFilters?.subject) &&
      (selectedFilters?.university === "All" ||
        project?.university === selectedFilters?.university)
    );
  });
};
