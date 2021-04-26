import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventType } from '@App/types';
import { RootState } from '@App/store';

const initialState: { path: string } = {
  path: '',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardPath: (
      state,
      action: PayloadAction<{ id: string; tab: EventType }>
    ) => {
      const { id, tab } = action.payload;
      state.path = `${id}/${tab}`;
    },
  },
});

export const { setDashboardPath } = dashboardSlice.actions;
export const globalPathSelector = (state: RootState) => state.dashboard.path;

export default dashboardSlice.reducer;
