import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../Project";


const initialState = { 
  project: {} as Project
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload
    },
    removeProject: (state) => {
      state.project = {} as Project;
    }
  }
});

export const { setProject, removeProject } = projectSlice.actions;


export default projectSlice.reducer;

