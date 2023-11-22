import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects = action.payload;
    },
  },
});
export default projectSlice.reducer;
export const { addProject } = projectSlice.actions;
