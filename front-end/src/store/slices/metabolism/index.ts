import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/store/root-reducer';
import { MetabolismEvents } from '@App/types';
import { MetabolismState } from './types';
import { getMetabolismReducer } from './reducer';

const initialState: MetabolismState = {
  type: MetabolismEvents.food_intake_observation,
  isLoading: false,
  success: false,
  results: [],
  current_page: 1,
  last_page: 1,
  error: null,
  hasMore: false,
};

export const metabolismSlice = createSlice({
  name: 'metabolism',
  initialState,
  reducers: {
    setMetabolismType: (state, action: PayloadAction<MetabolismEvents>) => {
      state.type = action.payload;
    },
  },
  extraReducers: {
    ...getMetabolismReducer,
  },
});

export const { setMetabolismType } = metabolismSlice.actions;

export const metabolismSelector = (state: RootState) => state.metabolism;

export default metabolismSlice.reducer;
