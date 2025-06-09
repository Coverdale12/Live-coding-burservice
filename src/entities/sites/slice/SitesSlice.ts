import { createSlice } from "@reduxjs/toolkit";
import { Site } from "../Site";


const initialState = {
  site: {} as Site
};

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setSite: (state, action) => {
      state.site = action.payload
    },
    removeSite: (state) => {
      state.site = {} as Site;
    }
  }
});

export const { setSite, removeSite } = siteSlice.actions;


export default siteSlice.reducer;

