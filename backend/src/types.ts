export enum MetabolismEvents {
  food_intake_observation = 'food_intake_observation',
  catheter_observation = 'catheter_observation',
  toilet_visit_recorded = 'toilet_visit_recorded',
  incontinence_pad_observation = 'incontinence_pad_observation',
}

export enum WellbeingEvents {
  general_observation = 'general_observation',
  physical_health_observation = 'physical_health_observation',
  mood_observation = 'mood_observation',
  concern_raised = 'concern_raised',
}

export enum MedicationEvents {
  regular_medication_taken = 'regular_medication_taken',
  no_medication_observation_received = 'no_medication_observation_received',
  regular_medication_maybe_taken = 'regular_medication_maybe_taken',
  regular_medication_partially_taken = 'regular_medication_partially_taken',
}

export enum AlertEvents {
  alert_raised = 'alert_raised',
  alert_qualified = 'alert_qualified',
}

export type EventTypes = 'metabolism' | 'wellbeing' | 'medication' | 'alert';
