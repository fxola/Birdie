import { PayloadAction } from '@reduxjs/toolkit';
import { WellbeingState as State, WellbeingSuccessResponse } from './types';
import { getWellbeingRequest } from './action';
import { parseEvents } from '@App/helper';

export const getWellbeingReducer = {
  [getWellbeingRequest.pending.type]: (state: State) => {
    state.isLoading = true;
  },
  [getWellbeingRequest.fulfilled.type]: (
    state: State,
    action: PayloadAction<WellbeingSuccessResponse>
  ) => {
    const { current_page, last_page, events } = action.payload;
    state.isLoading = false;
    state.success = true;
    state.results =
      state.current_page < current_page
        ? state.results.concat(parseEvents(events))
        : parseEvents(events);
    state.current_page = current_page;
    state.last_page = last_page;
  },
  [getWellbeingRequest.rejected.type]: (
    state: State,
    action: PayloadAction<Error>
  ) => {
    state.isLoading = false;
    state.error = action.payload.message;
  },
};
