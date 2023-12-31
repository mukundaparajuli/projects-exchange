export const filterProjects = (selectedFilters, filteredProjectsBySearch) => {
  return filteredProjectsBySearch?.filter((project) => {
    return (
      (selectedFilters?.degree === "All" ||
        project?.degree === selectedFilters?.degree) &&
      (selectedFilters?.subject === "All" ||
        project?.subject === selectedFilters?.subject) &&
      (selectedFilters?.university === "All" ||
        project?.university === selectedFilters?.university) &&
      (selectedFilters?.plagiarism === 1 ||
        project?.plagiarism === selectedFilters?.plagiarism)
    );
  });
};
