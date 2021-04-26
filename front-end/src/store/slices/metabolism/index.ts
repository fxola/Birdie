import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/store/root-reducer';
import { MetabolismEvents } from '@App/types';
import { MetabolismState } from './types';

const initialState: MetabolismState = {
  type: MetabolismEvents.food_intake_observation,
  isLoading: false,
  success: false,
  results: [],
};

export const metabolismSlice = createSlice({
  name: 'metabolism',
  initialState,
  reducers: {
    setMetabolismType: (state, action: PayloadAction<MetabolismEvents>) => {
      state.type = action.payload;
    },
  },
  extraReducers: {},
});

export const { setMetabolismType } = metabolismSlice.actions;
export const metabolismTypeSelector = (state: RootState) =>
  state.metabolism.type;

export default metabolismSlice.reducer;
