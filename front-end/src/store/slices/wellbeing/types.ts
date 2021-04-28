import { WellbeingEvents } from '@App/types';

export interface WellbeingResult {
  id: string;
  note: string;
  visit_id: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  care_recipient_id: string;
}
export interface WellbeingState {
  type: WellbeingEvents;
  isLoading: boolean;
  success: boolean;
  results: WellbeingResult[];
  current_page: number;
  last_page: number;
  error: string | null;
  hasMore: boolean;
}
export interface WellbeingSuccessResponse {
  events: Array<string>;
  total: number;
  current_page: number;
  last_page: number;
}
