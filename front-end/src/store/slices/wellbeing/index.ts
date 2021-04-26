import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WellbeingEvents } from '@App/types';
import { WellbeingState } from './types';
import { RootState } from '@App/store';
import { getWellbeingReducer } from './reducer';

const initialState: WellbeingState = {
  type: WellbeingEvents.general_observation,
  isLoading: false,
  success: false,
  results: [],
  current_page: 1,
  last_page: 1,
  error: null,
};

export const wellbeingSlice = createSlice({
  name: 'wellbeing',
  initialState,
  reducers: {
    setWellbeingType: (
      state,
      action: PayloadAction<{ type: WellbeingEvents }>
    ) => {
      state.type = action.payload.type;
    },
  },
  extraReducers: {
    ...getWellbeingReducer,
  },
});

export const { setWellbeingType } = wellbeingSlice.actions;

export const wellbeingSelector = (state: RootState) => state.wellbeing;

export default wellbeingSlice.reducer;
