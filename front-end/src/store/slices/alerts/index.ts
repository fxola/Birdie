import { RootState } from '@App/store/root-reducer';
import { createSlice } from '@reduxjs/toolkit';
import { getAlertReducer } from './reducer';
import { AlertState } from './types';

const initialState: AlertState = {
  total_alert_raised: 0,
  total_alert_qualified: 0,
  alert_qualified: [],
  current_page: 1,
  last_page: 1,
  isLoading: false,
  success: false,
  error: null,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {},
  extraReducers: {
    ...getAlertReducer,
  },
});

export const {} = alertSlice.actions;

export const alertSelector = (state: RootState) => state.alert;

export default alertSlice.reducer;
