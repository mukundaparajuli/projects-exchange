import { useSelector } from "react-redux";

const useProjectDetails = (projectId) => {
  const selectFilteredProjects = (state) => state?.projects?.filteredProjects;
  const filteredProjects = useSelector(selectFilteredProjects);

  // Use find to get the first project that matches the provided projectId
  const projectForDetails = filteredProjects?.find(
    (project) => project?.projectId === projectId
  );

  console.log(filteredProjects);
  return projectForDetails;
};

export default useProjectDetails;
