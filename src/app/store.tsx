import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '@entities/projects/slice/ProjectSlice';

export const store = configureStore({
  reducer: {
    project: projectSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch