import { createSlice } from "@reduxjs/toolkit";
import { Report } from "../Report";


const initialState = { 
  report: {} as Report
};

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReport: (state, action) => {
      state.report = action.payload
    },
    removeReport: (state) => {
      state.report = {} as Report;
    }
  }
});

export const { setReport, removeReport } = reportSlice.actions;


export default reportSlice.reducer;

