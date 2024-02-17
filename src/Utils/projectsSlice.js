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
    addCart(state, action) {
      const itemToAdd = action.payload;
      const existingItem = state.cartProjects.find(item => item.projectId === itemToAdd.projectId);
      if (existingItem) {
        console.log(existingItem);
        // If item already exists, update quantity
        existingItem.quantity++;
      } else {
        // Otherwise, add new item to the cart
        state.cartProjects.push({ ...itemToAdd, quantity: 1 });
      }
    },
    removeProjectFromCart(state, action){
      state.cartProjects=state.cartProjects.filter(item=>item.projectId!==action.payload);
    },
    updateQuantity(state, action) {
      const { projectId, quantity } = action.payload;
      const itemToUpdate = state.cartProjects.find(item => item.projectId === projectId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  }
});
export default projectSlice.reducer;
export const { addProject, addFilteredProjects, addCart, removeProjectFromCart, updateQuantity } =
  projectSlice.actions;
