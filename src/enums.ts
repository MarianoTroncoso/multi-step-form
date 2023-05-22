import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from './constants';

export enum PlanTypeEnum {
  ARCADE = 'arcade',
  ADVANCED = 'advanced',
  PRO = 'pro',
}

export enum PlanBillingEnum {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export const FormFieldsEnum = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  PLAN_TYPE: 'planType',
  PLAN_BILLING: 'planBilling',
  ADD_ONS: 'addOns',
};

export const FIELDS_BY_STEP = {
  [FIRST_STEP]: [
    FormFieldsEnum.NAME,
    FormFieldsEnum.EMAIL,
    FormFieldsEnum.PHONE,
  ],
  [SECOND_STEP]: [FormFieldsEnum.PLAN_TYPE, FormFieldsEnum.PLAN_BILLING],
  [THIRD_STEP]: [FormFieldsEnum.ADD_ONS],
  [FOURTH_STEP]: [],
};
