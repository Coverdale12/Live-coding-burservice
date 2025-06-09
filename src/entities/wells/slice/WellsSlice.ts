import { createSlice } from "@reduxjs/toolkit";
import { Wells } from "../Wells";


const initialState = {
  wells: {} as Wells
};

export const wellsSlice = createSlice({
  name: 'wells',
  initialState,
  reducers: {
    setWells: (state, action) => {
      state.wells = action.payload
    },
    removeWells: (state) => {
      state.wells = {} as Wells;
    }
  }
});

export const { setWells, removeWells } = wellsSlice.actions;


export default wellsSlice.reducer;

