import { useSelector } from "react-redux";

const useProjectDetails = (projectId) => {
  const selectFilteredProjects = (state) => state?.projects?.filteredProjects;
  const filteredProjects = useSelector(selectFilteredProjects);
  const projectForDetails = filteredProjects?.find(
    (project) => project?.projectId === projectId
  );
  return projectForDetails;
};

export default useProjectDetails;
