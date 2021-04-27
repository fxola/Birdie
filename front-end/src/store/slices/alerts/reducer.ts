import { PayloadAction } from '@reduxjs/toolkit';
import { AlertSuccessResponse, AlertState as State } from './types';
import { getAlertRequest } from './action';
import { parseEvents } from '@App/helper';

export const getAlertReducer = {
  [getAlertRequest.pending.type]: (state: State) => {
    state.isLoading = true;
  },
  [getAlertRequest.fulfilled.type]: (
    state: State,
    action: PayloadAction<AlertSuccessResponse>
  ) => {
    const {
      alert_qualified: { current_page, last_page, results },
    } = action.payload;

    state.isLoading = false;
    state.success = true;
    state.last_page = last_page;
    state.current_page = current_page;
    state.total_alert_raised = action.payload.total_alert_raised;
    state.total_alert_qualified = action.payload.total_alert_qualified;
    state.alert_qualified =
      state.current_page < current_page
        ? state.alert_qualified.concat(parseEvents(results))
        : parseEvents(results);
  },
  [getAlertRequest.rejected.type]: (
    state: State,
    action: PayloadAction<Error>
  ) => {
    state.isLoading = false;
    state.error = action.payload.message;
  },
};
