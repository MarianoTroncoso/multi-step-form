import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from './constants';
export type Step =
  | typeof FIRST_STEP
  | typeof SECOND_STEP
  | typeof THIRD_STEP
  | typeof FOURTH_STEP;
