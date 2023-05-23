import { Step } from './types';

export enum PlanTypeEnum {
  ARCADE = 'Arcade',
  ADVANCED = 'Advanced',
  PRO = 'Pro',
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

// this is a work around to avoid an error
export const FIELDS_BY_STEP = {
  [1 as Step]: [
    FormFieldsEnum.NAME,
    FormFieldsEnum.EMAIL,
    FormFieldsEnum.PHONE,
  ],
  [2 as Step]: [FormFieldsEnum.PLAN_TYPE, FormFieldsEnum.PLAN_BILLING],
  [3 as Step]: [FormFieldsEnum.ADD_ONS],
  [4 as Step]: [],
};

export enum AddOnTitlesEnum {
  ONLINE_SERVICE = 'Online service',
  LARGER_STORAGE = 'Larger storage',
  CUSTOMIZABLE_PROFILE = 'Customizable profile',
}
