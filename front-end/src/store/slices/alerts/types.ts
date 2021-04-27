import { SeverityType } from '@App/types';

export interface AlertResult {
  id: string;
  note: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  care_recipient_id: string;
  alert_id: string;
  alert_severity: SeverityType;
}
export interface AlertState {
  isLoading: boolean;
  success: boolean;
  total_alert_raised: number;
  total_alert_qualified: number;
  alert_qualified: AlertResult[];
  current_page: number;
  last_page: number;
  error: string | null;
}
export interface AlertSuccessResponse {
  total_alert_raised: number;
  total_alert_qualified: number;
  alert_qualified: {
    results: Array<string>;
    current_page: number;
    last_page: number;
  };
}
