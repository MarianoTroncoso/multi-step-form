import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from './constants';
import { AddOnTitlesEnum, PlanBillingEnum, PlanTypeEnum } from './enums';

export type Step =
  | typeof FIRST_STEP
  | typeof SECOND_STEP
  | typeof THIRD_STEP
  | typeof FOURTH_STEP;

export type ButtonVariant = 'back' | 'next';

export type AddOn = {
  title: AddOnTitlesEnum;
  description: string;
  price: {
    [PlanBillingEnum.MONTHLY]: number;
    [PlanBillingEnum.YEARLY]: number;
  };
};

export type FormValuesType = {
  name: string;
  email: string;
  phone: string;
  planType: PlanTypeEnum;
  planBilling: PlanBillingEnum;
  addOns: AddOn[];
};

export type Plan = {
  name: PlanTypeEnum;
  icon: string;
  price: {
    [PlanBillingEnum.MONTHLY]: number;
    [PlanBillingEnum.YEARLY]: number;
  };
};
