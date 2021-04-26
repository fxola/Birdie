import { combineReducers } from '@reduxjs/toolkit';

import { alertSlice } from './slices/alerts';
import { dashboardSlice } from './slices/dashboard';
import { metabolismSlice } from './slices/metabolism';
import { wellbeingSlice } from './slices/wellbeing';

export const rootReducer = combineReducers({
  dashboard: dashboardSlice.reducer,
  metabolism: metabolismSlice.reducer,
  alert: alertSlice.reducer,
  wellbeing: wellbeingSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
