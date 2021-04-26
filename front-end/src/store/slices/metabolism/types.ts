import { MetabolismEvents } from '@App/types';

export interface MetabolismState {
  type: MetabolismEvents;
  isLoading: boolean;
  success: boolean;
  results: [];
}
