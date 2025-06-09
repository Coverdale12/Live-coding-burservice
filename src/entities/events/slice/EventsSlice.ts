import { createSlice } from "@reduxjs/toolkit";
import { Event } from "../Event";


const initialState = { 
  event: {} as Event
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload
    },
    removeEvent: (state) => {
      state.event = {} as Event;
    }
  }
});

export const { setEvent, removeEvent } = eventSlice.actions;


export default eventSlice.reducer;

