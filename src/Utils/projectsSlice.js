import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: null,
    filteredProjects: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects = action.payload;
    },
    addFilteredProjects: (state, action) => {
      state.filteredProjects = action.payload;
    },
  },
});
export default projectSlice.reducer;
export const { addProject, addFilteredProjects } = projectSlice.actions;
