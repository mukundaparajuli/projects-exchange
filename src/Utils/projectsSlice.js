import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: null,
    filteredProjects: null,
    cartProjects: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects = action.payload;
    },
    addFilteredProjects: (state, action) => {
      state.filteredProjects = action.payload;
    },
    addCart: (state, action) => {
      state.cartProjects.push(action.payload);
    },
  },
});
export default projectSlice.reducer;
export const { addProject, addFilteredProjects, addCart } =
  projectSlice.actions;
