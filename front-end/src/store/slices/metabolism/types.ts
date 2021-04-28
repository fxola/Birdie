import { MetabolismEvents } from '@App/types';

export interface MetabolismResult {
  id: string;
  note: string;
  visit_id: string;
  timestamp: string;
  event_type: string;
  meal: string;
  volume_ml: number;
  caregiver_id: string;
  care_recipient_id: string;
}
export interface MetabolismState {
  type: MetabolismEvents;
  isLoading: boolean;
  success: boolean;
  results: MetabolismResult[];
  current_page: number;
  last_page: number;
  error: string | null;
  hasMore: boolean;
}

export interface MetabolismSuccessResponse {
  events: Array<string>;
  total: number;
  current_page: number;
  last_page: number;
}
