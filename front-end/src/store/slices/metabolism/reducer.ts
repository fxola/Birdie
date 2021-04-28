import { PayloadAction } from '@reduxjs/toolkit';
import { MetabolismState as State, MetabolismSuccessResponse } from './types';
import { getMetabolismRequest } from './action';
import { parseEvents } from '@App/helper';

export const getMetabolismReducer = {
  [getMetabolismRequest.pending.type]: (state: State) => {
    state.isLoading = true;
  },
  [getMetabolismRequest.fulfilled.type]: (
    state: State,
    action: PayloadAction<MetabolismSuccessResponse>
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
    state.hasMore = current_page !== last_page;
  },
  [getMetabolismRequest.rejected.type]: (
    state: State,
    action: PayloadAction<Error>
  ) => {
    state.isLoading = false;
    state.error = action.payload.message;
  },
};
